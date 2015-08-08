(function () {
    'use strict';

    angular
        .module('beastmode.main')
        .controller('MainController', MainController);

    MainController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function MainController($q, logger) {
        var vm = this;

        activate();

        function activate() {
            var promises = [];
            return $q.all(promises).then(function() {
                logger.success('main controller loaded!');
            });
        }

    }

})();
