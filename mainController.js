/**
 * Created by tthomp on 6/27/16.
 */
angular.module('lyrica.controllers', []).

/* Main controller */
controller('mainController', function($scope, $http) {

    $scope.model = {
        'artist'    : '',
        'song'      : '',
        'lyrics'    : '',
        'copyright' : ''
    };

    /*
     * Ideally this should be moved out into a service to keep the controller as thin as possible
     */
    $scope.apiCall = function(){
        $http.get('https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get', {
            'params' : {
                'q_artist' : $scope.model.artist,
                'q_track'  : $scope.model.song
            },
            'headers'  : {
                'X-Mashape-Key' : '', // API key
                'Accept'        : 'application/json'
            }
        }).then(function successCallBack(response){
            $scope.model.lyrics    = response.data.lyrics_body;
            $scope.model.copyright = response.data.lyrics_copyright;
        }, function errorCallBack(){
            $scope.model.lyrics    = 'No lyrics found.';
            $scope.model.copyright = '';
        });
    };
});