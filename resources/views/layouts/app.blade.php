<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ site_title() }}</title>

    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#284851">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">    

    
    <!-- Styles -->
    <link 
        rel="preload stylesheet" 
        href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" 
        as="style" 
        onload="this.rel = 'stylesheet'"
    >

    <link href="{{ mix('css/app.css') }}" rel="preload stylesheet" as="style">



    {{-- @include('google_analytics') --}}

</head>
<body>
    <div>
        <nav class="navbar navbar-default navbar-expand-md navbar-light navbar-laravel {{ config('app.env') }}">
            <div class="container">
                <a class="navbar-brand" href="/#/">
                    {{-- {{ site_title() }} --}}
                    <img src="/images/clingen_logo_75w.png">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    @if (!Auth::guest())
                    <ul class="navbar-nav mr-auto">
                        @if (Auth::user()->can('create curations'))
                            <li>
                                <a class="nav-link" href="/#/">Dashboard</a>
                            </li>
                        @endif
                        <li>
                            <a class="nav-link" href="/#/curations">Curations</a>
                        </li>
                        <li>
                            <a class="nav-link" href="/#/working-groups">Working Groups</a>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                            <a class="nav-link" href="/#/curations/export">Curation Export</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Bulk Lookup <span class="caret"></span>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="nvabarDropdown">
                                <a class="dropdown-item" href="/#/bulk-lookup/curations">Curation Lookup</a>
                                <a class="dropdown-item" href="/#/bulk-lookup/genes">Gene/Phenotype Lookup</a>    
                            </div>
                        </li>
                    </ul>
                    @endif

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li><a class="nav-link" href="{{ route('login') }}">Login</a></li>
                        @else
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a
                                        class="dropdown-item" 
                                        href="/#/curations/export"
                                    >
                                        Curation Export
                                    </a>

                                    @if (\Auth::user()->hasAnyRole('programmer|admin') || \Auth::user()->isCoordinator())
                                        <a class="dropdown-item" href="/bulk-uploads">Bulk Upload</a>
                                        <div class="dropdown-divider"></div>
                                    @endif 
                                    @role('programmer|admin')
                                        <a href="{{ route('backpack') }}" class="dropdown-item">Admin</a>
                                        @role('programmer')
                                            <a class="dropdown-item" href="{{ route('logs') }}" target="logs">Logs</a>
                                        @endrole
                                        <div class="dropdown-divider"></div>
                                    @endrole

                                    <a class="dropdown-item" href="/files/SOP_V1.pdf" target="sop">SOP</a>

                                    <div class="dropdown-divider"></div>

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                         @endguest
                        @include('partials.help')
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>

        @include('partials.impersonate');
        {{-- @include('partials.version_info'); --}}
    <!-- Scripts -->
    <script>
        window.user = {!! json_encode($user) !!}.user
        window.maxUploadSize = '{{getMaxUploadSizeForHumans()}}'
        window.supportedMimes = {!! json_encode(config('project.supported-mimes')) !!}
    </script>
    <script src="{{ mix('js/app.js') }}"></script>

    @stack('scripts')
</body>
</html>
