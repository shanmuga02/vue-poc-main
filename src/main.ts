import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from './fontawesome';
import '../src/styles/main.scss';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');