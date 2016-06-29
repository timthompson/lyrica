/**
 * Created by tthomp on 6/27/16.
 */

(function(){
    "use strict";

    angular.module('lyrica.services', []);
    
    angular.module('lyrica.controllers', [
        'lyrica.services'
    ]);
    
    angular.module('lyrica', [
        'lyrica.controllers'
    ]);    

}());