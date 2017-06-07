'use strict';
let spawn = require('child_process').spawn;

/**
 * run multi shell with node.js
 *
 * @param {Array|String} cmds
 * @param {Function} callback
 * @param {Boolean} consoleAble
 */
function multiExec(cmds, callback, consoleAble) {
  function _spawn(cmd, cb) {
    let exec = spawn(cmd);

    let _outputdata = '';
    let _outputerror = '';

    exec.stdout.on('data', chunk => {
      _outputdata += chunk;
    });

    exec.stderr.on('data', chunk => {
      _outputerror += chunk;
    });

    exec.on('close', (code) => {
      if (consoleAble) {
        _outputdata && console.log(_outputdata);
        _outputerror && console.error(_outputerror);
      }
      if (code) {
        let error = new Error(`command ${cmd} exited with wrong status code ${code}`);
        error.code = code;
        error.cmd = cmd;
        cb(error);
      }
      cb(null);
    });
  }

  function _multi_spawn() {
    _spawn(cmds.shift(), err => {
      if (err) return callback(err);

      cmds.length && _multi_spawn();
    });
  }


  if (Object.prototype.toString.call(cmds).replace(/\[\w+\s|\]/g, '').toLowerCase() === 'string') return _spawn.apply(null, arguments);

  if (Object.prototype.toString.call(cmds).replace(/\[\w+\s|\]/g, '').toLowerCase() === 'array')
    _multi_spawn();
}

exports.default = module.exports = multiExec;
