
# Ammunition Storage #

> 各种公共工具

## Browser API ##

加载方法:

```html
...
<script src="./dist/ammunition-0.0.1.min.js"></script>

<script>
var ammunition = new Ammunition();
ammunition.init();
</script>
...
```

说明:

1. `md5`: md5 加密;

    ```js
    ...
    var date = new Date();
    var dateString = date.valueOf().toString();
    console.log(ammunition.md5(dateString));
    ```

2. `cookieUtil`: cookie 操作;

    ```js
    ...
    var cookieUtil = ammunition.cookieUtil;
    cookieUtil.set('name', 'WJT20', 1);
    console.log(cookieUtil.get('name'));
    ```

3. `sort`: 数组元素为对象时，根据对象的某个属性值对整个数组进行排序;

    ```js
    ...
    var nameDataAry = [
        { name: 'A08' },
        { name: 'A22' },
        { name: 'A10' },
        { name: 'A03' },
        { name: 'A15' }
    ];
    ammunition.sort(nameDataAry, 'name', 1);
    /**
     * 输出:
     * [
     *     { name: 'A22' },
     *     { name: 'A15' },
     *     { name: 'A10' },
     *     { name: 'A08' },
     *     { name: 'A03' }
     * ]
     **/
    ```

## Node API ##

npm 安装:

```
npm i -D ammunition-storage
```

说明:

1. `init`: 初始化。

    ```js
    const ammunition = require('./index.js');
    ammunition.init();
    console.log((new Date()).format('yyyy-MM-dd hh:mm'));
    ```

2. `copyDir`: 拷贝目录。

    ```js
    ...
    const path = require('path');
    ammunition.copyDir({
        srcPath: path.resolve(__dirname, './src'),
        tgtPath: path.resolve(__dirname, './dist')    
    });
    ```

3. `md5`: 用法同 Browser API;

4. `sort`: 用法同 Browser API;

---

```
DATE: 2018-07-30
```
