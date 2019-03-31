# A simple basic route
A very basic route in typescript with dynamic import for SPA
It's use the hash in URL for change the route

# Usage

Import:
```javascript
import { Route, Router } from './index'
```

Init **route manager**:
```javascript
// Js/Ts

let routeManager = new Router([
  new Route('login', 'login.html', true, ['./login.js']),
  new Route('account', 'add-account.html'),
  new Route('calc', 'calc.html', false, ['./result.js']),
  new Route('result', 'result.html')
], '#container')
```
```html
<!-- In html -->
...
<a href="#result" title="Example">Click</a>
...
```


# Interface

* The Router istance take an array of Route and the query for select the DOM element where change the content of the site.

* The Route istance take:
  * _name_: name of route in URL
  * _htmlName_: The name of file with the view
  * [_default_] : if is the default view
  * [importFiles]: the list of javascript file to import when a page is loaded
