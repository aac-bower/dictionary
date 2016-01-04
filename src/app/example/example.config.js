/*
   Config: example
*/

(function() {
    'use strict';

    angular
        .module( 'example' )
        .config( config )
        .constant( 
            'CONSTANT_KEY', {
                
            }
        )
        .run( init )
    ;

    /** @ngInject */
    function config( DictionaryProvider ) {
        DictionaryProvider.setConfig( 'debug', true );
        DictionaryProvider.setConfig( 'sourceUrl', 'app/example/example.' );
    }

    /** @ngInject */
    function init( Dictionary ) {
        Dictionary.init( {
            source: {
                "String to translate": "String to translate",
                "English": "English",
                "Dutch": "Dutch"
            }
        } );
    }
    
})();