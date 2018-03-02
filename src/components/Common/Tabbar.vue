<!--<template>-->
  <!--<van-tabbar v-model="active">-->
    <!--<van-tabbar-item icon="home" to="/Index">首页</van-tabbar-item>-->
    <!--<van-tabbar-item icon="pending-evaluate" to="/BusinessLine">营业线</van-tabbar-item>-->
    <!--<van-tabbar-item icon="pending-evaluate" to="/NearBusinessLine">邻近营业线</van-tabbar-item>-->
    <!--<van-tabbar-item icon="pending-evaluate" to="/NonBusinessLine">非营业线</van-tabbar-item>-->
    <!--&lt;!&ndash;<van-tabbar-item icon="pending-evaluate" to="/Statistics">统计</van-tabbar-item>&ndash;&gt;-->
  <!--</van-tabbar>-->
<!--</template>-->

<!--<script>-->

  <!--import { Tabbar, TabbarItem } from 'vant';-->

    <!--export default {-->
      <!--name: "Tabbar",-->
      <!--data() {-->
        <!--return {-->
          <!--active: 0,-->
          <!--icon: {-->
            <!--normal: '//img.yzcdn.cn/1.png',-->
            <!--active: '//img.yzcdn.cn/2.png'-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--.van-tabbar{-->
    <!--z-index: 8;-->
  <!--}-->

<!--</style>-->


<template>
  <div class="tabbar">
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="首页">
        <img v-if="selectedTab==='首页'" slot="icon" src="../../assets/images/sgrjhImages/syg.png" >
        <img v-else slot="icon" src="../../assets/images/sgrjhImages/sg.png" >
        首页
      </mt-tab-item>
      <mt-tab-item id="营业线">
        <img v-if="selectedTab==='营业线'" slot="icon" src="../../assets/images/sgrjhImages/tjg.png" >
        <img v-else slot="icon" src="../../assets/images/sgrjhImages/tj.png" >
        营业线
      </mt-tab-item>
      <mt-tab-item id="邻近营业线">
        <img v-if="selectedTab==='邻近营业线'" slot="icon" src="../../assets/images/sgrjhImages/tjg.png" >
        <img v-else slot="icon" src="../../assets/images/sgrjhImages/tj.png" >
        邻近营业线
      </mt-tab-item>
      <mt-tab-item id="非营业线">
        <img v-if="selectedTab==='非营业线'" slot="icon" src="../../assets/images/sgrjhImages/tjg.png" >
        <img v-else slot="icon" src="../../assets/images/sgrjhImages/tj.png" >
        非营业线
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: "tabbar",
    data() {
      return {
        selectedTab:'首页',
        selected:false
      }
    },
    watch:{
      selectedTab(newVal,oldVal){
        switch (newVal){
          case '首页':
            this.$router.push({path: '/Index'});
            break;
          case '营业线':
            this.$router.push({path: '/BusinessLine'});
            break;
          case '邻近营业线':
            this.$router.push({path: '/NearBusinessLine'});
            break;
          case '非营业线':
            this.$router.push({path: '/NonBusinessLine'});
            break;
        }
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color:#fff;
  }
  .van-tabbar{
    z-index: 8;
  }

</style>
