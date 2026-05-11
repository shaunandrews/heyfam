# HeyFam Comments v1 — Design

**Date:** 2026-05-11
**Status:** Approved
**Scope:** Finish the v1 commenting UI so fam members can leave nested comments, reply to specific comments, and react to comments. No notification fan-out in this round (tracked separately).

## Goals

- Replies target the specific comment you tapped Reply on (today the button always sends `parent_id: 0` — bug).
- Nested replies render readably on mobile up to 3 visual indent levels, then flatten with `↳ @ParentName` attribution.
- Comments show author, avatar, relative timestamp, and reactions — same affordance as posts.
- A reply composer opens inline under the comment being replied to; the top-level composer at the bottom remains for new top-level comments.
- Server validates that `parent_id` is a real comment on the same post.

## Non-goals

- Comment notification fan-out (push/email to post author + thread participants). Spec mentions it; will be a separate round.
- Editing or deleting comments. Spec puts these out of v1.
- Threaded depth beyond 5 (server-side cap stays at `thread_comments_depth=5`).
- Mentions / @-syntax. The `↳ @Name` prefix is a display affordance, not a user-typed mention.

## Reference

- Project spec: `docs/superpowers/specs/2026-05-08-heyfam-v1-design.md`
- Project plan: `docs/superpowers/plans/2026-05-08-heyfam-v1.md`

## Current state (what already works)

- `Threading.php` — sets `thread_comments=1`, `thread_comments_depth=5`, rejects anonymous comments.
- `POST /heyfam/v1/{fam}/comments` — calls `wp_insert_comment` with `comment_parent`. Working.
- `GET /heyfam/v1/{fam}/post/{id}` — returns post + flat comment array (sorted ASC by date) + reaction counts.
- `comments.js` IAPI store — has `submit`, `updateBody`, a `reply` action, and a single-post `refresh` poll every 10s.
- `single.html` — renders post + comments, but only handles 1 visual nesting level (`children`) and the Reply button always sets `parent_id: 0`.
- Reactions backend supports `target_type='comment'`.

## What's missing

1. The Reply button always passes `parent_id: 0` instead of the target comment ID.
2. Only 2 visual levels render (post-level + one child). Comments deeper than that aren't displayed.
3. No avatars, timestamps, or reactions UI on comments.
4. No "you're replying to X" cue when composing a reply.
5. `parts/comment-thread.html` is a placeholder — designed to be the recursive thread template but unused.
6. Server doesn't validate `parent_id` (no check that the parent exists, belongs to the same post, or isn't trashed).

## Design

### Threading & rendering

The flat comment array from `single_post` gets nested into a tree client-side. The existing `nest()` helper in `comments.js` does this and needs to keep doing it — extend it to compute a `depth` per node during the same pass.

A new `parts/comment-thread.html` becomes the recursive template. Each rendered comment is one node with these elements:

```
[avatar]  Name · 3m ago
          ↳ @ParentName        (only when depth ≥ 3)
          Comment body. Wraps.
          [❤️ 2] [😭 1]        (only when reactions exist)
          Reply  ·  React      (action row)
          [inline composer]    (only when state.composing === this.id)
          [children…]          (recursive)
```

**Indent rule:** the rendered indent caps at depth 3. Comments at depth ≥ 3 still attach to their actual parent in the tree (so the data shape matches the DB), but render at the depth-3 indent with a `↳ @ParentName` prefix derived client-side from a `id → name` lookup built once per refresh.

**Why client-side nesting:** the server returns a flat ASC list. Building the tree (and depth) in JS keeps the server endpoint simple and gives the renderer access to the full parent map for `↳ @Parent` lookups.

### Reply composer

Two distinct composers:

- **Top-level composer:** always-visible textarea at the bottom of the comments section. Submits with `parent_id: 0`.
- **Inline reply composer:** rendered conditionally under each comment, opens when `state.composing === this.comment.id`. Only one inline composer open at a time. Submits with `parent_id: <this.comment.id>`.

State model (single store, single body string):

```js
state: {
  composing: 0,    // 0 = no inline composer open; otherwise parent comment id
  body: '',
  submitting: false,
}
```

Action behavior:

- `reply(comment_id)` — toggles. If `state.composing === comment_id`, sets it to 0 (close). Otherwise sets it to `comment_id` and clears `state.body` (switching composer abandons the draft).
- `submit(e)` — uses `state.composing` as `parent_id`. On success: clear `body`, set `composing=0`, trigger `refresh()`.

