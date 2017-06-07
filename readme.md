# installation

[![NPM version][npm-image]][npm-url]

```
npm install multi-exec
```

# usage
```javascript
var exec = require('multi-exec');
exec(commands, callback, consoleAble);
```

* commands    *Array|String*, example: ['ls',ls], 'ls'
* callback    *Function*, callback(error)
* consoleAble *Boolean*, if true, will output spawn result into the commandline

[npm-image]: https://img.shields.io/npm/v/multi-exec.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/multi-exec