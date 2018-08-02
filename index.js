const copyDir = require('./lib/copy-dir.js');
const dateFormatInit = require('./../lib/date-format.js');

module.exports = {
    init: function() {
        dateFormatInit();
    },
    copyDir: copyDir,
}
