import Vue from 'vue';
import app from './app';
import Test from './components/test';

Vue.config.productionTip = false;
Vue.config.devtools = true

Vue.component(Test.name, Test);
new Vue({
  render: h => h(app),
}).$mount('#app');
