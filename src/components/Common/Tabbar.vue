<template>
  <div class="tabbar">
    <van-tabbar v-model="active" android:name=".activity.MainActivity" android:windowSoftInputMode="stateVisible|adjustPan">
      <van-tabbar-item icon="shop" to="/Index">
        <span>首页</span>
        <template slot="icon" slot-scope="props" >
          <img src="../../assets/images/sgrjhImages/homeg.png" alt="" v-if="props.active">
          <img src="../../assets/images/sgrjhImages/home.png" v-else="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="shop" to="/BusinessLine">
        <span>营业线</span>
        <template slot="icon" slot-scope="props">
          <img src="../../assets/images/sgrjhImages/yyxg.png" alt="" v-if="props.active">
          <img src="../../assets/images/sgrjhImages/yyx.png" v-else="">
        </template>
      </van-tabbar-item>

      <van-tabbar-item icon="shop" to="/NearBusinessLine">
        <span>邻近营业线</span>
        <template slot="icon" slot-scope="props">
          <img src="../../assets/images/sgrjhImages/ljyyxg.png" alt="" v-if="props.active">
          <img src="../../assets/images/sgrjhImages/ljyyx.png" v-else="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="shop" to="/NonBusinessLine">
        <span>非营业线</span>
        <template slot="icon" slot-scope="props">
          <img src="../../assets/images/sgrjhImages/fyyxg.png" alt="" v-if="props.active">
          <img src="../../assets/images/sgrjhImages/fyyx.png" v-else="">
        </template>
      </van-tabbar-item>

      <!--<van-tabbar-item icon="shop" to="/Statistics">-->
        <!--<span>统计</span>-->
        <!--<template slot="icon" slot-scope="props">-->
          <!--<img src="../../assets/images/sgrjhImages/tjg.png" alt="" v-if="props.active">-->
          <!--<img src="../../assets/images/sgrjhImages/tj.png" v-else="">-->
        <!--</template>-->
      <!--</van-tabbar-item>-->

    </van-tabbar>
  </div>

</template>

<script>

  import { Tabbar, TabbarItem } from 'vant';

    export default {
      name: "tabbar",
      data() {
        return {
          active: 0,
          icon: {
            normal: '//img.yzcdn.cn/1.png',
            active: '//img.yzcdn.cn/2.png'
          }
        }
      }
    }
</script>

<style scoped>
  .van-tabbar{
    z-index: 8;
  }

</style>

