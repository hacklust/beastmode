(function () {
    'use strict';

    angular
        .module('beastmode.core', [
            // ng-defaults
            'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource',
            // reusable code blocks/utils
            'blocks.logger', 'blocks.exception', 'blocks.router',
            // third-party libraries
            'ui.router', 'ngMaterial'
        ]);
})();
