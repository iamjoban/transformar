# Transformar

This module does nothing :P. It transforms numbers to words & words to numbers (from 0 to 5).

I am creating this module just for learning purpose.

## Note

This module can be used at `Node` as well as on `Browser`.

## Usages

### Node

```
const transformar = require('transformar');
transformar.numToWord(1);       --> Output: One
           or
transformar.wordToNum("one");   --> Output: 1 

For ES6:
import {numToWord, wordToNum} from 'transformar';
```

### Browser

```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Jobanpreet/transformar/dist/transformar-wiindow.js"></script>

window.transformar.wordToNum("one");  --> Output: 1
```

