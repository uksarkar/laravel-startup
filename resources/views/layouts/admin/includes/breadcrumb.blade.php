<nav class="hk-breadcrumb" aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-light bg-transparent">
        @foreach ($items as $item)
            @if($loop->last || !array_key_exists("route_name", $item))
            <li class="breadcrumb-item active" aria-current="page">{{ __($item["text_key"]) }}</li>
            @else
            <li class="breadcrumb-item"><a href="{{ route($item["route_name"]) }}">{{ __($item["text_key"]) }}</a></li>
            @endif
        @endforeach
    </ol>
</nav>