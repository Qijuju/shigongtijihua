<script src="router/index.js"></script>

<template>
  <div id="app">
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Tabbar/>
  </div>
</template>

<script>
  import Tabbar from './components/Common/Tabbar'

  export default {
    components: {
       Tabbar
    },
    data(){
      return{

      }
    }
  }
</script>

