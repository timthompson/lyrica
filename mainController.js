/**
 * Created by tthomp on 6/27/16.
 */

( function() {

    angular
        .module( 'lyrica.controllers' )
        .controller( 'mainController', mainController );
    
    mainController.$inject = [ 'musiXmatch', '$scope' ];

    /* Main controller */
    function mainController( musiXmatch, $scope ) {

        $scope.model = {
            'artist'    : '',
            'song'      : '',
            'lyrics'    : '',
            'copyright' : '',
            'error'     : '',
            'waiting'   : false
        };

        $scope.getLyrics = function() {

            $scope.model.waiting = true;

            musiXmatch.Matcher.lyrics($scope.model.artist, $scope.model.song)

                .then(function successCallBack(data) {
                    $scope.model.lyrics    = data.lyrics;
                    $scope.model.copyright = data.copyright;
                    $scope.model.error     = '';

                    $scope.model.waiting   = false;
                }, function errorCallBack(data) {
                    $scope.model.lyrics    = data.lyrics;
                    $scope.model.copyright = data.copyright;
                    $scope.model.error     = data.error;

                    $scope.model.waiting   = false;
                });

        }

    }
    
}());