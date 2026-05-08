<?php
namespace HeyFam\Core;

final class Plugin {
    public function boot(): void {
        new \HeyFam\Core\Privacy\PIIShield();
        new \HeyFam\Core\REST\Routes();
        new \HeyFam\Core\Fams\Roles();
    }

    public static function activate(): void {
        \HeyFam\Core\Fams\Roles::seed_all_existing_sites();
        flush_rewrite_rules();
    }

    public static function deactivate(): void {
        flush_rewrite_rules();
    }
}
