<li><a href="{{ backpack_url('dashboard') }}"><i class="fa fa-dashboard"></i> <span>{{ trans('backpack::base.dashboard') }}</span></a></li>

@if(Auth::user()->hasPermissionTo('list users'))
    <li><a href="{{ backpack_url('user') }}"><i class="fa fa-user"></i> <span>Users</span></a></li>
@endif

@if(Auth::user()->hasPermissionTo('list expert-panels'))
    <li><a href="{{ backpack_url('expert-panel') }}"><i class="fa fa-users"></i> <span>Expert Panels</span></a></li>
@endif

@if(Auth::user()->hasPermissionTo('list working-groups'))
    <li><a href="{{ backpack_url('working-group') }}"><i class="fa fa-tasks"></i> <span>Working Groups</span></a></li>
@endif

@if(Auth::user()->hasPermissionTo('list curation-types'))
    <li><a href="{{ backpack_url('curation-type') }}"><i class="fa fa-star"></i> <span>Curation Types</span></a></li>
@endif

@if(Auth::user()->hasPermissionTo('list rationales'))
    <li><a href="{{ url(config('backpack.base.route_prefix').'/rationale') }}"><i class="fa fa-file-o"></i> <span>Rationales</span></a></li>
@endif

@if(Auth::user()->hasPermissionTo('list mois'))
    <li><a href="{{ url(config('backpack.base.route_prefix').'/moi') }}"><i class="fa fa-file-o"></i> <span>MOIs</span></a></li>
@endif

@if(Auth::user()->hasAnyRole(['programmer', 'admin'])) 
    <li><a href="{{ url(config('backpack.base.route_prefix').'/upload-category') }}"><i class="fa fa-file-o"></i> <span>Upload Categories</span></a></li>
@endif

{{-- @if(Auth::user()->hasPermissionTo('view email')) --}}
    <li><a href="{{ url(config('backpack.base.route_prefix').'/email') }}"><i class="fa fa-file-o"></i> <span>Emails</span></a></li>
{{-- @endif --}}
{{-- @if(Auth::user()->hasPermissionTo('view notification')) --}}
    <li><a href="{{ url(config('backpack.base.route_prefix').'/notification') }}"><i class="fa fa-file-o"></i> <span>Notifications</span></a></li>
{{-- @endif --}}
{{-- @if(Auth::user()->hasPermissionTo('view logs')) --}}
<li><a href="/logs" target="logs"><i class="fa fa-file-o"></i> <span>Logs</span></a></li>
{{-- @endif --}}
