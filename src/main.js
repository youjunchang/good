import { createApp } from 'vue'
import App from './App.vue'
import router from './components/route'
import {axios} from 'axios'
const kk=createApp(App)
kk.use(router)
kk.use(axios)
kk.mount('#app')
 /**  
setInterval(()=>{

    kk.unmount('#app')

},5000)
*/