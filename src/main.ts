import { createApp } from 'vue'
import App from './App.vue'
import Vuesax from "vuesax";
import 'vuesax/dist/vuesax.css' //Vuesax styles



const app = createApp(App)

app.use(Vuesax);
app.mount('#app')
