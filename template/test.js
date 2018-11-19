const path = require('path');
const ammunition = require('./../index.js');

ammunition.init();

ammunition.copyDir({
    srcPath: path.resolve(__dirname, './src'),
    tgtPath: path.resolve(__dirname, './dist')
});

console.log((new Date()).format('yyyy-MM-dd hh:mm'));
console.log(ammunition.getRandomNumber(1, 10, 5));
