<template>
  <img alt="Vue logo" src="@/assets/logo.png">
   <h1> {{person.age}}
   </h1>
   <input type="button" @click="good" value="good"/> 
   <button @click="loadData" >测试向服务器请求数据</button>
   <ul>
     <li v-for="(value,key,index) in listArray"  :key="key">
       {{index}}  {{value}} {{key}}
       </li>
   </ul>
    <ul>
        <li v-for="(key,item) in listArray" :key="item">{{item}}</li>
    </ul>
 
</template>

<script>
 import {ref,reactive,computed,toRefs} from 'vue';
import Axios from "axios"
function loadData(data){
  Axios.get("http://www.sohu.com").then((resp)=>{
    console.info("fuckyou"+resp);
  }).catch(error => console.log(error))
}
export default {
  name:'Demo',
   setup(){
    
     let state=reactive(
      {
        person:{ name:'fuckyou',
        age:18,
        salary:20},
        listArray: ['Item测试 A', 'Item B', 'Item C'],
      })
     

     
     function good() {      
       state.person.age++
     }
     return {...toRefs(state),good,loadData};
  } 
}
</script>
 