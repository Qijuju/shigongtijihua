<!--<template>-->
  <!--<div class="tabbar">-->
    <!--<van-tabbar v-model="active">-->
      <!--<van-tabbar-item icon="shop" to="/Index">-->
        <!--<span>首页</span>-->
        <!--<template slot="icon" slot-scope="props" >-->
          <!--<img src="../../assets/images/sgrjhImages/homeg.png" alt="" v-if="props.active">-->
          <!--<img src="../../assets/images/sgrjhImages/home.png" v-else="">-->
          <!--&lt;!&ndash;<img :src="props.active ? icon.active : icon.normal" />&ndash;&gt;-->
        <!--</template>-->
      <!--</van-tabbar-item>-->
      <!--<van-tabbar-item icon="shop" to="/BusinessLine">-->
        <!--<span>营业线</span>-->
        <!--<template slot="icon" slot-scope="props">-->
          <!--<img src="../../assets/images/sgrjhImages/yyxg.png" alt="" v-if="props.active">-->
          <!--<img src="../../assets/images/sgrjhImages/yyx.png" v-else="">-->
        <!--</template>-->
      <!--</van-tabbar-item>-->
      <!--<van-tabbar-item icon="shop" to="/NearBusinessLine">-->
        <!--<span>邻近营业线</span>-->
        <!--<template slot="icon" slot-scope="props">-->
          <!--<img src="../../assets/images/sgrjhImages/ljyyxg.png" alt="" v-if="props.active">-->
          <!--<img src="../../assets/images/sgrjhImages/ljyyx.png" v-else="">-->
        <!--</template>-->
      <!--</van-tabbar-item>-->
      <!--<van-tabbar-item icon="shop" to="/NonBusinessLine">-->
        <!--<span>非营业线</span>-->
        <!--<template slot="icon" slot-scope="props">-->
          <!--<img src="../../assets/images/sgrjhImages/fyyxg.png" alt="" v-if="props.active">-->
          <!--<img src="../../assets/images/sgrjhImages/fyyx.png" v-else="">-->
        <!--</template>-->
      <!--</van-tabbar-item>-->
      <!--&lt;!&ndash;<van-tabbar-item icon="shop" to="/Statistics">&ndash;&gt;-->
      <!--&lt;!&ndash;<span>统计</span>&ndash;&gt;-->
      <!--&lt;!&ndash;<template slot="icon" slot-scope="props">&ndash;&gt;-->
      <!--&lt;!&ndash;<img src="../../assets/images/sgrjhImages/tjg.png" alt="" v-if="props.active">&ndash;&gt;-->
      <!--&lt;!&ndash;<img src="../../assets/images/sgrjhImages/tj.png" v-else="">&ndash;&gt;-->
      <!--&lt;!&ndash;</template>&ndash;&gt;-->
      <!--&lt;!&ndash;</van-tabbar-item>&ndash;&gt;-->
    <!--</van-tabbar>-->
  <!--</div>-->

<!--</template>-->

<!--<script>-->

  <!--import { Tabbar, TabbarItem } from 'vant';-->

    <!--export default {-->
      <!--name: "tabbar",-->
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
  <div class="footer">
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="首页">
        <img v-if="selectedTab==='首页'" slot="icon" src="../../assets/images/sgrjhImages/homeg.png" >
        <img v-else slot="icon" src="../../assets/images/sgrjhImages/home.png" >
        首页
      </mt-tab-item>
      <mt-tab-item id="营业线">
        <img v-if="selectedTab==='营业线'" slot="icon" src="../../assets/images/sgrjhImages/yyxg.png" >
        <img v-else slot="icon" src="../../assets/images/sgrjhImages/yyx.png" >
        营业线
      </mt-tab-item>
      <mt-tab-item id="邻近营业线">
        <img v-if="selectedTab==='邻近营业线'" slot="icon" src="../../assets/images/sgrjhImages/ljyyxg.png" >
        <img v-else slot="icon" src="../../assets/images/sgrjhImages/ljyyx.png" >
        邻近营业线
      </mt-tab-item>
      <mt-tab-item id="非营业线">
        <img v-if="selectedTab==='非营业线'" slot="icon" src="../../assets/images/sgrjhImages/fyyxg.png" >
        <img v-else slot="icon" src="../../assets/images/sgrjhImages/fyyx.png" >
        非营业线
      </mt-tab-item>
      <!--<mt-tab-item id="统计">-->
        <!--<img v-if="selectedTab==='统计'" slot="icon" src="../../assets/images/sgrjhImages/tjg.png" >-->
        <!--<img v-else slot="icon" src="../../assets/images/sgrjhImages/tj.png" >-->
        <!--统计-->
      <!--</mt-tab-item>-->
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: "footer",
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
          // case '统计':
          //   this.$router.push({path: '/Statistics'});
          //   break;
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
