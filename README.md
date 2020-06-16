# is-darkmode

[![Travis](https://img.shields.io/travis/jojoee/is-darkmode.svg)](https://travis-ci.org/jojoee/is-darkmode)
[![GitHub issues](https://img.shields.io/github/issues/jojoee/is-darkmode)](https://github.com/jojoee/is-darkmode/issues)
[![GitHub license](https://img.shields.io/github/license/jojoee/is-darkmode)](https://github.com/jojoee/is-darkmode/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/jojoee/is-darkmode.svg)](https://github.com/jojoee/is-darkmode/releases)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Is macOS using Dark appearance, see [demo page](https://jojoee.github.io/is-darkmode/index.html).

![Demo](https://i.imgur.com/YTpeUPP.gif)

## Installation
```
// via githack
<script src="https://rawcdn.githack.com/jojoee/is-darkmode/v1.0.0/index.js"></script>

// via Bower
bower install jojoee/is-darkmode --save
<script src="./bower_components/is-darkmode/index.js"></script>

// via CommonJS
npm install @jojoee/is-darkmode --save
const { isDarkMode, onDarkModeChange } = require('@jojoee/is-darkmode')

// via ES6
import { isDarkMode, onDarkModeChange } from "@jojoee/is-darkmode"
```

## Usage
```javascript
isDarkMode() // returns Boolean

onDarkModeChange(function (isDark) {
  console.log('isDark', isDark)
})
```

