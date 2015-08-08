(function() {
    'use strict';

    angular
        .module('utils')
        .factory('_', lodash);

    lodash.$inject = ['$window'];

    /* @ngInject */

    function lodash($window) {

        var _ = $window._;
        delete($window._);
        /** Custom lodash mixins **/
        return _;
    }
}());
