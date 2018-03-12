<template>
  <div class="iCreateSearch">
 <!-- 施工日计划我发起的搜索-表头-开始 -->
    <van-nav-bar title="我发起的" left-text="返回" @click-left="onClickLeft">
    </van-nav-bar>
<!-- 施工日计划我发起的搜索-表头-结束 -->
<!-- 施工日计划我发起的搜索-输入项目名称-开始 -->
   <form action="/">
    <!--<van-search-->
      <!--v-model="value"-->
      <!--placeholder="请输入项目名称"-->
      <!--show-action-->
      <!--@search="onSearch"-->
      <!--@cancel="onCancel"-->
    <!--/>-->
     <van-search
       v-model="qsrxmmc"
       placeholder="请输入项目名称"
       show-action
       @search="onSearch"
     >
       <div slot="action" @click="onSearch" style="padding: 0 10px;">搜索</div>
     </van-search>
  </form>
<!-- 施工日计划我发起的搜索-输入项目名称-结束 -->
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import bus from '../bus';

export default {
  name:'iCreateSearch',
  data() {
    return {

      qsrxmmc:'',//请输入项目名称
      disabled: false,
    }
  },
  mounted: function() {
   /* this.disnone();
    this.disblock();*/
  },
   methods: {
    /* disnone(){
       $("input").focus(function(){
         $(".van-tabbar--fixed").hide();
       });
     },
     disblock(){
       $("input").blur(function(){
         setInterval(function () {
           $(".van-tabbar--fixed").show();
         },1000);

       });
     },*/
     // 表头返回按钮事件
    onClickLeft() {
        // Toast('返回');
        this.$router.push({path: '/ICreate'});
      },
    // 表头关闭按钮事件
      onClickRight() {
       this.$router.push({path: '/ICreate'});
      },
    //  点击搜索按钮跳转事件
    onSearch(){
      //向我发起的页面展示-传递流程名称
      bus.$emit('v-model',this.qsrxmmc)
      this.$router.push({path: '/DoWork'});
      },
    // 点击取消按钮跳转事件
    onCancel(){
      this.$router.push({path: '/DoWork'});
    }

   }
};

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
  /* 设置头部 style end */

</style>
