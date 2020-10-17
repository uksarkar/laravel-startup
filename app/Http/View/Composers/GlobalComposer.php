<?php

namespace App\Http\View\Composers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Blade;
use Illuminate\View\View;

class GlobalComposer
{
    protected $user;
    protected $segments;
    protected $currentRouteName;

    public function __construct(Request $request){
        // construct variables
        $this->user = auth()->user();
        $this->segments = $request->segments();
        $this->currentRouteName = $request->route() ? $request->route()->getName():null;
    }

    
    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        /**
         * The global variable to share common data over all view
         */
        $data = new \stdClass;
        $global = new \stdClass;
        $global->user = $this->user;
        $global->segments = $this->segments;
        $global->company_name = $data->company_name ?? "Great IT";
        $global->logo = $data->logo ?? "https://www.greatitbd.com/wp-content/uploads/2018/11/logo.png";
        $global->favicon = $data->favicon ?? "https://www.greatitbd.com/wp-content/uploads/2020/04/cropped-favi-1.png";
        $global->email = $data->email ?? "greatitbd@gmail.com";
        $global->address = $data->address ?? "House#5, Road#3, Block-B, West Dhanmondi Housing, Bosila, Mohammadpur, Dhaka-1207, Bangladesh.";
        $global->copyright = $data->copyright ?? '&copy; <a href="https://greatitbd.com">Great IT</a>. all rights reserved!';
        $global->phone = $data->phone ?? '+8801688783822';
        $global->image_placeholder = url("/images/img-thumb.jpg");
        $global->money_sign = "TK";

        /**
         * Setting up custom blade directive for specially sidebar
         * To detect the current route and add the active class to current li
         * @return Boolean;
         */
        $segments = $this->segments;
        $currentRouteName = $this->currentRouteName;
        Blade::if('isCurrent', function ($url,$key = 1) use($segments,$currentRouteName) {
            return (!blank($segments) 
                    && array_key_exists($key,$segments)) 
                    && ($segments[$key] === $url)
                    || $url === $currentRouteName;
        });

        /**
         * Setting up the global variable to all of the blade file
         */
        $view->with('global', $global);
    }
}