/**
 * 获取指定数目的随机数值
 * @param  {Number} start        开始数字
 * @param  {Number} end          结束数字
 * @param  {Number} amount       返回随机数个数
 * @return {Number|Array}        返回的随机数集合
 */
module.exports = function (start, end, amount) {
    var _amount = amount || 1;
    var _cache = [];

    if (start >= end || (end - start - 1 < amount)) {
        throw new Error('传入非法取值范围');
    } else if (amount < 1) {
        throw new Error('传入非法目标个数');
    }

    for (var i = 0; i < _amount; i++) {
        var _randomNum = _getRandomNumber(start, end);

        if (_cache.indexOf(_randomNum) >= 0) {
            i--;
        } else {
            _cache.push(_randomNum);
        }
    }

    if (_cache.length === 1) {
        return _cache[0];
    }

    return _cache;
};

function _getRandomNumber (start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}
