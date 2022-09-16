<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{config('app.name')}}</title>

        @viteReactRefresh
        @vite(['resources/scss/app.scss','resources/js/app.js'])
    </head>
    <body>
        <div id="modal"></div>
        <div id="app"></div>
    </body>
</html>
