<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>架空日記 | 第2回松本家展</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    </head>
    <body id="top">
        <div class="title">
            <h1>松本家架空日記</h1>
        </div>
        <a href='/diaries'><div class="menu">
            <h1>一覧を見る</h1>
        </div></a>
        <a href='/diary/random'><div class="menu">
            <h1>日記を開く</h1>
        </div></a>
        <a href='/diary/create'><div class="menu">
            <h1>日記を書く</h1>
        </div></a>
    </body>
</html>