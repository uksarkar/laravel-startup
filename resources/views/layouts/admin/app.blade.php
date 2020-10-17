<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title','Home') | {{ $global->company_name }}</title>

    <!-- favicon -->
    <link rel="shortcut icon" href="{{ $global->favicon }}" type="image/x-icon">
	
	<!-- Toastr CSS -->
    <link href="{{ asset('vendors/jquery-toast-plugin/dist/jquery.toast.min.css') }}" rel="stylesheet" type="text/css">

    <!-- Custom CSS -->
    <link href="{{ asset('dist/css/style.css') }}" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    @yield('page-styles')
</head>

<body>
    <!-- Preloader -->
    <div class="preloader-it">
        <div class="loader-pendulums"></div>
    </div>
    <!-- /Preloader -->

    <!-- HK Wrapper -->
    <div id="app" class="hk-wrapper hk-vertical-nav">

        <!-- Top Navbar -->
            @include('layouts.admin.includes.navbar')
        <!-- /Top Navbar -->

        <!-- Vertical Nav -->
            @include('layouts.admin.includes.sidebar')
        <!-- /Vertical Nav -->

        <!-- Main Content -->
        <div class="hk-pg-wrapper">

            <!-- Breadcrumb -->
                @yield('breadcrumb')
            <!-- /Breadcrumb -->

			<!-- Container -->
            <div class="container">
                @yield('content')
            </div>
            <!-- /Container -->

            <!-- Footer -->
            @include('layouts.admin.includes.footer')
            <!-- /Footer -->
        </div>
        <!-- /Main Content -->
    </div>
    <!-- /HK Wrapper -->

    <!-- jQuery -->
    <script src="{{ asset('vendors/jquery/dist/jquery.min.js') }}"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="{{ asset('vendors/popper.js/dist/umd/popper.min.js') }}"></script>
    <script src="{{ asset('vendors/bootstrap/dist/js/bootstrap.min.js') }}"></script>

    <!-- Slimscroll JavaScript -->
    <script src="{{ asset('dist/js/jquery.slimscroll.js') }}"></script>

    <!-- Fancy Dropdown JS -->
    <script src="{{ asset('dist/js/dropdown-bootstrap-extended.js') }}"></script>

    <!-- FeatherIcons JavaScript -->
    <script src="{{ asset('dist/js/feather.min.js') }}"></script>
	
	<!-- Counter Animation JavaScript -->
	<script src="{{ asset('vendors/waypoints/lib/jquery.waypoints.min.js') }}"></script>
	<script src="{{ asset('vendors/jquery.counterup/jquery.counterup.min.js') }}"></script>
	<!-- Toastr JS -->
    <script src="{{ asset('vendors/jquery-toast-plugin/dist/jquery.toast.min.js') }}"></script>
    <!-- Init JavaScript -->
    <script src="{{ asset('dist/js/init.js') }}"></script>

    @production
        <!-- production version, optimized for size and speed -->
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    @else
        <!-- development version, includes helpful console warnings -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    @endproduction

    @yield('page-scripts')
</body>
</html>
