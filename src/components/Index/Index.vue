<template>
  <div class="nonBusinessLine">
    <van-nav-bar title="施工日计划"></van-nav-bar>
    <div class="content">
      <van-row>
        <van-col span="8">
          <div class="imgB imgB1" @click="todowork()">
            {{ToDoWorkflowCount}}
          </div>
          <p @click="todowork()">待我审批</p>
        </van-col>
        <van-col span="8">
          <div class="imgB imgB2" @click="dowork()">
          </div>
          <p @click="dowork()">我已审批</p>
        </van-col>
        <van-col span="8">
          <div class="imgB imgB3" @click="icrate()">
          </div>
          <p @click="icrate()">我发起的</p>
        </van-col>
      </van-row>
    </div>
    <Tabbar/>
  </div>

</template>

<script>
  import Tabbar from '../Common/Tabbar';
  import axios from 'axios';
  import Header from '../Common/Header'

  export default {
    name: 'nonBusinessLine',// 和组件名称保持一致，只不过是小写的
    data () {
      return {
        ToDoWorkflowCount:'',//存放获取待办流程条数
        workflowTypeId:18
      }
    },
    components:{
      Header,
      Tabbar
    },
    mounted:function () {
      this.GetToDoWorkflowCount();
    },
    methods:{
      todowork(){
        //跳转到待我审批页面展示
        this.$router.push({path: '/ToDoWork'});
      },
      dowork(){
        //跳转到我已审批页面展示
        this.$router.push({path: '/DoWork'});
      },
      icrate(){
        //跳转到我已审批页面展示
        this.$router.push({path: '/ICreate'});
      },
      //获取待我审批列表中的总条数
      GetToDoWorkflowCount() {
        this.baseuserId=102300;
        var url = 'http://whjjgc.r93535.com/GetToDoWorkflowCount?baseuserId='+this.baseuserId+'&workflowTypeId='+this.workflowTypeId;
        axios.get(url)
          .then(response => {
            this.ToDoWorkflowCount  = response.data;
          }).catch(err => {
          console.error(err.message)
        })
      },
    }
  }
</script>

<style scoped>
  .content{
    padding-top:10px;
  }
  /* 设置头部 style start */
  .van-nav-bar{
    background: #2196F3;
    color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
  img{
    width:50px;
    height:50px;
  }
  .van-col.van-col-8{
    position: relative;
    height:90px;
  }
  .imgB{
    position: absolute;
    left:50%;
    margin-left:-20%;
    width:40%;
    height:50px;
    text-align: center;
    line-height:50px;
    color: #fff;
  }

  .imgB1{
    background: url("../../assets/images/sgrjhImages/dsp.png") no-repeat center;
    -webkit-background-size: contain;
    background-size: contain;
  }
  .imgB2{
    background: url("../../assets/images/sgrjhImages/ysp.png") no-repeat center;
    -webkit-background-size: contain;
    background-size: contain;
  }
  .imgB3{
    background: url("../../assets/images/sgrjhImages/fqd.png") no-repeat center;
    -webkit-background-size: contain;
    background-size: contain;
  }
  p{
    position: absolute;
    top:50px;
    left:0%;

    width:100%;
    height:48px;

    text-align: center;
    line-height:48px;
  }

</style>
