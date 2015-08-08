(function() {
    'use strict';

    angular
        .module('utils')
        .directive('includeReplace', includeReplace);

    includeReplace.$inject = [];

    /* @ngInject */
    function includeReplace() {

        var directive = {
            restrict: 'A',
            require: 'ngInclude',
            link: function(scope, elem) {
                elem.replaceWith(elem.children());
            }
        };

        return directive;

    }
}());
