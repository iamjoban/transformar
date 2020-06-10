# Webpack Numbers

This module does nothing :P.
It just convert number to word & word to number (from 0 to 5).

I am creating this module just for learning purpose.

## Note

This module can be used at `Node` as well as on `Browser`.

## Usages

### Node

```
const webpackNumbers = require('webpack-numbers-demo-joban');
webpackNumbers.numToWord(1);       --> Output: One
           or
webpackNumbers.wordToNum("one");   --> Output: 1 

For ES6:
import {numToWord, wordToNum} from 'webpack-numbers-demo-joban';
```

### Browser

```
<script src"<src-path-to-module>"></script>

window.webpackNumbers.wordToNum("one");  --> Output: 1
```

