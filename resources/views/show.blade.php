<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title>架空日記 | 第2回松本家展</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    </head>
    <body>
        <h1>松本家架空日記</h1>
        <div class='diary'>
            <h2 class='title'>
                <a href="/diary/{{ $diary->id }}">{{ $diary->title }}</a>
            </h2>
            @if($diary->year < 0)
                <h3 class='date'>紀元前{{ -1*$diary->year }}年@date_jp($diary->date)</h3>
            @else
                <h3 class='date'>{{ $diary->year }}年@date_jp($diary->date)</h3>
            @endif
            <p class='body'>{{ $diary->body }}</p>
            <p class='writer'>{{ $diary->user->name }}</p>
        </div>
        <a href="/">戻る</a>
    </body>
</html>