/**
 * Created by urielmiranda on 05/09/16.
 */
(function(){
    'use strict';


    angular
        .module("spotify")
        .factory("apiSpotify",apiSpotify);

    apiSpotify.$inject = ["$resource"];
    function apiSpotify($resource){
        return $resource("https://api.spotify.com/v1/search?q=:song&type=track&market=mx");

    }

})();