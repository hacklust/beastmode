/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
      .module('beastmode.core')
      .constant('toastr', toastr)
      .constant('moment', moment);
})();
