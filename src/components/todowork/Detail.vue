<template>
  <div>
    <!--<van-nav-bar title="详情" left-text="返回" right-text="关闭"  @click-right="onClickRight"  @click-left="$router.go(-1)" ></van-nav-bar>-->

    <van-nav-bar title="详情" left-text="返回" right-text="关闭"  @click-right="onClickRight"  @click-left="onClickLeft" fixed ></van-nav-bar>

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

      activated: function() {
        $($('.van-tabbar--fixed')[0]).css({
          'bottom':'-50px'
        })
      },
      methods: {

        //  关闭应用程序。调取JSAPI,关闭应用程序
        onClickRight(){
          RPM.closeApplication();
        },
        // 表头返回按钮事件
        getUrl() {
          // Toast('返回');
          this.$router.push({path: '/Index'});
        },
        // 返回上一页调取函数
        onClickLeft() {
          // 返回上一页
          this.$router.go(-1)

          // 修改tabbar的定位
          $($('.van-tabbar--fixed')[0]).css({
            'bottom':'0px'
          })

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
