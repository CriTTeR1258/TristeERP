@extends('Layouts.Basic')

@section('head')
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="{{ asset('DataTables/datatables.min.css') }}" >

    <link rel="stylesheet" href="{{asset('css/style.css')}}">
@endsection
@section('body')
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        <a style="color:red;" class="btn btn-outline-Danger" href="/logout">Cerrar Sesión</a>
      </form>
    </div>
  </div>
</nav>

<main class="container">
  <div class="bg-light p-5 rounded">
    <h1>Navbar example</h1>
    <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport.</p>
    <a class="btn btn-lg btn-primary" href="/docs/5.0/components/navbar/" role="button">View navbar docs &raquo;</a>
  </div>
</main>
@endsection
@section('footer')
    <!-- jquery
		============================================ -->
        <script src="{{asset('js/jquery.js')}}"></script>
    <!-- datatable -->
    <script type="text/javascript" src="{{asset('DataTables/datatables.min.js')}}"></script>
    <!-- main JS
		============================================ -->
    <script src="{{asset('js/main.js')}}"></script>
    <!--custom-->
    @yield('scripts')
@endsection