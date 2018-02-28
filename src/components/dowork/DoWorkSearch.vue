<template>
  <div class="1">
 <!-- 施工日计划我已审批搜索-表头-开始 -->
    <van-nav-bar title="我已审批" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="arrow-left" slot="left" />
      <van-icon name="close" slot="right" />
    </van-nav-bar>
<!-- 施工日计划我已审批搜索-表头-结束 -->
<!-- 施工日计划我已审批搜索-输入项目名称-开始 -->
   <form action="/">
    <van-search
      v-model="value"
      placeholder="请输入项目名称"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
<!-- 施工日计划我已审批搜索-输入项目名称-结束 -->
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import bus from '../bus';

export default {
   methods: {
     // 表头返回按钮事件
    onClickLeft() {
       // Toast('返回');
       this.$router.push({path: '/DoWork'});
      },
    // 表头关闭按钮事件
      onClickRight() {
        this.$router.push({path: '/DoWork'});
      },
    //  点击搜索按钮跳转事件
    onSearch(){
      //向我已审批页面展示-传递流程名称
      bus.$emit('v-model',this.value)
      this.$router.push({path: '/ICreate'}); 
      },
    // 点击取消按钮跳转事件
    onCancel(){
      this.$router.push({path: '/ICreate'});
    }

   }
};

</script>

<style scoped>

</style>
