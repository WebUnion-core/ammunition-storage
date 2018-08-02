var cookieUtil = require('./cookie-util.js');
var md5 = require('./md5.js');
var dateFormatInit = require('./../lib/date-format.js');

function Ammunition() {};
Ammunition.prototype = {
    init: function() {
        dateFormatInit();
    },
    cookieUtil: cookieUtil,
    md5: md5
};

module.exports = window.Ammunition = Ammunition;
