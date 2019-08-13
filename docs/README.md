# Introduction

## Install

```bash
yarn add @qneyraud/q-dom
```

## Usage

```js
import { ... } from '@qneyraud/q-dom'
```

## Development

```
# clone repo
git clone git@github.com:quentinneyraud/q-dom.git
cd q-dom

# install dependencies
yarn

# Run example
npm run dev
```

## Build

```bash
npm run build
```


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



# Methods

## qs

> Select the first HTML element which match with selector in parent

#### Example

```html
<body>
  <ul>
    <li>Hello</li>
    <li>World</li>
  </ul>
</body>
```

```js
import { qs } from '@qneyraud/q-dom'

qs(document.body, 'li')
// <li>Hello</li>
```

## qsa

> Select the all HTML elements which match with selector in parent

#### Example

```html
<body>
  <ul>
    <li>Hello</li>
    <li>World</li>
  </ul>
</body>
```

```js
import { qsa } from '@qneyraud/q-dom'

qsa(document.body, 'li')
// [<li>Hello</li>, <li>World</li>]
```

## gebc

> Select the first or all HTML elements which match with the className in parent

#### Example

```html
<body>
  <ul>
    <li class="item-black">Hello</li>
    <li class="item-white">World</li>
    <li class="item-black">!</li>
  </ul>
</body>
```

```js
import { gebc } from '@qneyraud/q-dom'

gebc(document.body, 'item-black')
// <li class="item-black">Hello</li>

gebc(document.body, 'item-black', true)
// [<li class="item-black">Hello</li>, <li class="item-black">!</li>]
```

## gebi

> Select the first HTML element which match with the id

#### Example

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
import { gebi } from '@qneyraud/q-dom'

gebi('test')
// <li id="test">Hello</li>
```
