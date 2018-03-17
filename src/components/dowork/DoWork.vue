<template>
  <div class="1">
    <!-- 施工日计划我已审批列表-表头-开始 -->
    <div class = "biaotou">
      <van-nav-bar title="我已审批" left-text="返回" right-text="关闭"  @click-right="onClickRight"  @click-left="$router.go(-1)">
      </van-nav-bar>
      <!-- 施工日计划我已审批列表-表头-结束 -->
      <!-- 施工日计划我已审批列表-搜索筛选框-开始 -->
      <van-row>
        <van-col span="12">
          <van-button bottom-action @click="ToDoWorkSearch()" class="todoWorkSearch">
            <!--<van-icon name="search" />-->
            <img class="seachimg" v-if="searchTab1" src="../../assets/images/sgrjhImages/searchg.png" alt="searchLogo">
            <img class="seachimg" v-else="false" src="../../assets/images/sgrjhImages/search.png" alt="searchLogo">
            搜索</van-button>
        </van-col>
        <van-col span="12">
          <van-button bottom-action @click="ToDoWorkScreen()" class="todoWorkScreen">
            <!--<van-icon name="search" />-->
            <img class="seachimg" v-if="searchTab2" src="../../assets/images/sgrjhImages/sxg.png" alt="searchLogo">
            <img class="seachimg" v-else="false" src="../../assets/images/sgrjhImages/sx.png" alt="searchLogo">
            筛选</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 施工日计划我已审批列表-搜索筛选框-结束 -->

    <!-- 施工日计划我已审批列表-list展示数据-开始 --><!-- 我已审批页名称 -->
    <!--<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">-->
    <div class="neirong">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore" :autoFill="autoFill">
      <div :style="{height:myHeight}">
      <table v-for="(plan, index) in DoWorkflowList" class="tablelist" @click="toDetail(plan.url)" >
          <tr><td style="width:20%">流程标题:</td><td style="width:80%">{{plan.requestName }}</td></tr>
          <tr><td style="width:20%">流程类型:</td><td style="width:80%">{{plan.workflowName }}</td></tr>
          <tr><td style="width:20%">流程状态:</td><td style="width:80%">{{plan.currentNodeName }}</td></tr>
        </table>
      </div>
    <!--</v-scroll>-->
    <!-- 施工日计划我已审批列表-list展示数据-结束 -->
    </mt-loadmore>
    </div>
  </div>
</template>

<script>
import { Waterfall } from 'vant';
import Vue from 'vue';
import axios from 'axios';
import { Toast } from 'vant';
import bus from '../bus';
import Scroll from '../Common/PullRefresh';  //引入上拉加载，下拉刷新的插件

