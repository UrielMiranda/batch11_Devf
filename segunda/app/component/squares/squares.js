/**
 * Created by urielmiranda on 04/09/16.
 */
(function(){
    'use strict';
    var square = {
        templateUrl : "./app/component/squares/squares.html",
        controller: squareCtrl
    };

    angular
        .module('myApp')
        .component("square",square);

    squareCtrl.$inject = ["apiCategory"];
    function squareCtrl(apiCategory){
        var square = this;

        square.categories = apiCategory.query();
        console.log(square.categories);
    }
})();