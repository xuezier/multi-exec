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