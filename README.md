
# Ammunition Storage #

> 由 WJT20 开发的 JavaScript 辅助工具，分为 Browser 和 Node.js 两套 API。

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
    var date = new Date();
    var dateString = date.valueOf().toString();
    console.log(ammunition.md5(dateString));
    ```

2. `cookieUtil`: cookie 操作;

    ```js
    var cookieUtil = ammunition.cookieUtil;
    cookieUtil.set('name', 'WJT20', 1);
    console.log(cookieUtil.get('name'));
    ```

3. `sort`: 数组元素为对象时，根据对象的某个属性值对整个数组进行排序;

    ```js
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
     */
    ```

4. `getRandomNumber`: 获取指定个数和范围内的随机数字集合:

    ```js
    console.log(ammunition.getRandomNumber(1, 10, 5)); // 输出: [1,7,8,5,10]
    ```

## Node.js API ##

npm 安装:

```
npm i -D ammunition-storage
```

说明:

1. `init`: 初始化。

    ```js
    const ammunition = require('ammunition-storage');
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

5. `getRandomNumber`: 用法同 Browser API。

---

```
DATE: 2018-07-30
```
