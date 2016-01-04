/*
    Directive: example
*/

(function() {
    'use strict';

    angular
        .module('example')
        .directive('exampleDirective', exampleDirective);

    /** @ngInject */
    function exampleDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/example/example.html',
            replace: true,
            scope: {
                foo: '='
            }
        };
    }
})();
