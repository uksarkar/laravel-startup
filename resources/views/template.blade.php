@extends('layouts.admin.app')

@section('title', '')

@section('page-styles')
    
@endsection

@section('breadcrumb')
    @include('layouts.admin.includes.breadcrumb',["items" => [
        ["text_key" => "common.admin", "route_name" => "admin.dashboard"],
        ["text_key" => "Merchant Type"]
    ]])
@endsection

@section('content')
<div class="mt-15">
    {{-- title section --}}
    <div class="hk-pg-header">
        <h4 class="hk-pg-title">
            <span class="pg-title-icon">
                <span class="feather-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
            </span>
            {{ __("common.all_merchants") }}
        </h4>
        <a href="{{ route('admin.merchants.create') }}" class="btn btn-outline-orange btn-sm float-right">{{ __("common.add_new") }}</a>
    </div>
    {{-- /title section --}}

    {{-- content section --}}
    <div class="row">
        <div class="col-xl-12">
            <section class="hk-sec-wrapper">
                {{-- <h5 class="hk-sec-title">something</h5> --}}
            </section>
        </div>
    </div>
    {{-- /content section --}}
</div>


{{-- form model --}}
<div class="modal fade" id="createMerchant" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">@{{ modelFormTitle }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{ admin.settings.packages.store }}" method="post">
                    <div class="form-group">
                        <label for="name">Name <span class="badge badge-danger badge-indicator"></span></label>
                        <input id="name" v-model="formData.name" :class="['form-control', errors.name ? 'is-invalid':'']" placeholder="Name">
                        <div class="invalid-feedback" v-if="errors.name">
                            <strong>@{{ errors.name }}</strong>
                        </div>
                    </div>
                    
                    <button type="submit" :class="['btn btn-primary float-right', isLoading ? 'disabled':'']" :disabled="isLoading">
                        <i v-if="isLoading" class="fa fa-circle-o-notch fa-spin"></i>
                        <span v-else>Save</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
{{-- /form model --}}

@endsection

@section('page-scripts')
    
@endsection