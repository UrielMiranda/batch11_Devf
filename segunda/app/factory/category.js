/**
 * Created by urielmiranda on 04/09/16.
 */
(function(){
    'use strict';

    angular
        .module('myApp')
        .factory("apiCategory", apiCategory);

    apiCategory.$inject = ["$resource"];
    function apiCategory($resource){
        return $resource("./server/categories.json");
    }

})();