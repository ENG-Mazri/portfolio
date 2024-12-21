import { createApp, nextTick } from 'vue';
import './style.css';
import App from './App.vue';
import 'uno.css';
import router from './router';
import naiveUi from "naive-ui";


const app = createApp(App);
app.use(router);
app.use(naiveUi);

app.mount('#app')


router.afterEach((route: any) => {
	nextTick(() => document.title = `Portfolio - ${route.name}`);
})