'use strict';

Elixir.extend('assetVersion', function(watcher) {
  Elixir.mixins.exec(
    'php artisan asset-version:update',
    watcher ? new Elixir.GulpPaths().src(watcher, Elixir.config.publicPath).src.path : null
  );
});
