<template>
  <div class="1">

 <!-- 施工日计划我已审批筛选-表头-开始 -->
    <van-nav-bar title="我已审批" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="arrow-left" slot="left" />
      <van-icon name="close" slot="right" />
    </van-nav-bar>
<!-- 施工日计划我已审批筛选-表头-结束 -->

<!-- 施工日计划我已审批筛选-状态标题 -->
  <h1 class="van-doc-demo-section__title">状态</h1>

<!-- 施工日计划我已审批筛选-选择条件-开始 -->
   <button class="van-button van-button--default van-button--normal" @click="onClickStatus('0')">
     <span class="van-button__text">审批中</span>
   </button>
   <button class="van-button van-button--default van-button--normal" @click="onClickStatus('1')">
     <span class="van-button__text">审批完成</span>
   </button><br/>
<!-- 施工日计划我已审批筛选-选择条件-结束 -->

<!-- 施工日计划我已审批筛选-类型标题 -->
  <h1 class="van-doc-demo-section__title">类型</h1>

<!-- 施工日计划我已审批筛选-选择条件-开始 -->
   <button class="van-button van-button--default van-button--normal" @click="onClickSgrjh('0')">
     <span class="van-button__text">全部</span>
   </button><br/>
   <button class="van-button van-button--default van-button--normal" @click="onClickSgrjh('1')">
     <span class="van-button__text">营业线施工日计划</span>
   </button><br/>
   <button class="van-button van-button--default van-button--normal" @click="onClickSgrjh('2')">
     <span class="van-button__text">邻近营业线施工日计划</span>
   </button><br/>
   <button class="van-button van-button--default van-button--normal" @click="onClickSgrjh('3')">
     <span class="van-button__text" >非营业线施工日计划</span>
   </button>
<!-- 施工日计划我已审批筛选-选择条件-结束 -->

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

    //  点击审批状态事件
    onClickStatus(data){
      //向我已审批页面展示-传递流程类型id 变量名van-button--normal
        bus.$emit('van-button--normal-zt',data)
        this.$router.push({path: '/DoWork'});
      },

     //  点击营业线施工日计划选择按钮事件
    onClickSgrjh(data){
      var typeId = '';
      //向我已审批页页面展示-传递流程类型id 变量名van-button--normal
      //流程类型id  51营业线 52临近营业线 53非营业线
        if(data != null && data == '1'){
          typeId = '51';
        }else if(data != null && data == '2'){
          typeId = '52';
        }else if(data != null && data == '3'){
          typeId = '53';
        }else{
          typeId = '';
        }
        bus.$emit('van-button--normal',typeId)
        this.$router.push({path: '/DoWork'});
      },

   }
};
</script>

<style scoped>
/* 施工日计划我已审批筛选-选择条件-样式 */
 .van-button--default {
margin: 10px 0px 0px 10px;
}
/* 施工日计划我已审批筛选-类型标题-样式 */
 h1{
   font: 0.4em sans-serif;
   margin: 10px 0px 0px 20px;
 }
</style>
