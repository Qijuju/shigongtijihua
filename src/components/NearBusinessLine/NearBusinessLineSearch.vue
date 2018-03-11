<script src="../../../node_modules/vant/lib/datetime-picker/index.js"></script>
<template>
  <div id="search">
    <van-nav-bar
      title="临近营业线搜索"
      left-text="返回"
      right-text="搜索"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    </van-nav-bar>
    <div @click="isShowXMMC()">
      <van-row >
        <van-field
          v-bind:value="xmmc"
          label="项目名称"
          placeholder="全部"
          disabled
        />
      </van-row>
    </div>
    <div @click="isShowDJ()">
      <van-row >
        <van-field
          v-bind:value="dj"
          label="项目等级"
          placeholder="全部"
          disabled
        />
      </van-row>
    </div>
    <div @click="isShowXB()">
      <van-row >
        <van-field
          v-bind:value="xingbie"
          label="项目行别"
          placeholder="全部"
          disabled
        />
      </van-row>
    </div>
    <!--<div >
      <van-row >
        <van-field
          v-bind:value="sglc"
          label="施工里程"
          placeholder="请输入施工里程"
        />
      </van-row>
    </div>-->
    <div @click="startPicker">
      <van-row >
        <van-field
          v-bind:value="startDay"
          label="开始日期"
          disabled
        />
      </van-row>
    </div>
    <div @click="endPicker">
      <van-row >
        <van-field
          v-bind:value="endDay"
          label="结束日期"
          disabled
        />
      </van-row>
    </div>
    <van-row v-show="showxmmc">
      <van-col>
        <van-picker :columns="xmcolumns"
                    visible-item-count=3 v-bind:xmmc="xmmc" show-toolbar @cancel="closeAll"
                    @confirm="onXMConfirm"
        />
      </van-col>
    </van-row>
    <van-row v-show="showdj">
      <van-col>
        <van-picker :columns="djcolumns"
                    visible-item-count=3 v-bind:dj="dj" show-toolbar @cancel="closeAll"
                    @confirm="onDjConfirm"
        />
      </van-col>
    </van-row>
    <van-row v-show="showxingbie">
      <van-col>
        <van-picker :columns="xbcolumns"
                    visible-item-count=3 v-bind:xingbie="xingbie" show-toolbar @cancel="closeAll"
                    @confirm="onXBConfirm"
        />
      </van-col>
    </van-row>
    <van-row v-show="showsglx">
      <van-col>
        <van-picker :columns="sgcolumns"
                    visible-item-count=3 v-bind:xingbie="sglx" show-toolbar @cancel="closeAll"
                    @confirm="onSGConfirm"
        />
      </van-col>
    </van-row>
    <van-row v-show="showStartPicker">
      <van-col>
        <van-datetime-picker
          v-model="startDate"
          type="date"
          visible-item-count=3
          @confirm="startConfirm"
          @cancel="closeAll"
        />
      </van-col>
    </van-row>
    <van-row v-show="showEndPicker">
      <van-col>
        <van-datetime-picker
          v-model="endDate"
          type="date"
          visible-item-count=3
          @confirm="endConfirm"
          @cancel="closeAll"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { NavBar,Field,Picker,Radio,Toast,DatetimePicker  } from 'vant';
  import Vue from 'vue';
  import axios from 'axios';

  export default {
    name: "NearBusinessLineSearch",
    components: {
      NavBar,Field,Picker,Radio,Toast,DatetimePicker
    },
    data() {
      return {
        baseuserid:102300,
        //项目名称相关
        xmmc:'',
        xmmc_id:'',
        showxmmc:false,
        xiangmuServlet:[],
        xmcolumns:['全部'],
        //项目等级相关
        dj:'',
        dj_id:'',
        showdj:false,
        djcolumns:['全部','I级','II级','III级'],
        //行别相关
        xingbie:'',
        xingbie_id:'',
        xbcolumns:['全部','上行','下行','上下行','单线','站内','站内上行','站内下行'],
        showxingbie:false,
        //施工类型相关
        showsglx:false,
        sglx:'',
        sglx_id:'',
        sgcolumns:['全部','封锁','慢行','封锁+慢行','接触网停电','信号','其他','封锁+停电'],
        //施工里程相关
        /*sglc:'',*/
        //开始日期
        showStartPicker:false,
        startDate:new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        startDay: new Date().getFullYear()+(new Date().getMonth()>=9?"-":"-0")+(new Date().getMonth()+1)+"-01",
        //结束日期相关
        showEndPicker:false,
        endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
        endDay: new Date().getFullYear()+(new Date().getMonth()>=9?"-":"-0")+(new Date().getMonth()+1)+(new Date().getDate()>=9?"-":"-0")+new Date().getDate(),
      };
    },
    mounted: function() {
      this.getXiangmuServlet();
    },
    watch: {
      $route: function (route) {
        var query = route.query;
        this.xmmc=query.slectProjectName===undefined?'':query.slectProjectName
        this.xmmc_id=query.slectProjectId===undefined?'':query.slectProjectId
        /*this.startDate=new Date(query.date)
        this.startDay=query.date
        this.endDate=new Date(query.date)
        this.endDay=query.date*/
      },
    },
    methods: {
      closeAll(){
        this.showxmmc=false
        this.showdj=false
        this.showxingbie=false
        this.showsglx=false
        this.showStartPicker=false
        this.showEndPicker=false
      },
      closeOthers(value){
        if(value!='xmmc'){
          this.showxmmc=false
        }
        if(value!='dj'){
          this.showdj=false
        }
        if(value!='xingbie'){
          this.showxingbie=false
        }
        if(value!='sglx'){
          this.showsglx=false
        }
        if(value!='sgkarq'){
          this.showStartPicker=false
        }
        if(value!='sgjsrq'){
          this.showEndPicker=false
        }
      },
      getXiangmuServlet(){
        let url='http://tljjgxt.r93535.com/XiangmuServlet?orgid=265&baseuserid='+this.baseuserid;

        axios.get(url)
          .then(response => {
            this.xiangmuServlet = response.data;
            var data = this.xiangmuServlet
            for(var i in data) {
              this.xmcolumns.push(data[i].xmmc)
            }
          }).catch(err => {
          console.error(err.message)
        })
      },
      isShowXMMC(){
        this.closeOthers('xmmc')
        this.showxmmc=!this.showxmmc
      },
      onXMConfirm(value, index) {
        var data = this.xiangmuServlet
        for(var i in data) {
          if(index!=0){
            if(data[i].xmmc==value){
              this.xmmc=data[i].xmmc
              this.xmmc_id=data[i].id
            }
          }else{
            this.xmmc_id=''
            this.xmmc='全部'
          }
        }
        this.closeAll()
        // Toast(`当前值：${value}, 当前索引：${index}`);
      },
      isShowDJ(){
        this.closeOthers('dj')
        this.showdj=!this.showdj
      },
      onDjConfirm(value, index) {
        if(index!=0){
          this.dj_id=(index-1)
          this.dj=value
        }else{
          this.dj_id=''
          this.dj='全部'
        }
        this.closeAll()
      },
      isShowXB(){
        this.closeOthers('xingbie')
        this.showxingbie=!this.showxingbie
      },
      onXBConfirm(value, index) {
        if(index!=0){
          this.xingbie_id=(index-1)
          this.xingbie=value
        }else{
          this.xingbie_id=''
          this.xingbie='全部'
        }
        this.closeAll()
      },
      isShowSGLX(){
        this.closeOthers('sglx')
        this.showsglx=!this.showsglx
      },
      onSGConfirm(value, index) {
        if(index!=0){
          this.sglx_id=(index-1)
          this.sglx=value
        }else{
          this.sglx_id=''
          this.sglx='全部'
        }
        this.closeAll()
      },
      startPicker(){
        this.closeOthers('sgksrq')
        this.showStartPicker = !this.showStartPicker
      },
      startConfirm(){
        //Toast(`当前值：`+this.startDate);
        this.startDay = this.startDate.getFullYear()+(this.startDate.getMonth()>=9?"-":"-0")+(this.startDate.getMonth()+1)+(this.startDate.getDate()>9?"-":"-0")+this.startDate.getDate(),
          this.closeAll()
      },
      endPicker(){
        this.closeOthers('sgjsrq')
        this.showEndPicker = !this.showEndPicker
      },
      endConfirm(){
        //Toast(`当前值：`+this.startDate);
        this.endDay = this.endDate.getFullYear()+(this.endDate.getMonth()>=9?"-":"-0")+(this.endDate.getMonth()+1)+(this.endDate.getDate()>9?"-":"-0")+this.endDate.getDate(),
          this.closeAll()
      },
      onClickLeft() {
        this.$router.push({path: '/NearBusinessLine'});
      },
      onClickRight() {
        /*this.$store.commit('setNearBusinessLineSearch',{

        });
        this.$router.push({path: '/NearBusinessLine/Detail'});*/
        var query={
          xmmc:this.xmmc_id,
          mc:this.xmmc,
          dj:this.dj_id,
          xingbie:this.xingbie_id,
          /*sglc:this.sglc,*/
          sglx:this.sglx_id,
          sgksrq:this.startDay,
          sgjsrq:this.endDay,
        }
        this.$router.push({path: '/NearBusinessLine/NearBusinessLineSearchDetail',query:query});
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
  .van-picker{
    position: fixed;
    width: 100%;
  }
  .van-picker-column {
    font-size: 14px;
    text-align: left;
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
