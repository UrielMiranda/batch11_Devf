/**
 * Created by urielmiranda on 02/09/16.
 */
(function(){
    'use strict';

    angular
        .module("starWars")
        .factory("apiStar",apiStar);

    apiStar.$inject = ["$resource"];
    function apiStar($resource){
        return $resource("http://swapi.co/api/:category/:id");
    }

})();