<template>
  <div>
    <van-nav-bar title="详情" left-text="返回" @click-left="$router.go(-1)" ></van-nav-bar>
    <iframe  style="margin-top:2px;width:100%;height:1000px;" :src="url"></iframe>
  </div>
</template>

<script>
    export default {
        name: "Detail",
      data() {
        return {
          url:''
        }
      },
      mounted: function() {
        var data = this.$route.query
        console.log(data);
        this.url=data.url
      },
      watch: {
        $route: function (to, from) {
          console.log("watch函数............")
          if(to.path==='/Detail'){
            var data = to.query;
            this.url=data.url
          }
        }
      },
      methods: {
        // 表头返回按钮事件
        getUrl() {
          // Toast('返回');
          this.$router.push({path: '/Index'});
        },
        onClickLeft() {
          this.$router.push({path: '/ToDoWork'});
          // history.back();
        }
      }
    }
</script>

<style scoped>
  /* 设置头部 style start */
  .van-nav-bar{
    background: #2196F3;
    color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
</style>
