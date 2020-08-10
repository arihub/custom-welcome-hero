<?php

/*
 * This file is part of funkeye/custom-welcome-hero.
 *
 * Copyright (c) 2020 Funkeye.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Funkeye\CustomWelcomeHero;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    function (Dispatcher $events) {
        $events->subscribe(Listeners\LoadSettingsFromDatabase::class);
    },
];
