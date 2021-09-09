<template> 
 <demo />
 <br>
<router-link to="/home">home</router-link>
<br>
<router-link to="/">根目录</router-link>

<router-view></router-view> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import demo from './components/Demo'


export default {
  name: 'App',
  components: {
    demo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
