/**
 * Created by urielmiranda on 02/09/16.
 */
(function() {
    'use strict';

    var characters = {
        bindings : {
            category: "=",
            id: '='
        },
        templateUrl: './component/character.html',
        controller: starCtrl
    };
    starCtrl.$inject = ["apiStar"];


    angular
        .module("starWars")
        .component("characters", characters);

    function starCtrl(apiStar){
            var star = this;

        star.characters = null;
        star.apiData = apiStar.get({
            'category': star.category,
            'id': star.id
        }).$promise.then(function(response){
            star.characters = response.results;
        })
    }


})();