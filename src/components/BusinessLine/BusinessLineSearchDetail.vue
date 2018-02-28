<template>
  <div id="DayPlanCount">
    <van-nav-bar
      title="施工日计划详情"
      left-text="返回"
      @click-left="onClickLeft"

    ></van-nav-bar>
    <!--<van-row v-for="(name, index) in DayPlanCount">
      <div @click="getDayPlanDetail(name.date,index,true)">
      <van-col span="16">{{name.date}}</van-col>
      <van-col span="4" offset="4">{{name.count}}</van-col>
      </div>
    </van-row>-->

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
        <van-button type="default" @click="getDayPlanDetail(name.date,index,true)" v-show="!(index===showmum)"><van-icon name="add" /></van-button>
        <van-button type="default" @click="getDayPlanDetail(name.date,index,false)" v-show="index===showmum"><van-icon name="clear" /></van-button>
      </van-col>
      <div v-show="index===showmum">
        <van-steps direction="vertical"  active-color="#f60" v-waterfall-lower="loadMore(index)"
                   waterfall-disabled="disabled"
                   waterfall-offset="400">
          <!--<van-pull-refresh v-model="isLoading">-->
          <van-step v-for="(plan, index) in DayPlanDetail" >
            <h3>{{ "序号："+(index+1)}}</h3>
            <p>{{ "开始时间："+plan.kssjd}}</p>
            <p>{{ "项目名称："+plan.xmmc }}</p>
            <p>{{ "项目地点："+plan.dd }}</p>
            <p>{{ "日计划号："+plan.rjhh }}</p>
            <p>{{ "结束时间："+plan.jssjd }}</p>
          </van-step>
          <!--</van-pull-refresh>-->
        </van-steps>
      </div>
    </van-row>
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
        mc:'',
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
    /*created(){
      debugger
      var data=this.$store.getters.businessLineSearch
      this.getDayPlanCount(data)
    },*/
    mounted(){
      var data=this.$route.query
      this.xmmc=data.xmmc
      this.dj =data.dj
      this.xingbie=data.xingbie
      this.sglc=data.sglc
      this.mc=data.mc
      this.sglx=data.sglx
      this.sgksrq=data.sgksrq
      this.sgjsrq=data.sgjsrq
      this.getDayPlanCount()
    },
    watch: {
      $route: function (route) {
//        debugger
        var data = route.query;
        this.xmmc=data.xmmc
        this.dj=data.dj
        this.xingbie=data.xingbie
        this.sglc=data.sglc
        this.mc=data.mc
        this.sglx=data.sglx
        this.sgksrq=data.sgksrq
        this.sgjsrq=data.sgjsrq
        this.getDayPlanCount()
      },
    },
    methods: {
      loadMore(index){
//        debugger
        if(this.count>this.DayPlanDetail.length&&index===this.showmum){
          var url='http://whjjgc.r93535.com/DayPlanDetailSearchServlet?xmmc='+this.xmmc+'&sgksrq='+this.currenttime+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&page='+this.page+'&sglc='+this.sglc+'&baseuserid=102300&kssjd=&sgjsrq='+this.currenttime
          axios.get(url)
            .then(response => {
              var data=response.data.data
              for(var i in data) {
                this.DayPlanDetail.push(data[i])
                this.page=thid.page+1
              }
              this.disabled = false
              console.log(this.DayPlanDetail)
            }).catch(err => {
            console.error(err.message)
          })
        }
      },
      getDayPlanCount() {
//        debugger
        var url='http://whjjgc.r93535.com/DayPlanCountServlet?baseuserid=102300&xmmc='+this.xmmc+'&type=1&sgksrq='+this.sgksrq+'&sgjsrq='+this.sgjsrq+
          '&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&sglc='+this.sglc+'&kssjd=&page=0'
        axios.get(url)
          .then(response => {
//            debugger
            this.DayPlanCount  = response.data
          }).catch(err => {
          console.error(err.message)
        })
      },
      getDayPlanDetail(data,index,flag) {
        if(this.hasopen==false&&flag==true){
          this.currenttime=data
          var url='http://whjjgc.r93535.com/DayPlanDetailSearchServlet?xmmc='
            +this.xmmc+'&sgksrq='+data+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&page='+1+
            '&sglc='+this.sglc+'&baseuserid=102300&kssjd=&sgjsrq='+data
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
            var url='http://whjjgc.r93535.com/DayPlanDetailSearchServlet?xmmc='
              +this.xmmc+'&sgksrq='+data+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&page='+this.page+
              '&sglc='+this.sglc+'&baseuserid=102300&kssjd=&sgjsrq='+data
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
        /*this.$router.push({path: '/BusinessLine/Search'});
        Toast('返回');*/
        var slectProjectId=this.xmmc
        var slectProjectName=this.mc
        this.$router.push({path: '/BusinessLine/BusinessLineSearch',query:{slectProjectId:this.xmmc,slectProjectName:this.mc}});
      },
//      onClickRight() {
//        //this.$router.push({path: '/BusinessLine/Search'});
////        debugger
//        var slectProjectId=this.xmmc
//        var slectProjectName=this.mc
//        this.$router.push({path: '/BusinessLine/BusinessLineSearch',query:{slectProjectId:this.xmmc,slectProjectName:this.mc}});
//        //Toast('按钮');
//      }
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


</style>
