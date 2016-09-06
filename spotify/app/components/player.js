/**
 * Created by urielmiranda on 05/09/16.
 */
(function(){
    'use strict';

    var spotifyPlayer = {
        templateUrl : "./app/components/player.html",
        controller: spotifyCtrl
    };

    angular
        .module("spotify")
        .component("spotifyPlayer", spotifyPlayer);

    spotifyCtrl.$inject = ["apiSpotify"];
    function spotifyCtrl(apiSpotify){
        var spotify = this;

        spotify.playlist = null;
        spotify.song = null;
        spotify.audio = new Audio;
        spotify.play = play;
        spotify.search = dosearch;
        spotify.milliseconds = milliseconds;


        function milliseconds(ms){
            var min = Math.floor((ms/1000/60));
            var sec = Math.floor((ms/1000) % 60);
            return min+":"+sec;
        }

        function play(song){
            spotify.song = song;
            spotify.audio.src = song.preview_url;
            spotify.audio.pause();
            spotify.audio.play();
        //
        }

        function dosearch(){
            spotify.searchData = apiSpotify.get({'song': spotify.song_name})
                .$promise.then(function(response){
                    spotify.playlist = response.tracks.items;

                })
        }





    }

})();