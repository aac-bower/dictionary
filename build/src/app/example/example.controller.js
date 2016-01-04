/*
    Controller: example
*/

(function() {
    'use strict';

    angular
        .module('example')
        .controller('ExampleController', ExampleController);

    /** @ngInject */
    function ExampleController( Dictionary ) {
        var vm = this;

        vm.setLanguage = function( language ) {
            console.log('CTRL set', language);
            Dictionary.setLanguage( language );
        };
    }
})();