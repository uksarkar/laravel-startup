<script>
    $(document).ready(function(){
        @if(session()->has('success'))
            showMsg({
                title:"Success!",
                msg: `{{ session()->get('success') }}`,
                type: "success"
            });
        @endif
        @if(session()->has('error'))
            showMsg({
                title:"Error!",
                msg: `{{ session()->get('error') }}`,
                type: "danger"
            });
        @endif
        @if(session()->has('warning'))
            showMsg({
                title:"Caution!",
                msg: `{{ session()->get('warning') }}`,
                type: "warning"
            });
        @endif
        @if(session()->has('info'))
            showMsg({
                title:"OK!",
                msg: `{{ session()->get('info') }}`,
                type: "info"
            });
            @endif

        function showMsg({title,msg,type,icon}){
            $.toast({
                heading: title ? title:"",
                text: `${icon ? '<i class="jq-toast-icon ti-'+icon+'"></i>':''}<p>${msg}</p>`,
                position: 'bottom-right',
                loaderBg: '#f68daf',
                class: `jq-toast-${type ? type:'success'}`,
                hideAfter: 3500,
                stack: 6,
                showHideTransition: 'fade'
              });
        }
    })
</script>