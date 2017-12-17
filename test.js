var test = require('tape')
var flash = require('./')

test('noop on server side', function (t) {
  t.plan(1)

  t.doesNotThrow(function () { flash('whatever') })
})
