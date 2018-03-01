<template>
  <div class="statistics">
    <p>待开发</p>
    <van-tabbar v-model="active" to="/NonBusinessLine">
      <van-tabbar-item icon="shop">
        <span>自定义1</span>
        <template slot="icon" slot-scope="props" to="/Index">
          <img src="../../assets/images/sgrjhImages/tjg.png" alt="" v-if="props.active">
          <img src="../../assets/images/sgrjhImages/tj.png" v-else="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="shop">
        <span>自定义2</span>
        <template slot="icon" slot-scope="props">
          <img src="../../assets/images/sgrjhImages/sxg.png" alt="" v-if="props.active">
          <img src="../../assets/images/sgrjhImages/sx.png" v-else="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="shop">
        <span>自定义3</span>
        <template slot="icon" slot-scope="props">
          <img src="../../assets/images/sgrjhImages/ljyyxg.png" alt="" v-if="props.active">
          <img src="../../assets/images/sgrjhImages/ljyyx.png" v-else="">
        </template>
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
  export default{
    name:'statistics',
    data(){
      return {
        active: 0,
        icon: {

        }
      }
    }
  }
</script>

<style scoped>


</style>
