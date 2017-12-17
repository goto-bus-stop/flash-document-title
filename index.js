var flashing
var originalTitle

var formats = [
  '%n · %t',
  '! %n · %t'
]

function unflash () {
  if (!flashing) return

  clearTimeout(flashing)
  document.title = originalTitle

  flashing = null
  originalTitle = null
}

function flashDocumentTitle (text) {
  unflash()

  if (!document.hidden) return

  originalTitle = document.title

  var i = 0
  function flash () {
    if (!document.hidden) return unflash()

    document.title = formats[i].replace('%n', text).replace('%t', originalTitle)
    i = (i + 1) % formats.length
  }

  flash()
  flashing = setInterval(flash, 1000)
}

function noop () {}

module.exports = typeof document === 'undefined' ? noop : flashDocumentTitle
