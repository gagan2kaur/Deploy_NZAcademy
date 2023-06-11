import Vue from 'vue'
import App from './App.vue'
import navigation from './navbar.vue'
import Academy from './Academy.vue' //importing object from component
import Footer from'./footer.vue'
Vue.component('navigation',navigation) //this is to use it in root component.
Vue.component('academy', Academy)
Vue.component('Footer',Footer)
new Vue({
  el: '#app',
  render: h => h(App)
})
