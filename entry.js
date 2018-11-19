var cookieUtil = require('./src/cookie-util.js');
var md5 = require('./src/md5.js');
var dateFormatInit = require('./src/date-format.js');
var sort = require('./src/sort.js');
var getRandomNumber = require('./src/random-number.js');

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
