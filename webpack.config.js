const path = require('path');
const packageData = require('./package.json');

// 路径常量
const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');
const FILE_NAME = 'ammunition-' + packageData.version + '.min.js';

module.exports = {
    entry: [
        path.resolve(SRC_PATH, 'entry.js')
    ],
    output: {
        path: DIST_PATH,
        filename: FILE_NAME,
        chunkFilename: FILE_NAME
    }
}
