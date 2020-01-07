> A collection of JS utils (DOM manipulation, events, maths, debounce)  

# Introduction

## Install

```bash
yarn add @qneyraud/q-utils
```

## Usage

```js
import { ... } from '@qneyraud/q-utils'
```

## Development

```
# clone repo
git clone git@github.com:quentinneyraud/q-utils.git
cd q-utils

# install dependencies
yarn

# Run example
npm run dev

# Run docs
npm run docs
```

## Build

```bash
npm run build
```

<div style="margin-top: 200px"></div>

# Functions

## qs

> Select the first HTML element which match with selector in parent

#### Syntax

```js
qs(parent, selector)
```

#### Parameters

###### parent

The parent of the element : `( HTMLElement | HTMLCollection | Array | DOMString )`

###### selector

A `DOMString` containing one selector to match against

#### Return value

An `HTMLElement` that matches the selector or `null` 

#### Example

```html
<body>
  <ul id="list">
    <li>Hello</li>
    <li>World</li>
  </ul>
</body>
```

```js
import { qs } from '@qneyraud/q-utils'

qs(document.body, 'li') // <li>Hello</li>
qs('#list', 'li') // <li>Hello</li>
```

<div style="margin-top: 150px"></div>

## qsa

> Select all HTML elements which match with selector in parent

#### Syntax

```js
qsa(parent, selector)
```

#### Parameters

###### parent

The parent of the elements : `( HTMLElement | HTMLCollection | Array | DOMString )`

###### selector

A `DOMString` containing one selector to match against

#### Return value

An `Array` of `HTMLElement` that matches the selector or `null` 

#### Example

```html
<body>
  <ul id="list">
    <li>Hello</li>
    <li>World</li>
  </ul>
</body>
```

```js
import { qsa } from '@qneyraud/q-utils'

qsa(document.body, 'ul') // [<ul id="list">...</ul>]
qsa('#list', 'li') // [<li>Hello</li>, <li>World</li>]
```

<div style="margin-top: 150px"></div>

## gebc

> Select the first or all HTML elements which match with the className in parent

#### Syntax

```js
gebc(parent, className [, all = false])
```

#### Parameters

###### parent

The parent of the elements : `( HTMLElement | HTMLCollection | Array | DOMString )`

###### className

A `String` containing one selector to match against

###### all

A `Boolean` to select all elements. Default is `false`, only the first `HTMLElement` is returned

#### Return value

If `all` is true, an `Array` of `HTMLElement` which match with the className.  
Only the first if `all` is false.  
Or `null` if nothing matches.

#### Example

```html
<body>
  <ul id="list">
    <li class="item">1st item</li>
    <li class="item">2nd item</li>
    <li class="item">3rd item</li>
    <li class="item">4th item</li>
    <li class="item">5th item</li>
  </ul>
</body>
```

```js
import { gebc } from '@qneyraud/q-utils'

gebc(document.body, 'item') // <li class="item">1st item</li>
gebc(document.body, 'item', true) // [<li class="item">1st item</li>, <li class="item">2nd item</li>, ...]
gebc('#list', 'card', true) // null
```

<div style="margin-top: 150px"></div>

## gebi

> Select the first HTML element which match with the id

### Example

```html
<body>
  <ul>
    <li id="test">Hello</li>
    <li>World</li>
    <li>!</li>
  </ul>
</body>
```

```js
import { gebi } from '@qneyraud/q-utils'

gebi('test')
// <li id="test">Hello</li>
```

## logElement

> Log element with classes and id infos

### Example

```html
<body>
  <h1 id="test" class="link text">Hello</h1>  
</body>
```

```js
import { gebi, logElement } from '@qneyraud/q-utils'

logElement(gebi('test'))
// output: h1#test.link.text
```
