<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="description" content="DEVELOP BY CriTTeR">
        <meta name="keywords" content="erp-project, new-erp, erp-template">
        <meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="url_report" content="{{ $url_report ?? '' }}">
        <title>@yield('title', 'MiTristeERP')</title>
        <!--custom-->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/toastr.min.css') }}" />
        @yield('head')
    </head>
    <body>
        @yield('body')
    </body>
    <footer>
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/md5.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/moment.min.js') }}"></script>
        @yield('footer')
    </footer>
</html>