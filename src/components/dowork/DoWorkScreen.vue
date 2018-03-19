<template>
  <div class="1">

    <!-- 安全风险管理我已审批筛选-表头-开始 -->
    <van-nav-bar title="我已审批" left-text="返回" @click-left="onClickLeft" right-text="确认" @click-right="onClickRight">
    </van-nav-bar>
    <!-- 安全风险管理我已审批筛选-表头-结束 -->

    <!-- 安全风险管理我已审批筛选-状态标题 -->
    <h1 class="van-doc-demo-section__title">状态</h1>

    <!-- 安全风险管理我已审批筛选-选择条件-开始 -->
    <button class="van-button van-button--default van-button--normal" :class="this.sp_status == '0'?'active':''"
            @click="onClickStatus('0')">
      <span class="van-button__text">审批中</span>
    </button>
    <button class="van-button van-button--default van-button--normal" :class="this.sp_status == '1'?'active':''"
            @click="onClickStatus('1')">
      <span class="van-button__text">审批完成</span>
    </button>
    <br/>
    <!-- 安全风险管理我已审批筛选-选择条件-结束 -->

    <!-- 安全风险管理我已审批筛选-类型标题 -->
    <h1 class="van-doc-demo-section__title">类型</h1>

    <!-- 安全风险管理我已审批筛选-选择条件-开始 -->
    <button class="van-button van-button--default van-button--normal" :class="this.lc_type == ''?'active':''"
            @click="onClickSearch('0')">
      <span class="van-button__text">全部</span>
    </button>
    <br/>
    <button class="van-button van-button--default van-button--normal" :class="this.lc_type == '59'?'active':''"
            @click="onClickSearch('1')">
      <span class="van-button__text">营业线施工日计划</span>
    </button>
    <br/>
    <button class="van-button van-button--default van-button--normal" :class="this.lc_type == '60'?'active':''"
            @click="onClickSearch('2')">
      <span class="van-button__text">邻近营业线施工日计划</span>
    </button>
    <br/>
    <button class="van-button van-button--default van-button--normal" :class="this.lc_type == '61'?'active':''"
            @click="onClickSearch('3')">
      <span class="van-button__text">非营业线施工日计划</span>
    </button>
    <br/>
    <!-- 安全风险管理我已审批筛选-选择条件-结束 -->

  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import bus from '../bus';

  export default {
    data() {
      return {
        sp_status: '1',
        lc_type: ''
      }

    },
    methods: {

      // 表头返回按钮事件
      onClickLeft() {
        // Toast('返回');
        this.$router.push({path: '/DoWork'});


      },

      onClickRight() {
        var data = this.sp_status + "," + this.lc_type;
        bus.$emit('dowork-van-button--normal-zt', data)
        this.$router.push({path: '/DoWork'});

      },

      onClickStatus(data) {
        if (data != null && data == '0') {
          this.sp_status = '0';
        } else if (data != null && data == '1') {
          this.sp_status = '1';
        }
      },


      //
      onClickSearch(data) {
        if (data != null && data == '1') {
          this.lc_type = '51';
        } else if (data != null && data == '2') {
          this.lc_type = '52';
        } else if (data != null && data == '3') {
          this.lc_type = '53';
        } else {
          this.lc_type = '';
        }
      },

    }
  };
</script>

<style scoped>
  /* 安全风险管理我已审批筛选-选择条件-样式 */
  .van-button--default {
    margin: 10px 0px 0px 10px;
  }

  /* 安全风险管理我已审批筛选-类型标题-样式 */
  h1 {
    /*font: 0.4em sans-serif;*/
    font: 0.9em sans-serif;
    margin: 10px 0px 0px 20px;
  }

  /* 设置头部 style start */
  .van-nav-bar {
    background: #2196F3;
    color: #fff;
  }

  .van-nav-bar .van-icon {
    color: #fff;
  }

  /* 设置头部 style end */
  .active {
    background-color: #a0cfff;
  }

</style>
