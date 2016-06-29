/**
 * Created by tthomp on 6/28/16.
 */
(function(){
    "use strict";

    angular
        .module( 'lyrica.services' )
        .factory( 'musiXmatch', musiXmatch )
        .constant( 'MUSIXMATCH_KEYS', {
            'API' : '', // API key - you can register for a key at http://docs.mashape.com/api-keys
            'URL' : 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get'
        });

    musiXmatch.$inject = [ 'MUSIXMATCH_KEYS', '$http', '$q' ];

    function musiXmatch( MUSIXMATCH_KEYS, $http, $q ){

        return {
            Artist : {
                // reserved for additional functionality
            },
            Matcher : {
                lyrics : function lyrics( q_artist, q_song ){

                    var deferred = $q.defer();

                    $http.get( MUSIXMATCH_KEYS.URL, {
                        'params' : {
                            'q_artist' : q_artist,
                            'q_track'  : q_song
                        },
                        'headers'  : {
                            'X-Mashape-Key' : MUSIXMATCH_KEYS.API,
                            'Accept'        : 'application/json'
                        }
                    })
                    .then(function successCallBack(data) {
                        deferred.resolve({
                            'lyrics'    : data.data.lyrics_body,
                            'copyright' : data.data.lyrics_copyright
                        });
                    }, function errorCallBack(data) {
                        deferred.reject({
                            'error' : data.statusText
                        });
                    });

                    return deferred.promise;
                }
            }
        };
    }

}());