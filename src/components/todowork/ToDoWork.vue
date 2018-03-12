<template>
  <div class="1">
    <!-- 施工日计划待我审批列表-表头-开始 -->
    <div class = "biaotou">
      <van-nav-bar
        title="待我审批"
        left-text="返回"
        @click-left="onClickLeft"
      >
      </van-nav-bar>

      <van-row>
        <van-col span="12">
          <van-button bottom-action @click="ToToDoWorkSearch()" class="todoWorkSearch">
            <!--<van-icon name="search" />     -->
            <img class="seachimg" v-if="searchTab1" src="../../assets/images/sgrjhImages/searchg.png" alt="searchLogo">
            <img class="seachimg" v-else="false" src="../../assets/images/sgrjhImages/search.png" alt="searchLogo">
            搜索</van-button>
        </van-col>
        <van-col span="12">
          <van-button bottom-action @click="ToToDoWorkScreen()" class="todoWorkScreen">
            <!--<van-icon name="search" />    -->
            <img class="seachimg" v-if="searchTab2" src="../../assets/images/sgrjhImages/sxg.png" alt="searchLogo">
            <img class="seachimg" v-else="false" src="../../assets/images/sgrjhImages/sx.png" alt="searchLogo">
            筛选</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 施工日计划待我审批列表-搜索筛选框-结束 -->

    <!-- 施工日计划待我审批列表-list展示数据-开始 --><!-- 代办流程名称 -->
     <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
        <table v-for="(plan, index) in ToDoWorkflowList" class="tablelist">
            <tr>
              <td style="width:25%">流程标题:</td>
              <td style="width:75%">{{plan.requestName }}</td>
            </tr>
            <tr>
              <td style="width:25%">流程类型:</td>
              <td style="width:75%">{{plan.workflowName }}</td>
            </tr>
            <tr>
              <td style="width:25%">流程状态:</td>
              <td style="width:75%">{{plan.currentNodeName }}</td>
            </tr>
        </table>
      </v-scroll>
      <!-- 施工日计划待我审批列表-list展示数据-结束 -->
  </div>
</template>

<script>
import $ from "jquery";
import { Waterfall } from 'vant';
import { Toast } from 'vant';
import { Sku } from 'vant';
import Vue from 'vue';
import axios from 'axios';
import bus from '../bus';
import Scroll from '../Common/PullRefresh';  //引入上拉加载，下拉刷新的插件

