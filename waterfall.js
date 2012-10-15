var waterfall = require('async').waterfall

module.exports = function () {
  var wf = new Array()
  
  return {
    callback: function (callback) {
      waterfall(wf, callback)
    },
    push: function (fn) {
      wf.push(fn)
    }
  }
}
