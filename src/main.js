import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/fonts.css';            //폰트 정의
import './assets/scss/common.scss';         //공통 css 

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app');  