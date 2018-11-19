function getRandomNumber (start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

module.exports = function (start, end, amount) {
    if (start >= end) {
        throw new Error('传入非法取值范围');
    } else if (typeof amount === 'number' && amount < 1) {
        throw new Error('传入非法目标个数');
    }

    var _amount = amount || 1;
    var _cache = [];

    for (var i = 0; i < amount; i++) {
        var _randomNum = getRandomNumber(start, end);

        if (_cache.indexOf() >= 0) {
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
