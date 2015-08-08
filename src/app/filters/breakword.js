(function() {

    'use strict';

    angular
        .module('beastmode.filters')
        .filter('breakWord', breakWord);

    function breakWord() {
        return function(str, largestWordLength, wordPartSize, wordBreaker) {
            if (typeof str !== 'string') {
                return str;
            }
            else {
                str = String(str);
            }

            largestWordLength = largestWordLength  || 8;
            wordPartSize = wordPartSize            || 5;

            var userAgent;
            var isFF2 = (userAgent = navigator.userAgent.match(/Firefox\/([0-9\.]+)/i)) &&
                parseInt(userAgent[1], 10) < 3;
            if (isFF2) { // FF 2 does not have &shy; support, but does support &#8203;
                wordBreaker = '&#8203;';
            } else {
                wordBreaker = '&shy;';
            }

            var regex = new RegExp('([a-z0-9\\-_]{' + largestWordLength + ',})([^<]*?>)?', 'gi');
            return str.replace(regex, function() {
                var match = arguments[1];
                var result = [];
                var i = 0;

                if (match.indexOf(wordBreaker) !== -1 || arguments[2]) {
                    if (arguments[2]) {
                        match += arguments[2];  // the word has already been split or we're inside a long tag
                    }
                    return match;
                }

                while (match.length > 0) {
                    result.push(match.substring(0, wordPartSize));
                    match = match.substring(wordPartSize);
                }
                return result.join(wordBreaker);
            });
        };
    }

})();
