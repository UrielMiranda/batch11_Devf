(function(){
    'use strict';
    var hello = {
        bidings: {
          imgs : "="
        },
        templateUrl: './partials/hello.html',
        controller : helloCtrl
    };

    angular
        .module("myApp",[])
        .component("hello",hello)
        .controller("firstCtrl", firstCtrl);


    function firstCtrl(){
        var first = this;

        first.name = "Uriel";
        first.change = change;


        function change(){
            first.name = "Nekro";
        }


    }

    function helloCtrl(){
        var hello = this;
        hello.saludo = "Controlador componente"
        hello.imgs = ["http;:S"]
    }





})();