const copyDir = require('./lib/copy-dir.js');
const dateFormatInit = require('./lib/date-format.js');
const md5 = require('./lib/md5.js');
const cookie = require('./lib/cookie-util.js');

module.exports = {
    init: function() {
        dateFormatInit();
    },
    copyDir: copyDir,
    md5: md5,
    cookie: cookie
}
