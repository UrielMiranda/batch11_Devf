/**
 * Created by urielmiranda on 04/09/16.
 */
(function(){
    'use strict';

    angular
        .module('myApp')
        .config(config);

    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider
            .when('/',
                {
                    template: "<home></home>"
                })
            .when('/login',{template: "<login></login>"})
            .otherwise({
                redirectTo : '/'
            });
    }

})();