<template>
  <div id="DayPlanCount">
    <van-nav-bar
      title="临近营业线详情"
      left-text="取消"
      right-text="搜索"
      @click-left="onClickLeft"
      @click-right="onClickRight"
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
      <van-col span="6" offset="6">
        <h3>{{ name.count }}</h3>
      </van-col>
      <van-col span="2">
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
          <p>{{ "项目地点："+plan.sgdd }}</p>
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
          baseuserid:102300,
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
      created(){
        var data=this.$store.getters.nearBusinessLineSearch
        this.getCount(data)
      },
      methods: {
        loadMore(index){
          debugger
          if(this.count>this.DayPlanDetail.length&&index===this.showmum){
            var url='http://whjjgc.r93535.com/DayPlanDetailNearbySearchServlet?xmmc='+this.xmmc+'&sgksrq='+this.currenttime+'&page='+this.page+'&sgjsrq='+this.currenttime+'&baseuserid='+this.baseuserid+'&xb='+this.xingbie+'&lb='+this.sglx
            /*var url='http://whjjgc.r93535.com/DayPlanDetailSearchServlet?xmmc='+this.xmmc+'&sgksrq='+this.currenttime+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&page='+this.page+'&sglc='+this.sglc+'&baseuserid=236210&kssjd=&sgjsrq='+this.currenttime*/
            debugger
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
        getCount(data) {
          debugger
          console.log(data)
          this.xmmc=data.xmmc
          this.dj=data.dj
          this.xingbie=data.xingbie
          /*this.sglc=data.sglc*/
          this.sglx=data.sglx
          this.sgksrq=data.sgksrq
          this.sgjsrq=data.sgjsrq
          var url='http://whjjgc.r93535.com/DayPlanCountServlet?baseuserid='+this.baseuserid+'&xmmc='+this.xmmc+'&type=2&sgksrq='+this.sgksrq+'&sgjsrq='+this.sgjsrq+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&sglc=&kssjd=&page=0'
          axios.get(url)
            .then(response => {
              debugger
              this.DayPlanCount  = response.data
            }).catch(err => {
            console.log(err.message)
          })
        },
        getDayPlanDetail(data,index,flag) {
          if(this.hasopen==false&&flag==true){
            this.currenttime=data
            var url='http://whjjgc.r93535.com/DayPlanDetailNearbySearchServlet?xmmc='+this.xmmc+'&sgksrq='+data+'&page=1&sgjsrq='+data+'&baseuserid='+this.baseuserid+'&xb='+this.xingbie+'&lb='+this.sglx
            /*var url='http://whjjgc.r93535.com/DayPlanDetailSearchServlet?xmmc='
              +this.xmmc+'&sgksrq='+data+'&dj='+this.dj+'&xingbie='+this.xingbie+'&sglx='+this.sglx+'&page='+1+
              '&sglc='+this.sglc+'&baseuserid=236210&kssjd=&sgjsrq='+data*/
            debugger
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
              var url='http://whjjgc.r93535.com/DayPlanDetailNearbySearchServlet?xmmc='+this.xmmc+'&sgksrq='+data+'&page=1&sgjsrq='+data+'&baseuserid='+this.baseuserid+'&xb='+this.xingbie+'&lb='+this.sglx
              /*var url='http://whjjgc.r93535.com/DayPlanDetailSearchServlet?xmmc='
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
          this.$router.push({path: '/NearBusinessLine/Search'});
          Toast('返回');
        },
        onClickRight() {
          this.$router.push({path: '/NearBusinessLine/Search'});
          //Toast('按钮');
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

</style>
