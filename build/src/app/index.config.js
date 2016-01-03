/*
   Config: aac.dictionary
*/

(function() {
    'use strict';

    angular
        .module( 'aac.dictionary' )
        .config( config )
        .constant( 
            'CONSTANT_KEY', {
                
            }
        )
    ;

    /** @ngInject */
    function config() {
        console.log('dict init');
    }
    
})();