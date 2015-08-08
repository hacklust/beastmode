(function() {
    'use strict';

    var core = angular
      .module('beastmode.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['$logProvider', 'toastr'];
    /** @ngInject */
    function toastrConfig($logProvider, toastr) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastr.options.timeOut = 3000;
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.preventDuplicates = true;
        toastr.options.progressBar = true;
    }

    var config = {
        appErrorPrefix: '[epw Error]',
        appTitle: 'ECal Page Widget'
    };

    core.value('config', config);

    core.config(providerConfig);

    providerConfig.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    /** @ngInject */
    function providerConfig($logProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

})();
