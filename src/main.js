import { createApp } from 'vue';
import { router } from './router';
import { store } from './store';
import Default from '@/layouts/default/Default.vue';
import AlbumsWithSidebar from '@/layouts/albums/AlbumsWithSidebar.vue';
import App from './App.vue';
import { createEmitter } from './plugins/emitter';
const emitter = createEmitter();

const app = createApp(App);
app.component('LayoutDefault', Default);
app.component('LayoutAlbumsWithSidebar', AlbumsWithSidebar);
app.use(emitter);
app.use(store);
app.use(router);
app.mount('#app');