// 施工日计划待我审批列表-迭代动态数据-开始
export default {
   name: "ToDoWork",
    components: {
      'v-scroll': Scroll
    },
  data() {
    return {
      counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num : 10,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数

      count:10,//存放展示条数
      ToDoWorkflowCount:'',//存放获取待办流程条数
      ToDoWorkflowList:[],//存放获取待办流程列表
      requestName:'',//流程名称
      baseuserId:'',//基础平台用户id
      pageNo:'1',//页数
      workflowTypeId:'18',//流程分类id  15代表施工日计划
      pageSize:'100',//每页条数
      workflowId:'59',//流程类型id  51营业线 52临近营业线 53非营业线
      disabled: false,
      searchTab1:false,
      searchTab2:false,

    };
  },

//打开页面是调用此方法，获取代办流程列表数据
  mounted: function() {
    // debugger;
    // 施工日计划待我审批搜索-获取流程名称值
      this.GetOnSearch();
    //施工日计划待我审批筛选-获取流程类型id
      this.GetOnClickSgrjh();
  //  刷新页面加载初始化数据
      this.GetToDoWorkflowList();
      },

  methods: {
    // 表头返回按钮事件
    onClickLeft() {
        this.$router.push({path: '/Index'});
      },

//获取待我审批列表中的总条数
// GetToDoWorkflowCount(data) {
//         // debugger;
//          this.baseuserId=236807;
//            var url = 'http://whjjgc.r93535.com/GetToDoWorkflowCount?baseuserId='+this.baseuserId+'&workflowTypeId='+this.workflowTypeId+'&workflowId='+this.workflowId
//         // alert(url);
//           axios.get(url)
//             .then(response => {
//               // debugger;
//               this.ToDoWorkflowCount  = response.data
//             }).catch(err => {
//             console.error(err.message)
//           })
//         },

  // 点击搜索按钮跳转到搜索页面
  ToToDoWorkSearch(){
    this.searchTab1 = true;
    this.searchTab2 = false;
    $(".todoWorkSearch").css("color","rgb(0, 135, 232)");
    $(".todoWorkScreen").css("color","rgb(0,0,0)");
    this.$router.push({path: '/ToDoWorkSearch'});
  },

  // 点击筛选按钮跳转到筛选页面
  ToToDoWorkScreen(){
    this.searchTab1 = false;
    this.searchTab2 = true;
    $(".todoWorkSearch").css("color","rgb(0, 0, 0)");
    $(".todoWorkScreen").css("color","rgb(0, 135, 232)");
    this.$router.push({path: '/ToDoWorkScreen'});
  },

  // 获取点击搜索按钮跳转事件的值
  GetOnSearch(){
      //待我审批页面展示-传递流程名称 变量名为v-model
      // debugger
     bus.$on('v-model',data=> {
      this.requestName = data;
      // alert('onSearchName===='+data);
      this.GetToDoWorkflowList();
     });
    },

 //  获取点击营业线施工日计划跳转事件的值
    GetOnClickSgrjh(){
      //获取待我审批页面展示-传递流程类型id 变量名van-button--normal
      bus.$on('van-button--normal',data=> {
        this.workflowId = data;
        // alert('workflowId===='+data);
        this.GetToDoWorkflowList();
      });
    },

// 获取代办流程列表数据-拼接url，发送请求获取待办流程列表数据
GetToDoWorkflowList(){
  // debugger
        let vm = this;
        this.baseuserId=102300;
        this.pageNo = 1;
        var url = 'http://whjjgc.r93535.com/GetToDoWorkflowList?baseuserId='+this.baseuserId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
        // alert(url);
        vm.$http.get(url).then((response) => {
          vm.ToDoWorkflowList = response.data.slice(0,10);
          // alert(response.data.slice(0,10).length);
        }, (response) => {
          console.log('error');
        });
      },
//下拉页面刷新数据操作
      onRefresh(done) {
        // debugger
        // 获取代办流程列表数据-拼接url，发送请求获取待办流程列表数据
        this.GetToDoWorkflowList();
        done() // call done
      },

//上拉页面加载更多数据操作
      onInfinite(done) {
        // debugger
        let vm = this;
        this.baseuserId=102300;
        this.pageNo = 1;
        var url = 'http://whjjgc.r93535.com/GetToDoWorkflowList?baseuserId='+this.baseuserId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
        vm.$http.get(url).then((response) => {
          // debugger
          vm.counter++;
          vm.pageEnd = vm.num * vm.counter;
          vm.pageStart = vm.pageEnd - vm.num;
          let arr = response.data;
          if(arr!==''&&arr!==null&&arr!==undefined){
            for(var i=0;i<arr.length;i++){
              vm.ToDoWorkflowList.push(arr[i]);
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
  /* 设置头部 style start */
  .van-nav-bar{
    background: #2196F3;
    color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
  /* 设置头部 style end */
/* 表头标题演示 */
.biaotou{
  position: fixed;
  width: 100%;
}
/* 筛选标题样式 */
.van-button--bottom-action{
  top:-3px;
}
/* 列表展示样式 */
.yo-scroll{
  top:1.8rem;
}
/* 施工日计划待我审批列表-搜索筛选框-字体样式 */
/* .van-col-12 {
  font-size: 0px;
} */
/* 施工日计划待我审批列表-搜索筛选框-背景颜色 */
.van-button--bottom-action {
  color:#000;
  /*background-color: #c9c9c9;*/
  background-color: rgb(229, 242, 250);
}
/*  施工日计划待我审批列表-代办列表信息-table样式 */
/* html5 list页面的中间table标签样式  */
/*.tablelist{*/
  /*width:100%;border-collapse:collapse;border:1px solid #efeff4; margin-top: 3px;background-color: #efeff4;}*/
  .tablelist{
    /*width:100%;*/
    border-collapse:collapse;
    border:1px solid #efeff4;
    margin-top: 3px;
    /*background-color: #efeff4;*/
    /*修改列表内容区域样式*/
    width: 94%;
    margin: 0 auto;
    margin-top: 6%;
    border-radius: 4px;
    padding: 5px;
    -webkit-box-shadow: 0px 0px 5px 1px #ccc;
    box-shadow: 0px 0px 5px 1px #ccc;
  }
.tablelist td{
  padding:6px 6px 3px 4px;font:Arial, Helvetica, sans-serif;text-align:left;}
.tablelist th{
  padding:6px 6px 3px 4px;font:Arial, Helvetica, sans-serif;text-align:left;}
  /*修改施工日计划搜索和筛选的样式*/
  .van-col-12 button{
    border: 1px solid #ccc;
  }
  .van-button--bottom-action{
    height: 44px;
    line-height: 44px;
  }
  .seachimg{
    width: 20px;
    height: 20px;
  }
</style>
