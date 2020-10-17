@if ($paginator->lastPage() > 1)
<nav class="pagination-wrap d-inline-block mt-30" aria-label="Page navigation example">
    <ul class="pagination custom-pagination pagination-rounded pagination-filled">
        
        <li class="{{ ($paginator->currentPage() == 1) ? 'page-item disabled' : 'page-item' }}">
            <a class="page-link" href="{{ $paginator->url($paginator->currentPage()-1) }}">{!! __('pagination.previous') !!}</a>
        </li>
        @for ($i = 1; $i <= $paginator->lastPage(); $i++)
            <li class="{{ ($paginator->currentPage() == $i) ? 'page-item active' : 'page-item' }}">
                <a class="page-link" href="{{ $paginator->url($i) }}">{{ $i }}</a>
            </li>
        @endfor
        <li class="{{ ($paginator->currentPage() == $paginator->lastPage()) ? 'page-item disabled' : 'page-item' }}">
            <a class="page-link" href="{{ $paginator->url($paginator->currentPage()+1) }}" >{!! __('pagination.next') !!}</a>
        </li>
    </ul>
</nav>
@endif