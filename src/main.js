import { createApp } from 'vue'
import App from './App.vue'
import {store} from "@/app/store";
import {router} from "@/app/router";

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
