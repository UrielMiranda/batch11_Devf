/**
 * Created by urielmiranda on 31/08/16.
 */
(function(){
    'use strict';

    var hero = {
        templateUrl : "./component/hero.html",
        controller: marvelCtrl
    };

    angular
        .module("marvel")
        .component("hero",hero);

    marvelCtrl.$inject = ["apiMarvel"];
    function marvelCtrl(apiMarvel){
        var char = this;
        char.hero = null;
        char.dataMarvel = apiMarvel.get()
            .$promise.then(function(response){
                char.hero = response.data.results;
                console.log(char.hero);
            })
    }

})();
