<template>
  <div id="DayPlanCount">
    <van-nav-bar
      title="非营业线详情"
      left-text="返回"
      @click-left="onClickLeft" fixed
    ></van-nav-bar>
    <div class="content">
      <van-row v-for="(name, index) in DayPlanCount" :key="index">
        <div @click="getDayPlanDetail(name.date,index,true)">
        </div>
        <van-col span="10"  >
          <h3>{{ name.date}}</h3>
        </van-col>
        <van-col span="6" offset="4">
          <h3>{{ name.count }}</h3>
        </van-col>
        <van-col span="4">
          <img src="../../assets/images/icon/more_unfold.png" @click="getDayPlanDetail(name.date,index,true)" v-show="!(index===showmum)" style="height:25px;width:25px">
          <img src="../../assets/images/icon/less.png"  @click="getDayPlanDetail(name.date,index,false)" v-show="index===showmum" style="height:25px;width:25px">
          <!--<van-button type="default" @click="getDayPlanDetail(name.date,index,true)" v-show="!(index===showmum)"><van-icon name="add" /></van-button>
          <van-button type="default" @click="getDayPlanDetail(name.date,index,false)" v-show="index===showmum"><van-icon name="clear" /></van-button>-->
        </van-col>
        <div v-show="index===showmum">
          <van-steps direction="vertical"  active-color="#f60" v-waterfall-lower="loadMore(index)"
                     waterfall-disabled="disabled"
                     waterfall-offset="400">
            <!--<van-pull-refresh v-model="isLoading">-->
            <van-step v-for="(plan, index) in DayPlanDetail" >
              <div @click="goDetail(plan)">
              <h3>{{ "序号："+(index+1)}}</h3>
              <p>{{ "开始时间："+plan.kssjd}}</p>
              <p>{{ "项目名称："+plan.xmmc }}</p>
              <p>{{ "项目地点："+plan.sgdd }}</p>
              <p>{{ "结束时间："+plan.jssjd }}</p>
              </div>
            </van-step>
            <!--</van-pull-refresh>-->
          </van-steps>
        </div>
      </van-row>
    </div>

  </div>

</template>

