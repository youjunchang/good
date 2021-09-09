
import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {path:'/',
    name:'start',
    component:()=>import('./1.vue')
    },
    {path:'/home',
    name:'home',
    component:()=>import('./2.vue')
    },
    {path:'/good',
    name:'good',
    component:()=>import('./3.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),  
    routes  
  });
export default  router