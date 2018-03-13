<template>
  <div class="nonBusinessLine">
    <van-nav-bar title="施工日计划" fixed></van-nav-bar>
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
    <div class="charts" >
      <div id="mycharts" calss="mycharts" :style="{width:mywidth,height:mywidth}"></div>
      <div id="mycharts1" calss="mycharts1" :style="{width:mywidth,height:mywidth}"></div>
        <van-row>
          <van-col span="24"><h4>{{today}}至{{nextweek}}施工日计划</h4></van-col>
        </van-row>
        <van-row>
          <van-col span="9">
            <h4>项目名称</h4>
          </van-col>
          <van-col span="4" >
            <h4>营业线</h4>
          </van-col>
          <van-col span="6"  >
            <h4>临近营业线</h4>
          </van-col>
          <van-col span="5" >
            <h4>非营业线</h4>
          </van-col>
        </van-row>
        <van-row v-for="d in detail">
            <van-col span="9"  class="getHeight">
              <div class="chartsSize">{{ d.xmmc}}</div>
            </van-col>
            <van-col span="4" >
              <div class="chartsSize">{{ d.yyxrjh }}</div>
            </van-col>
            <van-col span="6"  >
              <div class="chartsSize">{{ d.ljyyxrjh}}</div>
            </van-col>
            <van-col span="5" >
              <div class="chartsSize">{{ d.fyyxrjh }}</div>
            </van-col>
        </van-row>

    </div>

    <iframe style="margin-top:46px;width:100%;height:1000px;display:none;" :src="this._GLOBAL.sessionUrl"></iframe>
  </div>
</template>

