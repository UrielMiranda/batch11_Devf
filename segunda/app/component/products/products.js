/**
 * Created by urielmiranda on 04/09/16.
 */
(function(){
    'use strict';

    var productList = {
        templateUrl : "./app/component/products/products.html",
        controller: productCtrl
    };

    angular
        .module('myApp')
        .component("productList",productList);

    productCtrl.$inject = ["apiProducts"];
    function productCtrl(apiProducts){
        var products = this;

        products.apiData =  apiProducts.query();

    }

})();