**Only one composer is active at a time.** The top-level composer is hidden when `composing > 0` (uses `data-wp-class--is-hidden` on the wrapper); the inline composer renders only on the comment whose id matches `composing`. There's exactly one textarea bound to `state.body` at any moment, which keeps the model simple.

Autofocus: the inline textarea uses `data-wp-init` to focus when it mounts.

### Comment metadata

**Avatar:** server adds `avatar_url` from `get_avatar_url($user_id, ['size' => 64, 'default' => '404'])`. The `default=404` makes Gravatar return a real 404 for phone-only users with no Gravatar account. Client detects the failure via the `<img>` `onerror` and replaces it with a colored circle showing the user's first initial. Color is derived from `user_id` (`hsl(${(user_id * 137) % 360}, 60%, 55%)` — golden-angle hue spread for distinguishable colors across small numbers of users).

**Relative timestamp:** small client-side formatter:
- `< 60s` → "now"
- `< 60m` → "Nm ago"
- `< 24h` → "Nh ago"
- `< 7d` → "Nd ago"
- else → "Mon D" or "Mon D, YYYY" if not this year

Re-renders on every poll (every 10s), so timestamps stay live without separate ticking.

**Reactions:** each comment gets the same `+` pill and emoji-picker affordance as a post. Reuses the existing `heyfam/reactions` store with `target_type: 'comment'`. The reaction-pills row should be a shared visual treatment; extract it into a small inline template chunk used by both `post-card.html` and `comment-thread.html`.

### Server changes

**`serialize_comment()` in `plugins/heyfam-core/src/REST/Routes.php`:**

Add to the returned payload:
- `author.user_id` — already conceptually there but expose as `id` (it is — keep as is).
- `author.avatar_url` — call `get_avatar_url($c->user_id, ['size' => 64, 'default' => '404'])`. Returns a string or `false`. Pass `null` on `false`.

**`create_comment()` in the same file:**

Add validation before calling `wp_insert_comment`:

- If `parent_id > 0`, load the parent via `get_comment($parent_id)`.
  - If not found → 400 `invalid_parent`.
  - If `comment_post_ID !== $post_id` → 400 `invalid_parent`.
  - If `comment_approved !== '1'` (trashed/spam/pending) → 400 `invalid_parent`.

This sits inside the `Authorization::in_blog()` closure so the lookup happens in the right blog context.

**No new endpoints. No schema changes.**

### Files touched

**Plugin:**
- `plugins/heyfam-core/src/REST/Routes.php` — `serialize_comment()` adds `avatar_url`; `create_comment()` adds parent validation.

**Theme:**
- `themes/heyfam-theme/parts/comment-thread.html` — recursive comment template (replaces placeholder).
- `themes/heyfam-theme/templates/single.html` — replace the inline 2-level `wp-each` with a `template-part` reference to `comment-thread`, keep the top-level composer.
- `themes/heyfam-theme/src/interactivity/comments.js` — depth annotation in `nest()`, parent-name map, `reply` becomes a toggle keyed by comment id, avatar fallback / color helper, relative-time formatter.
- `themes/heyfam-theme/src/styles/` — comment indent levels (depth 0/1/2/3+), avatar circle + initials fallback, action row, inline composer.

## Open questions

None — answered in brainstorming.

## Testing

Manual smoke in local Studio environment:

1. Post a comment top-level → appears.
2. Reply to that comment → appears nested under it.
3. Reply to the reply (2 deep) → appears nested under that.
4. Reply to depth 2 (3 deep) → still indents.
5. Reply to depth 3 (4 deep) → flattens at depth 3 indent with `↳ @Parent`.
6. Reply to depth 4 (5 deep) → still rendered, flattened, with correct `↳ @` attribution.
7. Tap Reply on a comment → inline composer opens below it, autofocuses.
8. Tap Reply on a second comment while one's open → first closes, second opens.
9. Tap Reply on same comment again → closes.
10. React to a comment with an emoji → pill appears.
11. React with same emoji again on same comment → no duplicate (existing reactions unique constraint).
12. Try posting with invalid `parent_id` (fake id via curl) → 400 `invalid_parent`.
13. Try posting with a `parent_id` from a different post → 400 `invalid_parent`.
14. Two users in same fam: A posts, B comments → A sees B's comment within 10s via poll.
15. Avatars: a user without a Gravatar account shows the colored-initial fallback.
