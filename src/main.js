import { createApp } from 'vue';
import { router } from './router';
import { store } from './store';
import Default from '@/layouts/default/Default.vue';
import DefaultWithSidebar from '@/layouts/default/DefaultWithSidebar.vue';
import App from './App.vue';

const app = createApp(App);
app.component('LayoutDefault', Default);
app.component('LayoutDefaultWithSidebar', DefaultWithSidebar);
app.use(store);
app.use(router);
app.mount('#app');
