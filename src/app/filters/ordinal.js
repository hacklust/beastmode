(function() {

    'use strict';

    angular
        .module('beastmode.filters')
        .filter('ordinal', ordinal)
        .filter('ordinalSup', ordinalSup);

    function ordinal() {
        return function(input) {
            if ((parseFloat(input) === parseInt(input)) && !isNaN(input)) {
                var s = ['th', 'st', 'nd', 'rd'],
                v = input % 100;
                return input + (s[(v - 20) % 10] || s[v] || s[0]);
            }
            return input;
        };
    }

    function ordinalSup() {

        return function(input) {
            var ordinal = input.slice(-2);
            return input.slice(0, -2) + '<sup>' + ordinal + '</sup>';
        };

    }

})();
