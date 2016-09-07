/**
 * Created by urielmiranda on 04/09/16.
 */
(function(){
    'use strict';

    var mapaMexico = {
        templateUrl: "./app/component/mexico/mexico.html",
        controller : mapaCtrl
    };

    angular
        .module('myApp')
        .component("mapaMexico", mapaMexico);


    mapaCtrl.$inject = ["$scope"];
    function mapaCtrl($scope){
        var mexico = this;

        mexico.list = [
            {'id':'MX-DF', 'name':"Distrito Federal"},
            {'id':'MX-JAL', 'name':"Jalisco"},
            {'id':'MX-HID', 'name':"Hidalgo"},
            {'id':'MX-AGU', 'name':"Aguascalientes"},
            {'id':'MX-CHH', 'name':"Chihuahua"},
            {'id':'MX-PUE', 'name':"Puebla"}
        ];

        mexico.over = null;

        var initialColor = "#ffecb3";
        var overColor = "#ff8f00";
        var paths = d3.selectAll("path");
        paths.style("fill",initialColor);

        paths.on('mouseover', function(){
            mexico.over = this.id;
            d3.select(this).style("fill",overColor);
            d3.select(this).style('stroke',"#fff" );
            d3.select(this).style('stroke-width', "2px");
            $scope.$apply();
        });

        paths.on('mouseout', function(){
            d3.select(this).style('fill',initialColor);

        });


    }


})();