import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './app/router';

import './app/styles/main.styl';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  template: '<router-view class="view"></router-view>',
});
