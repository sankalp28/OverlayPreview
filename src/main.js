import Vue from 'vue'
// import App from './App.vue'
import OverlayScreen from '@/screen/OverlayScreen.vue';
import VueDraggableResizable from 'vue-draggable-resizable'
import store from './store'
// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import "@/assets/style.css";
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.config.productionTip = false
Vue.use(ElementUI, { locale });
new Vue({
  store,
  render: h => h(OverlayScreen),
}).$mount('#app')
