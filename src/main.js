import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
import {fb} from './firebase';
// import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/js/all.js';

window.$ = window.jQuery = jQuery;

import 'popper.js'
import './assets/app.scss'

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Hero', require('./components/Hero.vue').default);
Vue.component('Products', require('./sections/Products.vue').default);
Vue.component('About', require('./sections/About.vue').default);

Vue.config.productionTip = false;

let app = '';

firebase.auth().onAuthStateChanged(function(user) {
  

})

if(!app){
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
}
