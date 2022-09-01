<!DOCTYPE html>
<html lang="en">
    <head>
        @yield('css')
    </head>
    <body>
        <div id='content' class="row">
            @yield('content')
        </div>
    </body>
    <footer>
        @yield('js')
        <script type="text/javascript" src="{{ asset('js/vue.js') }}"></script>
    </footer>
</html>