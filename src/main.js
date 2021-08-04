import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";
import ViewUI from 'view-design';
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import 'view-design/dist/styles/iview.css';
import * as echarts from 'echarts';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import Base64 from './assets/utils/Base64';
import vDialogs from 'v-dialogs'
import './mock/mock'
// import './views/publics/bigData/static/js/flexible'
import Observer from "./assets/utils/observer";

Vue.prototype.Observer = Observer
Vue.prototype.$Base64 = Base64
Vue.use(VueQuillEditor)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(ElementUI)
Vue.use(vDialogs)

Vue.prototype.avatar = 'this.src="' + require('@/assets/images/avatar.jpg') + '"';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
