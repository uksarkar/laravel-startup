<nav class="hk-nav hk-nav-light">
    <a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close"><span class="feather-icon"><i data-feather="x"></i></span></a>
    <div class="nicescroll-bar">
        {{-- Top dashboard area --}}
        <div class="navbar-nav-wrap">
            <ul class="navbar-nav flex-column">
                <li class="nav-item @isCurrent("admin.dashboard") active @endisCurrent">
                    <a class="nav-link" href="">
                        <i class="ion ion-ios-keypad"></i>
                        <span class="nav-link-text">Dashboard</span>
                    </a>
                </li>
            </ul>
            {{-- /Top dashboard area --}}

            {{-- delivery area --}}
            <hr class="nav-separator">
            <div class="nav-header">
                <span>Options</span>
                <span>OP</span>
            </div>
            <ul class="navbar-nav flex-column">
                <li class="nav-item @isCurrent("") active @endisCurrent">
                    <a class="nav-link" href="">
                        <i class="pe-7s-note2"></i>
                        <span class="nav-link-text">Text</span>
                    </a>
                </li>
                <li class="nav-item @isCurrent("") active @endisCurrent">
                    <a class="nav-link" href="">
                        <i class="pe-7s-note"></i>
                        <span class="nav-link-text">Another</span>
                    </a>
                </li>
                <li class="nav-item @isCurrent("") active @endisCurrent">
                    <a class="nav-link" href="">
                        <i class="pe-7s-hourglass"></i>
                        <span class="nav-link-text">Link</span>
                    </a>
                </li>
            </ul>
            {{-- /delivery area --}}

            {{-- settings section --}}
            <hr class="nav-separator">
            <div class="nav-header">
                <span>User Interface</span>
                <span>UI</span>
            </div>
            <ul class="navbar-nav flex-column">
                <li class="nav-item @isCurrent("admin.settings") active @endisCurrent">
                    <a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#system_settings" @isCurrent("settings") aria-expanded="true" @endisCurrent>
                        <i class="ion ion-ios-power"></i>
                        <span class="nav-link-text">Settings</span>
                    </a>
                    <ul id="system_settings" class="nav flex-column collapse collapse-level-1 @isCurrent("") show @endisCurrent">
                        <li class="nav-item">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link @isCurrent("") text-orange @endisCurrent" href="">Settings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link @isCurrent("") text-orange @endisCurrent" href="">Another Settings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link @isCurrent("") text-orange @endisCurrent" href="">Old Settings</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            {{-- /settings section --}}
        </div>
    </div>
</nav>
<div id="hk_nav_backdrop" class="hk-nav-backdrop"></div>
