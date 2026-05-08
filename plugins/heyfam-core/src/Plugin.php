<?php
namespace HeyFam\Core;

final class Plugin {
    public function boot(): void {
        new \HeyFam\Core\Privacy\PIIShield();
    }

    public static function activate(): void {
        // Tables and roles get created here as modules are added.
        flush_rewrite_rules();
    }

    public static function deactivate(): void {
        flush_rewrite_rules();
    }
}
