// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import './assets/iconfont/iconfont.css'
import './assets/css/common.css'
import {$j} from './assets/js/common.js'
Vue.config.productionTip = false
Vue.use(Router)

Vue.prototype.$j = $j;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
