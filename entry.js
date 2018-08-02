var cookieUtil = require('./lib/cookie-util.js');
var md5 = require('./lib/md5.js');
var dateFormatInit = require('./lib/date-format.js');

function Ammunition() {};
Ammunition.prototype = {
    init: function() {
        dateFormatInit();
    },
    cookieUtil: cookieUtil,
    md5: md5
};

module.exports = window.Ammunition = Ammunition;