<script>
  import { Icon ,NavBar,Field,Picker,Radio,Toast,DatetimePicker,Waterfall,Step,Steps,PullRefresh,Cell,CellGroup,Badge } from 'vant';
  import Vue from 'vue';
  import axios from 'axios';
  export default {
    name: "day-plan-detail",
    data() {
      return {
        isLoading: false,
        xmmc:'',
        dj:'',
        xingbie:'',
        sglc:'',
        sgksrq:'',
        sgjsrq:'',
        page:1,
        DayPlanCount:[],
        DayPlanDetail:[],
        disabled: false,
        count:0,
        currenttime:'',
        showmum:'',
        loadmore:false,
        hasopen:false
      };
    },
    directives: {
      WaterfallLower: Waterfall('lower'),
      WaterfallUpper: Waterfall('upper')
    },
    mounted(){
      var data=this.$route.query
      this.xmmc=data.xmmc
      this.dj=data.dj
      this.mc=data.mc
      this.sgksrq=data.sgksrq
      this.sgjsrq=data.sgjsrq
      this.getCount()
    },
    watch: {
      $route: function (route) {
        /*debugger*/
        var data = route.query;
        if(data.length>0) {
          this.xmmc = data.xmmc
          this.dj = data.dj
          this.mc = data.mc
          this.sgksrq = data.sgksrq
          this.sgjsrq = data.sgjsrq
          this.getCount()
        }
      },
    },
    /*created(){
      var data=this.$store.getters.nonBusinessLineSearch
      this.getCount(data)
    },*/
    methods: {
      loadMore(index){
        /*debugger*/
        if(this.count>this.DayPlanDetail.length&&index===this.showmum){
          var url='http://tljjgxt.r93535.com/NonBusinessDayPlanDetailSearchServlet?xmmc='+this.xmmc+'&sgksrq='+this.currenttime+'&page='+this.page+'&baseuserid=102300&sgjsrq='+this.currenttime
          /*var url='http://tljjgxt.r93535.com/DayPlanDetailNearbySearchServlet?xmmc='+this.xmmc+'&sgksrq='+this.currenttime+'&page=1&sgjsrq='+this.currenttime+'&baseuserid=236000&xb='+this.xingbie+'&lb='+this.sglx*/
          /*var url='http://tljjgxt.r93535.com/DayPlanDetailSearchServlet?xmmc='+this.xmmc+'&sgksrq='+this.currenttime+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&page='+this.page+'&sglc='+this.sglc+'&baseuserid=236210&kssjd=&sgjsrq='+this.currenttime*/
          /*debugger*/
          axios.get(url)
            .then(response => {
              var data=response.data.data
              for(var i in data) {
                this.DayPlanDetail.push(data[i])
                this.page=this.page+1
              }
              this.disabled = false
              console.log(this.DayPlanDetail)
            }).catch(err => {
            console.error(err.message)
          })
        }
      },
      getCount() {
        /*debugger
        console.log(data)
        this.xmmc=data.xmmc
        this.dj=data.dj
        this.xingbie=data.xingbie
        /!*this.sglc=data.sglc*!/
        this.sglx=data.sglx
        this.sgksrq=data.sgksrq
        this.sgjsrq=data.sgjsrq*/
        var url='http://tljjgxt.r93535.com/DayPlanCountServlet?baseuserid=102300&xmmc='+this.xmmc+'&type=3&sgksrq='+this.sgksrq+'&sgjsrq='+this.sgjsrq+'&dj=&xingbie=&sglx=&sglc=&kssjd=&page=0'
        axios.get(url)
          .then(response => {
            /*debugger*/
            this.DayPlanCount  = response.data
          }).catch(err => {
          console.error(err.message)
        })
      },
      getDayPlanDetail(data,index,flag) {
        if(this.hasopen==false&&flag==true){
          this.currenttime=data
          var url='http://tljjgxt.r93535.com/NonBusinessDayPlanDetailSearchServlet?xmmc='+this.xmmc+'&sgksrq='+this.currenttime+'&page='+this.page+'&baseuserid=102300&sgjsrq='+this.currenttime
          //var url='http://tljjgxt.r93535.com/DayPlanDetailNearbySearchServlet?xmmc='+this.xmmc+'&sgksrq='+data+'&page=1&sgjsrq='+data+'&baseuserid=236000&xb='+this.xingbie+'&lb='+this.sglx
          /*var url='http://tljjgxt.r93535.com/DayPlanDetailSearchServlet?xmmc='
            +this.xmmc+'&sgksrq='+data+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&page='+1+
            '&sglc='+this.sglc+'&baseuserid=236210&kssjd=&sgjsrq='+data*/
          /*debugger*/
          axios.get(url)
            .then(response => {
              this.DayPlanDetail  = response.data.data
              this.count = response.data.count
              this.showmum=index
              this.page=this.page+1
              this.hasopen=true
              console.log(this.DayPlanDetail)
            }).catch(err => {
            console.error(err.message)
          })
        }else if(this.hasopen==true&&flag==true){
          if(this.showmum==index){
            Toast('出错了！');
          }else{
            this.showmum=''
            this.DayPlanDetail=[]
            this.count=0
            this.page=1
            var url='http://tljjgxt.r93535.com/NonBusinessDayPlanDetailSearchServlet?xmmc='+this.xmmc+'&sgksrq='+this.currenttime+'&page='+this.page+'&baseuserid=102300&sgjsrq='+this.currenttime
            //var url='http://tljjgxt.r93535.com/DayPlanDetailNearbySearchServlet?xmmc='+this.xmmc+'&sgksrq='+data+'&page=1&sgjsrq='+data+'&baseuserid=236000&xb='+this.xingbie+'&lb='+this.sglx
            /*var url='http://tljjgxt.r93535.com/DayPlanDetailSearchServlet?xmmc='
              +this.xmmc+'&sgksrq='+data+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&page='+this.page+
              '&sglc='+this.sglc+'&baseuserid=236210&kssjd=&sgjsrq='+data*/
            axios.get(url)
              .then(response => {
                this.DayPlanDetail  = response.data.data
                this.count = response.data.count
                this.showmum=index
                this.page=this.page+1
                this.hasopen=true
                console.log(this.DayPlanDetail)
              }).catch(err => {
              console.error(err.message)
            })
          }
        }else if(this.hasopen==true&&flag==false){
          this.showmum=''
          this.DayPlanDetail=[]
          this.count=0
          this.page=1
          this.hasopen=false
        }else {
          Toast('出错了！');
        }
      },
      onClickLeft() {
        this.$router.push({path: '/NonBusinessLine/NonBusinessLineSearch'});
      },
      goDetail(val){
        this.$router.push({path: '/NonBusinessLine/NonBusinessLineSearchDetailList',query:{id:val.id}}); // 路由信息传值
      }
    }
  }
</script>

<style scoped>

  .van-col{
    height:44px;
    text-align: center;
    line-height: 44px;
  }

  /* 设置头部 style start */
  .van-nav-bar{
    background: #2196F3;
    color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
  /* 设置头部 style end */

  /* 内容区域 */
  .content{
    margin-top:44px;
    margin-bottom:60px;
    z-index: 1;
  }
  /* 每行加一个底边 */
  .van-row{
    padding-top: 1px;
    padding-bottom:1px;
    border-bottom:1px solid #ccc;
    background: #E5F2FA;
  }
  /* 去掉展开按钮的边框 */
  .van-button{
    top:-3px;
    background: #E5F2FA;
  }
  .van-button--default{
    border:none;
  }

</style>
