/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import App from './app.vue'
import Vue from 'vue'

document.addEventListener("DOMContentLoaded", e => {
  // document.body.appendChild(document.createElement('hello'))
  new Vue({
    el: 'hello',
    // data: {name: "Vue" , message:"nerewfsac"},
    render(createElement) {
      return createElement(App)
    }
  });

   new Vue({
    el: 'hellow<',
    // data: { name: "Vue" , message:"nerewfsac"},
    render(createElement) {
      return createElement(App)
    }
  });
})
