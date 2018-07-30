var cookieUtil = require('./cookie-util.js');
var md5 = require('./md5.js');

function Ammunition() {};
Ammunition.prototype = {
    cookieUtil: cookieUtil,
    md5: md5
};

module.exports = window.Ammunition = Ammunition;
