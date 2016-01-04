


/*
   Module: aac.dictionary
*/

(function() {
    'use strict';

    angular
        .module( 'aac.dictionary' )
        .provider('Dictionary', Dictionary);

    // @ngInject
    function Dictionary() {
        var config = {
            debug: false,
            functionName: '__',
            sourceUrl: './'
        };

        // @ngInject
        var serviceConstruct = function( $http, $rootScope, $timeout ) {
        	var vocabulary  = {};
            var service     = this;


            /*
            	Init
            */
            service.init = function( params ) {
                var _params = params || {};

                if ( _params.source ) {
                    service.populate( {
                        source: _params.source || {},
                        resolve: initialized
                    } );
                }
            };

            /*
                Public
            */
            service.populate = function( params ) {
                var _params = params || {};

                switch( typeof _params.source ) {
                    case 'string': 
                        populateFromUrl( _params ); 
                        break;

                    case 'object': 
                        populateFromObject( _params.source, _params.resolve || angular.noop ); 
                        break;

                    default: console.warn( 'Cannot populate dictionary from', typeof source, source ); break;
                }
            };

            service.setLanguage = function( language, callback ) {
                service.populate( {
                    source: config.sourceUrl + language + '.json',
                    resolve: callback
                } );
            };


            /*
                Private
            */
            function translate( key ) {
                // if the key is in the vacabulary return it. If not give back the key or, if in debug mode, add 'Unknown Key:' to the key before returning it
            	return vocabulary[ key ] ? vocabulary[ key ] : ( config.debug ? ( 'Unknown Key: ' + key ) :  key);
            }

            function populateFromObject( source, resolve ) {
            	vocabulary = angular.copy( source );
                resolve();
            }

            function populateFromUrl( params ) {
                $http( {
                    method:  'GET',
                    url:     params.source
                } ).then( 
                        function( response ) {
                            populateFromUrlSuccess( response, params );
                        },
                        params.reject  || angular.noop
                    )
                ;
            }

            function populateFromUrlSuccess( response, params) {
                vocabulary = response.data;

                if ( params.resolve ) params.resolve( response.data );
            }

            function initialized(  ) {
                $rootScope[ config.functionName ] = translate;
            }

            return service;
        };
 

        return {
            setConfig: function( key, value ) {
                config[ key ] = value;
            },
            $get: serviceConstruct
        };
    }
} )();