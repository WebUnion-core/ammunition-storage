const copyDir = require('./src/copy-dir.js');
const dateFormatInit = require('./src/date-format.js');
const md5 = require('./src/md5.js');
const sort = require('./src/sort.js');

module.exports = {
    init: function() {
        dateFormatInit();
    },
    copyDir: copyDir,
    md5: md5,
    sort: sort
}
