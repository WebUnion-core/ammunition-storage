var cookieUtil = require('./cookie-util.js');
var md5 = require('./md5.js');
var dateFormatInit = require('./date-format.js');
var sort = require('./sort.js');
var getRandomNumber = require('./random-number.js');

function Ammunition() {};
Ammunition.prototype = {
    init: function() {
        dateFormatInit();
    },
    cookieUtil: cookieUtil,
    md5: md5,
    sort: sort,
    getRandomNumber: getRandomNumber
};

module.exports = window.Ammunition = Ammunition;
