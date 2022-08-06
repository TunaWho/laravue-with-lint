/* eslint-disable */
import './bootstrap';
import Vue from 'vue';

Vue.config.productionTip = false;

Vue.component(
  'ExampleComponent',
  require('../assets/frontend/components/ExampleComponent.vue').default
);

const app = new Vue({
  el: '#app',
});
