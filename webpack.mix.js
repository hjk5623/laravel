const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/admin.js', 'public/js')
    .sass('resources/sass/admin.scss', 'public/css')
    .sass('resources/sass/dashboard.scss', 'public/css')
    .extract([
        'jquery'
    ])
    .autoload({
        jquery: ['$', 'jQuery', 'jquery'],
    })
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]).version();


