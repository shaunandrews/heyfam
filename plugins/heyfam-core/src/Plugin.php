<?php
namespace HeyFam\Core;

final class Plugin {
    public function boot(): void {
        // Modules wire themselves in via constructor side effects in subsequent tasks.
    }

    public static function activate(): void {
        // Tables and roles get created here as modules are added.
        flush_rewrite_rules();
    }

    public static function deactivate(): void {
        flush_rewrite_rules();
    }
}
