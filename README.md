# flash-document-title

Flash a notification message in the tab title area.

If the tab is hidden, this module prepends the given argument before the current document title.
Each second, it animates by prepending and removing a `! ` character.
Once the tab is no longer hidden, the document title is reset.

![screenshot](https://i.imgur.com/llB1hvQ.png)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/flash-document-title.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/flash-document-title
[travis-image]: https://img.shields.io/travis/goto-bus-stop/flash-document-title.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/flash-document-title
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install flash-document-title
```

## Usage

```js
var flashDocumentTitle = require('flash-document-title')

flashDocumentTitle('💬 someone said something!')
```

Easily use it in choo views by creating a store that adds an event listener:

```js
var app = choo()
app.use(flashStore)
function flashStore (state, emitter) {
  emitter.on('notify', flashDocumentTitle)
}

app.route('/', function (state, emit) {
  return html`
    <body>
      <button onclick=${onclick}>Notify me soon</button>
    </body>
  `
  function onclick () {
    setTimeout(function () { emit('notify', 'NOTIFICATION TIME!') }, 5000)
  }
})
app.mount('body')
```

## License

[Apache-2.0](LICENSE.md)
