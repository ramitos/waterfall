![deprecated](https://img.shields.io/badge/status-deprecated-red.svg?style=plastic)

# waterfall

```js
var waterfall = require('waterfall')

var wf = waterfall()

wf.push(function (callback) {
  console.log('first')
  callback()
})

wf.callback(function () {
  console.log('callback')
})
```
