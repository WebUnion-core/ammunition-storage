/**
 * js数组排序，支持数字和字符串
 * ary -> 操作数组
 * key -> 排序键
 * type -> 升序0，降序1
 **/
module.exports = function sort (ary, key, type) {
    var _ary = [];

    // 初始化
    for (var i = 0; i < ary.length; i++) {
        var item = ary[i];
        item['_$_' + key] = item[key];
        _ary.push(JSON.stringify(item));
    }

    // 排序操作
    _ary = type == 1 ? _ary.reverse() : _ary.sort();

    // 格式化，移除多余键
    for (var j = 0; j < _ary.length; j++) {
        var obj = JSON.parse(_ary[j]);
        delete obj['_$_' + key];
        delete ary[j]['_$_' + key];
        _ary[j] = obj;
    }

    return _ary;
};