<script>
  import axios from 'axios';
  import Header from '../Common/Header'
  import echarts from 'echarts'
  import { Row, Col } from 'vant';


  export default {
    name: 'nonBusinessLine',// 和组件名称保持一致，只不过是小写的
    data () {
      return {
        ToDoWorkflowCount:'',//存放获取待办流程条数
        workflowTypeId:15,//流程分类id  15代表施工日计划
        charts: '',
        mywidth:document.body.clientWidth + 'px',
        today:'2018-01-01',
        tomorrow:'2018-12-31',
        nextweek:'2018-01-01',
        baseuserId:this._GLOBAL.baseUserId,
        type:2,
        today_detail:[],
        today_statistics:[],
        detail:[],
        /*tomorrow_detail:[],*/
        tomorrow_statistics:[],
        sessionId:this._GLOBAL.sessionId,//sessionId
        sessionUrl:this._GLOBAL.sessionUrl//sessionUrl
      }
    },
    components:{
      Header
    },
    mounted:function () {
// debugger
     /*this.sessionId = this.getQueryVariable('sessionid');
     this.baseuserId = this.getQueryVariable('userid');
      console.log("sessionId===="+this.sessionId+'baseuserId===='+this.baseuserId)
      this.sessionUrl = 'http://tljjgxt.r93535.com:89/verifyLogin.do?loginid='+this.sessionId;*/
      if(window.location.search!=''){
        var sessionid = this.getQueryVariable('sessionid');
        if(!this._GLOBAL.isEmptyObject(sessionid)){
          this._GLOBAL.setSessionId(sessionid)
          this._GLOBAL.setSessionUrl('http://tljjgxt.r93535.com:89/verifyLogin.do?loginid='+sessionid)
        }
        var userid=this.getQueryVariable('userid')
        if(!this._GLOBAL.isEmptyObject(userid)){
          this._GLOBAL.setBaseUserId(userid)
        /*  this.GetToDoWorkflowCount(userid)
          this.getdata(userid);*/
        }
        console.log("sessionId===="+this.sessionId+'baseuserId===='+this.baseuserId)
        console.log("sessionId2===="+this._GLOBAL.sessionId+'baseuserId2===='+this._GLOBAL.baseUserId)
      }


      this.GetToDoWorkflowCount();
      this.$nextTick(function() {
        this.today = this.getDay(0, '-')
        this.tomorrow = this.getDay(1, '-')
        this.nextweek = this.getDay(6, '-')
        /*this.today = '2018-02-28'*/
        /*this.tomorrow='2018-02-28'*/
        // debugger
        this.getdata(this._GLOBAL.baseUserId, this.type, this.today, this.today, 0);
        this.getdata(this._GLOBAL.baseUserId, this.type, this.tomorrow, this.tomorrow, 1)
        this.getdata(this._GLOBAL.baseUserId, this.type, this.today, this.nextweek, 2)
      });
    },
   /* watch: {
      $route: function (to, from) {
        console.log("watch函数............")
        if(to.path==='/Detail'){
          var data = to.query;
          this.url=data.url
        }
      }
    },*/
    methods:{
      getQueryVariable(variable){
        // debugger
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
        }
        return('');
      },
      getdata(baseuserid,type,sgksrq,sgjsrq,date){
        var url='http://whjjgc.r93535.com/DayplanAllProjectnewServlet?baseuserid='+baseuserid+'&type='+type+'&sgksrq='+sgksrq+'&sgjsrq='+sgjsrq
        axios.get(url)
          .then(response => {
            console.log(url)
            if(date===0){
              this.today_statistics.push({value: response.data.yyxrjh, name: '营业线'})
              this.today_statistics.push({value: response.data.ljyyxrjh, name: '临近营业线'})
              this.today_statistics.push({value: response.data.fyyxrjh, name: '非营业线'})
              this.drawPie('mycharts','施工日计划统计图',this.today,0)
            }
//            console.log("当日数据源："+JSON.stringify(this.today_detail));
            if(date===1){
              this.tomorrow_statistics.push({value: response.data.yyxrjh, name: '营业线'})
              this.tomorrow_statistics.push({value: response.data.ljyyxrjh, name: '临近营业线'})
              this.tomorrow_statistics.push({value: response.data.fyyxrjh, name: '非营业线'})
              this.drawPie('mycharts1','施工日计划统计图',this.tomorrow,1)
            }
            if(date===2){
              var data = response.data.data
              for(var i = 0;i<data.length;i++) {
                this.detail.push(data[i])
              }
              /*表格渲染*/
              this.$nextTick(function(){
                console.log("$nextTick监听数据渲染完成之后的回调函数");
                var obj = $(".getHeight");
                for(var i=0;i<obj.length;i++){
                  var h=$(obj[i]).height(); // 63
                  $(obj[i]).siblings().height(h);
                  $(obj[i]).siblings().css({
                    'lineHeight':h+'px'
                  });
                }
              })
            }

          }).catch(err => {
          console.error(err.message)
        })
      },
      resizeCharts () {
        let chartBox = document.getElementsByClassName('charts')[0];
        console.log("设置宽度："+ chartBox.clientWidth);
        this.mywidth = chartBox.clientWidth + 'px'
      },
      getDay(num, str) {
        var today = new Date();
        var nowTime = today.getTime();
        var ms = 24*3600*1000*num;
        today.setTime(parseInt(nowTime + ms));
        var oYear = today.getFullYear();
        var oMoth = (today.getMonth() + 1).toString();
        if (oMoth.length <= 1) oMoth = '0' + oMoth;
        var oDay = today.getDate().toString();
        if (oDay.length <= 1) oDay = '0' + oDay;
        return oYear + str + oMoth + str + oDay;
      },
      drawPie(id,text,subtext,data) {
        this.charts = echarts.init(document.getElementById(id))
        if(data===0){
          var options=this.setoptions(text,subtext,this.today_statistics)
        }
        if(data===1){
          var options=this.setoptions(text,subtext,this.tomorrow_statistics)
        }
        this.charts.setOption(options)
      },
      setoptions(text,subtext,data){
        var options = {
          title : {
            text: text,
            subtext: subtext,
            x:'center'
          },
          color:['red','green','#5cc8b0'],
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          /*legend: {
            //orient: 'vertical',
            //left: 'left',
            data: this.opinion
          },*/
          series : [
            {
              name: '施工日计划统计图',
              type: 'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        return options
      },
      todowork(){
        //跳转到待我审批页面展示
        var query = {
          userIdValue:this.baseuserId,
        }
        this.$router.push({path: '/ToDoWork',query: query});
      },
      dowork(){
        var query = {
          userIdValue:this.baseuserId,
        }
        //跳转到我已审批页面展示
        this.$router.push({path: '/DoWork',query: query});
      },
      icrate(){
        var query = {
          userIdValue:this.baseuserId,
        }
        //跳转到我已审批页面展示
        this.$router.push({path: '/ICreate',query: query});
      },
      //获取待我审批列表中的总条数
      GetToDoWorkflowCount() {
        // debugger
        // this.baseuserId=102300;
        var url = 'http://tljjgxt.r93535.com/GetToDoWorkflowCount?baseuserId='+this._GLOBAL.baseUserId+'&workflowTypeId='+this.workflowTypeId;
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
    margin-top: 44px;
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
  .charts{
    margin-bottom: 55px;
  }
  .chartsSize{
    font-size: 14px;
  }
  /*.charts .van-col{*/
    /*border: 1px solid #ccc;*/

  /*}*/
  .charts .van-row{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-top:-1px;

  }
  .charts .van-row:last-child{
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
  .charts .van-col{
    border-right:1px solid #ccc;
  }
  .charts .van-col:last-child{
    border-right:0;
  }
</style>
