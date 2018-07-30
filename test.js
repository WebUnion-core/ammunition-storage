const path = require('path');
const ammunition = require('./index.js');

ammunition.copyDir({
    srcPath: path.resolve(__dirname, './src'),
    tgtPath: path.resolve(__dirname, './dist')    
});
