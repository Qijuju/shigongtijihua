<template>
  <div class="1">
    <!-- 施工日计划我发起的列表-表头-开始 -->
    <div class = "biaotou">
      <van-nav-bar title="我发起的" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <van-icon name="arrow-left" slot="left" />
        <van-icon name="close" slot="right" />
      </van-nav-bar>
      <!-- 施工日计划我已审批列表-表头-结束 -->
      <!-- 施工日计划我发起的列表-搜索筛选框-开始 -->
      <van-row>
        <van-col span="12">
          <van-button bottom-action @click="ToICreateSearch()"><van-icon name="search" />     搜索</van-button>
        </van-col>
        <van-col span="12">
          <van-button bottom-action @click="ToICreateScreen()"><van-icon name="search" />     筛选</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 施工日计划我发起的列表-搜索筛选框-结束 -->

    <!-- 施工日计划我发起的列表-list展示数据-开始 --><!-- 代办流程名称 -->
     <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
        <table v-for="(plan, index) in ICreateflowList" class="tablelist">
            <tr><td style="width:20%">流程标题:</td><td style="width:80%">{{plan.requestName }}</td></tr>
            <tr><td style="width:20%">流程类型:</td><td style="width:80%">{{plan.workflowName }}</td></tr>
            <tr><td style="width:20%">流程状态:</td><td style="width:80%">{{plan.currentNodeName }}</td></tr>
        </table>
      </v-scroll>
    <!-- 施工日计划我发起的列表-list展示数据-结束 -->
  </div>
</template>

<script>
import { Waterfall } from 'vant';
import Vue from 'vue';
import axios from 'axios';
import bus from '../bus';
import Scroll from '../Common/PullRefresh';  //引入上拉加载，下拉刷新的插件

// 施工日计划我发起的列表-迭代动态数据-开始
export default {
  name: "ICreate",
    components: {
      'v-scroll': Scroll
    },
  data() {
    return {
      counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num : 10,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数

      count:0,//存放展示条数
      ICreateflowCount:[],//存放获取待办流程条数
      ICreateflowList:[],//存放获取待办流程列表
      requestName:'',//流程名称
      userId:'',//基础平台用户id
      pageNo:'1',//页数
      workflowTypeId:'18',//流程分类id  15代表施工日计划
      pageSize:'10',//每页条数
      workflowId:'59',//流程类型id  51营业线 52临近营业线 53非营业线
      disabled: false
      
    };
  },

//打开页面是调用此方法，获取代办流程列表数据 
  mounted: function() {
  // 施工日计划我发起的搜索-获取流程名称值
      this.GetOnSearch();
   //施工日计划我发起的筛选-获取流程类型id 
      this.GetOnClickSgrjh();
  //  刷新页面加载初始化数据
        this.GetICreateflowList();
      },

  methods: {
    // 表头返回按钮事件
    onClickLeft() {
        this.$router.push({path: '/NonBusinessLine'});
        // Toast('返回');
      },
    // 表头关闭按钮事件
      onClickRight() {
        this.$router.push({path: '/NonBusinessLine'});
        // Toast('关闭');
      },
   
// 点击搜索按钮跳转到搜索页面
  ToICreateSearch(){
    // debugger
    this.$router.push({path: '/ICreateSearch'});
  },
  // 点击筛选按钮跳转到筛选页面
  ToICreateScreen(){
    this.$router.push({path: '/ICreateScreen'});
  },

  // 获取点击搜索按钮跳转事件的值
  GetOnSearch(){
      //我发起的页面展示-传递流程名称 变量名为v-model
      // debugger
     bus.$on('v-model',data=> {
      this.requestName = data;
      // alert('onSearchName===='+data);
      this.GetICreateflowList();
     });
    },

 //  获取点击营业线施工日计划跳转事件的值
    GetOnClickSgrjh(){
      //获取我发起的页面展示-传递流程类型id 变量名van-button--normal
      bus.$on('van-button--normal',data=> {
        this.workflowId = data;
        // alert('workflowId===='+data);
        this.GetICreateflowList();
      });
    },

// GetToDoWorkflowCount(data) {
//           //debugger
//           this.xmmc=data.xmmc
//           this.dj=data.dj
//           this.xingbie=data.xingbie
//           this.sglc=data.sglc
//           this.sglx=data.sglx
//           this.sgksrq=data.startDay
//           this.sgjsrq=data.endDay
//           var url='http://whjjgc.r93535.com/MyWorkflowRequestList?userId=236807&workflowTypeId=18&workflowId=59'
//           axios.get(url)
//             .then(response => {
//               //debugger
//               this.ToDoWorkflowCount  = response.data
//             }).catch(err => {
//             console.error(err.message)
//           })
//         },

// 获取代办流程列表数据-拼接url，发送请求获取待办流程列表数据
    GetICreateflowList(){
          // debugger
      this.userId=236807;
        var url = 'http://whjjgc.r93535.com/MyWorkflowRequestList?userId='+this.userId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
        // alert(url);
        axios.get(url)
          .then(response => {
            var data = response.data
            for(var i in data) {
              console.log(data[i].requestId)
              this.ICreateflowList.push(data[i])
            }
            console.log(response.data)
            console.log(this.ICreateflowList)
          }).catch(err => {
          console.error(err.message)
        })
      },

//下拉页面刷新数据操作 
      onRefresh(done) {
        // debugger
        // 获取代办流程列表数据-拼接url，发送请求获取待办流程列表数据
        this.GetICreateflowList();
        done() // call done
      },

//上拉页面加载更多数据操作 
      onInfinite(done) {
        // debugger
        let vm = this;
        this.userId=236807;
        this.pageNo = 1;
        var url = 'http://whjjgc.r93535.com/MyWorkflowRequestList?userId='+this.userId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
        vm.$http.get(url).then((response) => {
          // debugger
          vm.counter++;
          vm.pageEnd = vm.num * vm.counter;
          vm.pageStart = vm.pageEnd - vm.num;
          let arr = response.data;
          if(arr!==''&&arr!==null&&arr!==undefined){
            for(var i=0;i<arr.length;i++){
              vm.ICreateflowList.push();
            }
          }else {
            return;
          }
          done() // call done
        }, (response) => {
          console.log('error');
        });
      },



  }
};

</script>

<style scoped>
/* 表头标题演示 */
.biaotou{
  position: fixed;
  width: 100%;
}
/* 标题样式 */
.van-nav-bar{
  background-color: #e5f2fa;
}
/* 筛选标题样式 */
.van-button--bottom-action{
  top:-3px;
}
/* 列表展示样式 */
.yo-scroll{
  top:1.8rem;
}
/* 施工日计划我发起的列表-搜索筛选框-字体样式 */
/* .van-col-12 {
  font-size: 0px;
} */
/* 施工日计划我发起的列表-搜索筛选框-背景颜色 */
.van-button--bottom-action {
  color:#000;
  background-color: #c9c9c9;
}
/*  施工日计划我发起的列表-代办列表信息-table样式 */
/* html5 list页面的中间table标签样式  */
.tablelist{
  width:100%;border-collapse:collapse;border:1px solid #efeff4; margin-top: 3px;background-color: #efeff4;}
.tablelist td{
  padding:6px 6px 3px 4px;font:Arial, Helvetica, sans-serif;text-align:left;}
.tablelist th{
  padding:6px 6px 3px 4px;font:Arial, Helvetica, sans-serif;text-align:left;}
</style>
