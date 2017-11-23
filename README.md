# laravel-elixir-asset-version

Update [asset version configuration](https://github.com/ElfSundae/laravel-asset-version) for [Laravel Elixir](https://laravel.com/docs/5.3/elixir).

## Installation

```sh
npm install --save-dev laravel-elixir-asset-version
```

## Usage

```js
const elixir = require('laravel-elixir');

require('laravel-elixir-asset-version');

elixir((mix) => {
    mix.sass('app.scss')
       .webpack('app.js')
       // .assetVersion() // Do not watch file changes
       .assetVersion(['js', 'css']) // Watch "public/js", "public/css" directories
});
```
