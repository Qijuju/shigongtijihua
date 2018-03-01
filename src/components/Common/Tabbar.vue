<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home" to="/Index">首页</van-tabbar-item>
    <van-tabbar-item icon="pending-evaluate" to="/BusinessLine">营业线</van-tabbar-item>
    <van-tabbar-item icon="pending-evaluate" to="/NearBusinessLine">邻近营业线</van-tabbar-item>
    <van-tabbar-item icon="pending-evaluate" to="/NonBusinessLine">非营业线</van-tabbar-item>
    <!--<van-tabbar-item icon="pending-evaluate" to="/Statistics">统计</van-tabbar-item>-->
  </van-tabbar>
</template>

<script>

  import { Tabbar, TabbarItem } from 'vant';

    export default {
      name: "Tabbar",
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
