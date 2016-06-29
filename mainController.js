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
            'error'     : ''
        };

        $scope.getLyrics = function() {

            musiXmatch.Matcher.lyrics($scope.model.artist, $scope.model.song)

                .then(function successCallBack(data) {
                    $scope.model.lyrics    = data.lyrics;
                    $scope.model.copyright = data.copyright;
                    $scope.model.error     = '';
                }, function errorCallBack(data) {
                    $scope.model.lyrics    = data.lyrics;
                    $scope.model.copyright = data.copyright;
                    $scope.model.error     = data.error;
                });

        }

    }
    
}());