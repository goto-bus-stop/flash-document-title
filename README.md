# flash-document-title

Flash a notification message in the tab title area.

If the tab is hidden, this module prepends the given argument before the current document title.
Each second, it animates by prepending and removing a `! ` character.
Once the tab is no longer hidden, the document title is reset.

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

## License

[Apache-2.0](LICENSE.md)
