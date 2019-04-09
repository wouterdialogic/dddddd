import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
// import leaflet from 'leaflet';
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
