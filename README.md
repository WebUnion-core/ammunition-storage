
# Ammunition Storage #

> 各种公共工具

## JavaScript API ##

用法:

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
    var ammunition = new Ammunition();
    var date = new Date();
    var dateString = date.valueOf().toString();

    console.log(ammunition.md5(dateString));
    ```

2. `cookieUtil`: cookie 操作。

    ```js
    var ammunition = new Ammunition();
    var cookieUtil = ammunition.cookieUtil;

    cookieUtil.set('name', 'WJT20', 1);
    console.log(cookieUtil.get('name'));
    ```

## Node.js API ##

用法:

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
    const path = require('path');
    const ammunition = require('./index.js');

    ammunition.copyDir({
        srcPath: path.resolve(__dirname, './src'),
        tgtPath: path.resolve(__dirname, './dist')    
    });
    ```


---

```
DATE: 2018-07-30
```