// 施工日计划我已审批列表-迭代动态数据-开始
export default {
  name: "DoWork",
    components: {
      'v-scroll': Scroll
    },
  data() {
    return {
      neirong:(window.innerHeight-150)+'px',
      myscroll:'scroll',
      autoFill:false,
      msg:'',
      myHeight:(window.innerHeight-50)+'px',
      myWidth:window.innerWidth+'px',
      counter:1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num:10,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数

      count:10,//存放展示条数
      DoWorkflowCount:[],//存放获取待办流程条数
      DoWorkflowList:[],//存放获取待办流程列表
      requestName:'',//流程名称
      userId:this._GLOBAL.baseUserId,//基础平台用户id
      pageNo:1,//页数
      workflowTypeId:'15',//流程分类id  15代表施工日计划
      pageSize:'10',//每页条数
      workflowId:'',//流程类型id  51营业线 52临近营业线 53非营业线
      status:'1', // 0审批中 ，1审批完成
      disabled: false,
      searchTab1:false,
      searchTab2:false,

    };
  },

//打开页面是调用此方法，获取我已审批页列表数据
  mounted: function() {

    /*console.log(this.$route.query);
    var data = this.$route.query;
    if(data != null && data != ''){
      //debugger
      this.userId=data.userIdValue;
      //this.loadMore()
    }*/

    // 施工日计划我已审批页搜索-获取流程名称值
      this.GetOnSearch();
    //施工日计划我已审批页筛选-获取流程类型id
      this.GetOnClickSgrjh();
  //  刷新页面加载初始化数据
      this.GetDoWorkflowList();
      },

  methods: {

    toDetail(url) {
      var query = {
        url: url
      }
      this.$router.push({path: '/Detail', query: query});
    },
    // 表头返回按钮事件
    onClickLeft() {
      this.$router.push({path: '/Index'});
        // Toast('返回');
      },

    //  关闭应用程序。调取JSAPI,关闭应用程序
    onClickRight(){
      RPM.closeApplication();
    },

    // 点击搜索按钮跳转到搜索页面
  ToDoWorkSearch(){
    this.searchTab1 = true;
    this.searchTab2 = false;
    $(".todoWorkSearch").css("color","rgb(0, 135, 232)");
    $(".todoWorkScreen").css("color","rgb(0,0,0)");
    this.$router.push({path: '/DoWorkSearch'});
  },
  // 点击筛选按钮跳转到筛选页面
  ToDoWorkScreen(){
    this.searchTab1 = false;
    this.searchTab2 = true;
    $(".todoWorkSearch").css("color","rgb(0, 0, 0)");
    $(".todoWorkScreen").css("color","rgb(0, 135, 232)");
    this.$router.push({path: '/DoWorkScreen'});
  },

  // 获取点击搜索按钮跳转事件的值
  GetOnSearch(){
      //我已审批页页面展示-传递流程名称 变量名为v-model
      // debugger
     bus.$on('v-model',data=> {
      this.requestName = data;
      this.reset()
      // alert('onSearchName===='+data);
      this.GetDoWorkflowList();
     });
    },

 //  获取点击营业线施工日计划跳转事件的值
    GetOnClickSgrjh(){
      //获取我已审批页页面展示-传递流程类型id 变量名van-button--normal
      //  获取点击审批状态事件的值
       bus.$on('van-button--normal-zt',data=> {
         this.status = data;
         //alert('status===='+data);
         bus.$on('van-button--normal',data=> {
            this.reset()
            this.workflowId = data;
            //alert('workflowId===='+data);
            this.GetDoWorkflowList();
          });
      });

    },
    reset(){
      this.DoWorkflowList=[]
      this.pageNo=1
      this.count=0
    },
    loadTop(){
      this.reset();
      this.GetDoWorkflowList();
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom(){
      this.GetDoWorkflowList();
      this.$refs.loadmore.onBottomLoaded();
    },

// 获取我已审批页列表数据-拼接url，发送请求获取待办流程列表数据
    GetDoWorkflowList(){
      if(this.status != null && this.status == '1'){//审批完成
        var url = 'http://tljjgxt.r93535.com/YiDoWorkflowListPCServlet?userId='+this._GLOBAL.baseUserId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
      }else{//审批中
        var url = 'http://tljjgxt.r93535.com/DoWorkflowListPCServlet?userId='+this._GLOBAL.baseUserId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
      }
        axios.get(url)
          .then(response => {
            var data = response.data
            debugger
            if(data.length>=1){
              for(var i in data) {
                this.DoWorkflowList.push(data[i])
              }
              this.pageNo=this.pageNo+1
              this.count=this.count+data.length
              this.myHeight=Math.max((window.innerHeight-50), (150*this.count))+'px'
              this.GetDoWorkflowList()
              /*this.msg='加载成功'
              Toast.success(this.msg)*/
            }else{
              /*this.msg='没有更多数据'*/
              this.msg='加载完毕'
              Toast.success(this.msg)
            }
          }).catch(err => {
          console.error(err.message)
          this.msg='加载失败'
          Toast.fail(this.msg)
          console.log('error');
        })
      },/* GetDoWorkflowList(){
      // debugger
      // this.userId=236807;
      this.pageNo = 1;
      //debugger
      if(this.status != null && this.status == '1'){//审批完成
        var url = 'http://tljjgxt.r93535.com/YiDoWorkflowListPCServlet?userId='+this._GLOBAL.baseUserId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
      }else{//审批中
        var url = 'http://tljjgxt.r93535.com/DoWorkflowListPCServlet?userId='+this._GLOBAL.baseUserId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
      }
//      alert(url);
      console.log(url);
        axios.get(url)
          .then(response => {
            var data = response.data
            for(var i in data) {
              // debugger
              console.log(data[i].requestId)
              this.DoWorkflowList.push(data[i])
            }
            console.log(response.data)
            console.log(this.DoWorkflowList)
          }).catch(err => {
          console.error(err.message)
        })
      },*/

//下拉页面刷新数据操作
      onRefresh(done) {
        // debugger
        // 获取我已审批页列表数据-拼接url，发送请求获取待办流程列表数据
        this.GetDoWorkflowList();
        done() // call done
      },

//上拉页面加载更多数据操作
      onInfinite(done) {
        // debugger
        let vm = this;
        // this.userId=236807;
        this.pageNo = 1;
        if(status != null && status == '1'){//审批完成
          var url = 'http://tljjgxt.r93535.com/YiDoWorkflowListPCServlet?userId='+this._GLOBAL.baseUserId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
        }else{//审批中
          var url = 'http://tljjgxt.r93535.com/DoWorkflowListPCServlet?userId='+this._GLOBAL.baseUserId+'&pageNo='+this.pageNo+'&workflowTypeId='+this.workflowTypeId+'&pageSize='+this.pageSize+'&workflowId='+this.workflowId+'&requestName='+this.requestName
        }
        vm.$http.get(url).then((response) => {
          // debugger
          vm.counter++;
          vm.pageEnd = vm.num * vm.counter;
          vm.pageStart = vm.pageEnd - vm.num;
          let arr = response.data;
          if(arr!==''&&arr!==null&&arr!==undefined){
            for(var i=0;i<arr.length;i++){
              vm.DoWorkflowList.push();
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
  width: 100%;
}
/* 标题样式 */
/* 设置头部 style start */
.van-nav-bar{
  background: #2196F3;
  color: #fff;
}
.van-nav-bar .van-icon{
  color: #fff;
}
/* 设置头部 style end */
/* 筛选标题样式 */
.van-button--bottom-action{
  top:-3px;
}
/* 列表展示样式 */
.yo-scroll{
  top:1.8rem;
}
/* 施工日计划我已审批列表-搜索筛选框-字体样式 */
/* .van-col-12 {
  font-size: 0px;
} */
/* 施工日计划我已审批列表-搜索筛选框-背景颜色 */
.van-button--bottom-action {
  color:#000;
  /*background-color: #c9c9c9;*/
  background-color: rgb(229, 242, 250);
}
/*  施工日计划我已审批列表-代办列表信息-table样式 */
/* html5 list页面的中间table标签样式  */
/*.tablelist{*/
  /*width:100%;border-collapse:collapse;border:1px solid #efeff4; margin-top: 3px;background-color: #efeff4;*/
/*}*/
.tablelist{
  /*width:100%;*/
  border-collapse:collapse;
  border:1px solid #efeff4;
  margin-top: 3px;
  /*background-color: #efeff4;*/
  /*修改列表内容区域样式*/
  width: 95%;
  margin: 10px;
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
