# Installation

## npm

```bash

$ npm i vue-lazyload-images -S

```

# Usage

main.js:

```javascript

import Vue from 'vue'
import App from './App.vue'
import VueImgLazyload from 'vue-lazyload-images'

Vue.directive('imglazyload', VueImgLazyload)

new Vue({
  el: '#app',
  render: h => h(App)
})

```

template:

```html
<ul v-imglazyload>
  <li v-for="item in list">
    <img :data-src="item.imgUrl" class="lazy">
  </li>
</ul>
```

use background-image

```html
<ul v-imglazyload>
  <li v-for="item in list">
    <div :data-bg="item.imgUrl" class="lazy"></div>
  </li>
</ul>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)

