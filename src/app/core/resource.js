(function () {
    'use strict';

    angular
        .module('beastmode.core')
        .factory('Resource', Resource);

    Resource.$inject = ['$http', '$q', 'md5', 'api'];
    /* @ngInject */
    function Resource($http, $q, md5, api) {

        var service = {
            get: get,
            build: build
        };

        return service;

        function get(url, params, transform) {
            var deferred = $q.defer();
            var request = $http({
                url: build(url, params),
                timeout: deferred.promise
            });
            var promise = request.then(function(res) {
                return res.data;
            }, function() {
                return $q.reject('Something went wrong');
            });
            promise.abort = function() {
                deferred.resolve();
            };
            promise.finally(function() {
                promise.abort = angular.noop;
                deferred = request = promise = null;
            });

            return promise;
        }

        function build(ref, params) {
            var isFilterUndefined = angular.isUndefined(params);
            var noFilter = (isFilterUndefined || (!params || params === ''));
            var sig = api.secret + 'apiKey' + api.key;

            if (!noFilter) {
                var filterSig = params.replace(/&/g, '').replace(/=/g, '');
                sig = sig + filterSig;
            }

            sig = md5.createHash(sig.trim());

            var url = api.url + ref + '?apiKey=' + api.key + '&apiSign=' + sig;

            return !noFilter ? url += '&' + params : url;
        }
    }
})();
