<template>
  <div class="toDoWorkSearch">
    <!-- 施工日计划待我审批搜索-表头-开始 -->
    <van-nav-bar title="待我审批" left-text="返回" @click-left="onClickLeft">
    </van-nav-bar>
    <!-- 施工日计划待我审批搜索-表头-结束 -->
<!-- 施工日计划待我审批搜索-输入项目名称-开始 -->
   <form action="/">
    <!--<van-search-->
      <!--v-model="value"-->
      <!--placeholder="请输入项目名称"-->
      <!--show-action-->
      <!--@search="onSearch"-->
      <!--@cancel="onCancel"-->
    <!--/>-->
     <van-search
       v-model="value"
       placeholder="请输入项目名称"
       show-action
       @search="onSearch"
     >
       <div slot="action" @click="onSearch" style="padding: 0 10px;">搜索</div>
     </van-search>
  </form>
<!-- 施工日计划待我审批搜索-输入项目名称-结束 -->
  </div>
</template>

<script>

import { Toast } from 'vant';
import Vue from 'vue';
import axios from 'axios';
import bus from '../bus';

export default {
  name:'toDoWorkSearch',
  data() {
    return {

    }
  },
  mounted: function() {
    this.disnone();
    this.disblock();
  },
   methods: {
     disnone(){
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
     },
     // 表头返回按钮事件
    onClickLeft() {
       this.$router.push({path: '/ToDoWork'});
      },
    // 表头关闭按钮事件
      onClickRight() {
        this.$router.push({path: '/ToDoWork'});
      },
    //  点击搜索按钮跳转事件
    onSearch(){
      //向待我审批页面展示-传递流程名称 变量名为v-model
      bus.$emit('v-model',this.value)
      this.$router.push({path: '/ToDoWork'});
      },
    // 点击取消按钮跳转事件
    onCancel(){
      this.$router.push({path: '/ToDoWork'});
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
