
# Ammunition Storage #

> 各种公共工具

## JavaScript API ##

用法:

```html
...
<script src=""></script>

<script>
var ammunition = new Ammunition();
var dateString = (new Date()).valueOf().toString();
console.log(ammunition.md5(dateString));
</script>
...
```

说明:

1. `md5`: md5 加密;

2. `cookieUtil`: cookie 操作。

## Node.js API ##

用法:

```
npm i -D ammunition-storage
```

说明:

1. `copyDir`: 拷贝目录

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
