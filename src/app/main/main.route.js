(function() {
    'use strict';

    angular
        .module('beastmode.main')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'main',
                config: {
                    url: '/',
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm',
                    resolve: {
                    }
                }
            }
        ];
    }
})();
