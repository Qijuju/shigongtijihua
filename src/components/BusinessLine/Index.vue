<template>
  <div class="index">
    <van-nav-bar title="营业线施工日计划" fixed></van-nav-bar>
    <!--搜索栏-->
    <div class="search">
      <van-row>
        <van-col span="6" ><span v-on:click="goSearchPage(calendar.value,selectProjectObj.id,selectProjectObj.xmmc)">搜索</span></van-col>
        <van-col span="12">{{selectProjectObj.xmmc}}</van-col>
        <van-col span="6" class="chooseBtn">
          <van-button type="primary">
            <div class="flex">
              <input type="text"  @click="openByDrop($event)" v-model="calendar.display" readonly>
            </div>
          </van-button>
        </van-col>
      </van-row>
      <!--日历-->
      <div class="days_box">
        <!--<Days></Days>-->
        <div id="wrap">
          <div id="innerWrap" :style="{'width':days2.length*66+'px'}">
            <div class="scroll" v-for="(item ,index) in days2" @click="dayClick(index,item)">
              <p class="dateDetail">
                <span class="num">{{item.day}}</span>
                <span class="china">{{item.weekDay}}</span>
              </p>
              <p class="scrollBar bg" v-if="item.showBg"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="calendar-dropdown" :style="{'left':calendar.left+'px','top':calendar.top+'px','z-index':calendar.zIndex,'height':calendar.height+'px'}" v-if="calendar.show">
      <!--<div class="calendar-dropdown" :style="{'left':calendar.left+'px','top':calendar.top+'px','z-index':calendar.zIndex}" v-if="calendar.show">-->
        <calendar :zero="calendar.zero" :lunar="calendar.lunar" :value="calendar.value" :begin="calendar.begin" :end="calendar.end" @select="calendar.select"></calendar>
      </div>
    </transition>
    <!--<transition name="fade">-->
      <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :infiniteLoading='infiniteLoading' :loading ='loading'>
        <div class="list" >
            <div v-for="item in listdata.data" >
              <p>{{item.kssjd}}</p>
              <van-steps direction="vertical">
                <van-step v-for="planItem in item.list">
                  <div @click="goDetail(planItem)">
                    <p class="jssjd_rjhh clearfix">
                      <span class="jssjd">{{planItem.jssjd}}</span>
                      <span class="rjhh">{{planItem.rjhh}}</span>
                    </p>
                    <p>{{planItem.xmmc}}-{{planItem.id}}</p>
                    <p>{{planItem.dd}}</p>
                  </div>
                </van-step>
              </van-steps>
            </div>
        </div>
      </v-scroll>
    <!--</transition>-->
    <!--项目选择-->
    <div id="projectAnimation">
      <div id="project">
        项目
      </div>
      <div id="projectList">
        <SelectProject v-if="projects" :projects="projects" :count="projects.length"></SelectProject>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from "jquery"
  import axios from 'axios';
  import Header from '../Common/Header'
  import SearchIndex from '../Common/SearchIndex.vue'
  import calendar from '../Common/calendar'
  import Days from '../Common/Days'
  import SelectProject from '../Common/SelectPeoject'
  import Scroll from '../Common/PullRefresh';

  var date=new Date();
  var y = date.getFullYear();
  var m = (date.getMonth()+1)>9?(date.getMonth()+1):'0'+(date.getMonth()+1);
  var d = date.getDate() >9?date.getDate():'0'+date.getDate();

  var dateS=y+'/'+m ;

  export default {
    name: "index",
    components: {
      SearchIndex,
      Header,
      calendar,
      Days,
      SelectProject,
      'v-scroll': Scroll
    },
    data(){
      return{
        infiniteLoading:false,
        baseuserid:102300,
        loading:'加载中......',
        page:1,
        sgrq: new Date().getFullYear()+(new Date().getMonth()>=9?"-":"-0")+(new Date().getMonth()+1)+(new Date().getDate()>=9?"-":"-0")+new Date().getDate(),
        show:false,
        days:[],
        projectCount:0,
        year:0,
        month:0,
        day:0,
        leftVal:0,
        counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
        num : 10,  // 一次显示多少条
        listdata: [], // 下拉更新数据存放数组
        projectName:'武汉铁路局',
        width: 15 * 56, // 设置滚动日历最外层盒子的宽度为屏幕宽度
        projects:[],
        calendar:{
          display:dateS,//默认显示当天日期
          show:false, // 显示隐藏
          zero:true, // 是否补零
          test:100,
          value:[y,m,d], //  打开的日历默认选中的时间
          lunar:true, //显示农历
          select:(value)=>{ // 当选中日历上的某一天时，触发的事件
            console.log("选中的某一天："+JSON.stringify(value));
            this.sgrq = value[0]+'-'+value[1]+'-'+value[2];
            this.getList(); // 选择完日期重新请求数据
            console.log("组合日期："+this.sgrq);
            value.pop(); // 删除‘天’\
            this.setStore(value); // 将选中的日期存储到store中
            this.calendar.show=false;
            this.calendar.value=value;
            this.calendar.display=value.join("/");


          }
        }
      }
    },
    computed:{
      selectProjectObj() { //businessLineSelectProjectName
        return this.$store.getters.selectProjectObj// 时时获取选中项目的名称
      },
      daysIndex(){
        var date=new Date();
        var y = date.getFullYear();
        var m = (date.getMonth()+1)>9?(date.getMonth()+1):'0'+(date.getMonth()+1);
        var d = date.getDate() >9?date.getDate():'0'+date.getDate();
        var dateS=[y,m,d];

        d = (this.$store.getters.businessLineSearch.daysIndex+1);

        return this.$store.getters.businessLineSearch.daysIndex
      },
//      日期控件
      days2() {
        this.days = this.$store.getters.daysObj;
        this.projectCount = this.$store.getters.count;
        return this.$store.getters.daysObj// 时时获取变化的数据
      },

      scrollLeft(){
        var left = 0;
        var count = this.$store.getters.projectCount;
        var scrollLeft = this.$store.getters.scrollLeft;
        var screenW = $(window).width(); // 获取屏幕的宽度

        left = parseInt(screenW/2) - this.$store.getters.scrollLeft;
        if (scrollLeft<=parseInt(screenW/2)){
          left=0;
        }

        if (this.$store.getters.scrollLeft > count*66+33-parseInt(screenW)){
          left = parseInt(screenW)-count*66;
        }
        return left;
      }
    },
    mounted:function () {
      this.selectProShowOrHidden();
      this.getProjects(); // 项目数据源
      this.getList();
    },
    created:function () {  // 将日历提交到store中
      this.$store.commit('setProjectCount',{count:getDaysInOneMonth(this.calendar.value[0],this.calendar.value[1]),year: this.calendar.value[0],month: this.calendar.value[1],day:this.calendar.value[2]});
      this.$store.commit('setBusinessLineSelectProjectCount',{count:this.projects.length });

    },
    methods:{
      setStore(value){
        this.$store.commit('setProjectCount',{count:getDaysInOneMonth(value[0],value[1]),year: value[0],month: value[1],day:value[2]})
      },

      // 获取列表首页数据
      getList(){
        let vm = this;
        // 测试用
//        vm.sgrq='2018-02-28';

        let url = 'http://whjjgc.r93535.com/DayPlanDetailServlet?page='+vm.page+'&baseuserid='+vm.baseuserid+'&sgrq='+vm.sgrq;

        console.log("营业线首页数据源请求url："+url);
        vm.$http.get(url).then((response) => {

          vm.listdata = response.data;

          console.log("营业线首页列表数据："+JSON.stringify(vm.listdata));

          if (response.data.thiscount< 10){
            this.infiniteLoading =  true;
            this.loading = '没有更多数据了'
          }
        }, (response) => {
          console.log('error');
        });
      },

      // 刷新首页第一页数据
      onRefresh(done) {
        this.getList();
        done() // call done
      },

      // 列表数据加载更多
      onInfinite(done) {
        let vm = this;
        vm.counter++;
        let url = 'http://whjjgc.r93535.com/DayPlanDetailServlet?page='+vm.counter+'&baseuserid='+this.baseuserid+'&sgrq='+vm.sgrq;
        vm.$http.get(url).then((response) => {
          let arr = response.data.data;

          if (response.data.thiscount< 10){
            this.infiniteLoading =  true;
            this.loading = '没有更多数据了'
          }

          // 将新的数据源追加都数据源列表中
          if(arr!==''&&arr!==null&&arr!==undefined){
            for(var i=0;i<arr.length;i++){
              let obj={};
              obj["kssjd"] = arr[i].kssjd;
              obj["list"] = arr[i].list;
              vm.listdata.data.push(obj);
            }
          }else {
            return;
          }
          done() // call done
        }, (response) => {
          console.log('error');
        });
      },

      // 跳转到搜索页面
      goSearchPage(date,slectProjectId,selectProjectName){
        this.$router.push({path: '/BusinessLine/BusinessLineSearch',query:{date:date.join('-'),slectProjectId:slectProjectId,slectProjectName:selectProjectName}});
      },

      // 跳转到详情页
      goDetail(planItem){
        this.$router.push({path: '/BusinessLine/Detail',query:{id:planItem.id}}); // 路由信息传值
      },

      // 获取可选项目列表数据
      getProjects(){
        axios.get('http://whjjgc.r93535.com/XiangmuServlet?orgid=265&baseuserid='+this.baseuserid)
          .then(response => {
            // 接收响应数据
            this.projects = response.data;

          }).catch(err => {
          console.error(err.message)
        })
      },

      // 底部'项目'的显示和隐藏
      selectProShowOrHidden(){
        var isOpen=false;
        var projectAnimation = document.getElementById("projectAnimation");

        projectAnimation.addEventListener("click", function(){
          isOpen =!isOpen;
          if(isOpen){ // 打开时
            this.className = 'animated jello';
            $('#projectList').height('100px');
          }else { // 关闭时
            this.className = 'animated jello';
            $('#projectList').height('0px');
          }
        }, false);

        projectAnimation.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
          this.className ='';
        }, false);
      },

      //日历控件的事件
      openByDrop(e){
        this.calendar.show=true;
        this.calendar.left=0;
        this.calendar.top=91;
        this.calendar.zIndex=6; // 设置显示层级

        var h=document.documentElement.clientHeight-140;

        this.calendar.height=h;

        e.stopPropagation();
        window.setTimeout(()=>{
          document.addEventListener("click",(e)=>{
            this.calendar.show=false;
            document.removeEventListener("click",()=>{},false);
          },false);
        },1000)
      },

      // 点击事件
      dayClick(index,item) { // index 为下标值
        let vm = this;
        var clickDay =item.day>9?item.day:'0'+item.day;
        vm.sgrq = vm.calendar.value[0]+'-'+vm.calendar.value[1]+'-'+clickDay;

//        重新调取数据，刷新列表数据
        this.getList();

        this.$store.commit('setDaysIndex',{daysIndex:index});

        var screenW = $(window).width(); // 获取屏幕的宽度
        var w=this.days.length*66;
        var maxScrollD=screenW-w;
        $("#wrap").width(screenW);// 设置外层盒子宽度==屏幕宽度

        // 1.获取触屏的位置
        var e=e||window.event;
        var touchPosition=e.pageX; // 触点位置为：距离屏幕最左边的距离

        var leftD=$('#innerWrap').offset().left-(touchPosition-parseInt(screenW/2));

        $("#innerWrap").offset({top:90,left:leftD}); // 设置innerWrap的左偏移量

        if ($('#innerWrap').offset().left < maxScrollD){
          $("#innerWrap").offset({top:90,left:maxScrollD});
        }

        if ($('#innerWrap').offset().left >=0){
          $("#innerWrap").offset({top:90,left:0});
        }

        // 选中的添加滑条，其他的删除滑条
        for(var i=0;i<this.days.length;i++){
          this.days[i].showBg = i===index?true:false;
        }
      }
    }
  }

    // 定义一个函数:获取某个月的天数
    function getDaysInOneMonth(year, month){
      month = parseInt(month, 10);
      var d= new Date(year, month, 0);
      return d.getDate();
    }

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
  .van-button--normal{
    padding:0px;
  }
  /* 列表：重写UI库样式*/
  .van-step{
    color: #000;
  }
  .jssjd_rjhh{
    color:#999;
  }
  .jssjd_rjhh > .jssjd{
    float: left;
  }
  .jssjd_rjhh > .rjhh{
    float: right;
  }

  /* 项目 */
  #projectAnimation{
    position: fixed;
    left:0;
    bottom:50px;
    width:100%;
    background: #E5F2FA;
    z-index: 5;
  }
  #project{
    position: relative;
    top:-10px;
    width:80px;
    height:20px;
    text-align: center;
    line-height:20px;
    margin:0 auto;
    background: #E5F2FA;
    -webkit-border-radius: 20px 20px 0 0;
    -moz-border-radius: 20px 20px 0 0;
    border-radius: 20px 20px 0 0;
  }
  #projectList{
    width:100%;
    height:0px;
  }

  #projectList.show{
    animation:projectListShowAnim 1s;
    -moz-animation:projectListShowAnim 1s; /* Firefox */
    -webkit-animation:projectListShowAnim 1s; /* Safari and Chrome */
    -o-animation:projectListShowAnim 1s; /* Opera */
    animation-fill-mode:forwards;
  }
  #projectList.hidden{
    animation:projectListHiddenAnim 1s;
		-moz-animation:projectListHiddenAnim 1s; /* Firefox */
		-webkit-animation:projectListHiddenAnim 1s; /* Safari and Chrome */
		-o-animation:projectListHiddenAnim 1s; /* Opera */
    animation-fill-mode:forwards;
  }
  @keyframes projectListShowAnim
  {
    0%   {
      heigth:0;
    }
    50%{
      height:50px;
    }
    100% {
      height:100px;
    }
  }
  @keyframes projectListHiddenAnim
  {
    0%   {
      heigth:120px;
    }
    50%{
      height:50px;
    }
    100% {
      height:0px;
    }
  }
  /*scroll组件*/
  .days_box{
    height:46px;
    border-top:1px solid #ccc;
    margin-top:1px;
  }
  /* 日期按钮chooseBtn */
  .van-button{
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    /*margin-top:-3px;*/

  }
  /* 规定头部，包括：标题、搜索、时间栏 */
  .search{
    position: fixed;
    top:46px;
    left:0px;
    width:100%;
    z-index:3;
    background: #E5F2FA;
  }
  .list{
    margin-top:40px;
  }

  /* 修改tabbar和内容显示区域的显示层级 */
  /*.van-tabbar--fixed{*/
    /*z-index: 5;*/
  /*}*/
  /* 栅格样式 */
  .van-col{
    height: 44px;
    text-align: center;
    line-height: 44px;
    padding:0;
  }
  .van-col:nth-child(2){
    border-left:1px solid #D1CFD0;
    border-right:1px solid #D1CFD0;
  }
  p{
    text-align: left;
    padding-left:10px;
  }

  /*日历空间 style  start */
  /*demo*/
  .flex{
    box-sizing: border-box;

    display: -webkit-box;
    -webkit-box-pack: start;
    -webkit-box-align: start;

    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: top;

    display: flex;
    justify-content: space-between;
    align-items: top;
    flex-flow:row wrap
  }
  .flex>div{
    margin:10px;
    padding:20px;
    width:25%;
    min-width:300px;
    border: 1px solid #eee;
    border-radius: 2px;
    position: relative;
  }
  .flex>div>span{
    position: absolute;
    left:0px;
    top:0px;
    padding:5px 10px;
    font-family: "PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size:10px;
    border-radius:0 0 2px 0;
    background:#ea6151;
    color:#fff;
  }
  .flex>div>input{
    box-sizing: border-box;
    width:100%;
    margin-top:20px;
    border-radius: 2px;
    border:1px solid #dedede;
    padding:10px;
    font-size: 16px;
    background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwpAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGlmb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUuZW90PyNpZWZpeCIpIGZvcm1hdCgiZW1iZWRkZWQtb3BlbnR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0NDIzNzM4OTZfNDc1NDQ1NS53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUudHRmIikgZm9ybWF0KCJ0cnVldHlwZSIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LnN2ZyNpZm9udCIpIGZvcm1hdCgic3ZnIik7IH0KCl1dPjwvc3R5bGU+PC9kZWZzPjxnIGNsYXNzPSJ0cmFuc2Zvcm0tZ3JvdXAiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMC4wMTU2MjUsIDAuMDE1NjI1KSI+PHBhdGggZD0iTTcxMS4zMDYyIDI5MC42OTcyYzI0LjI4MjEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTU0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMjYgMC00My45ODggMTkuNzI4NC00My45ODggNDQuMDUzNXYyMDAuMTA0OTZDNjY3LjMxODMgMjcwLjk5MDMgNjg3LjAwMzYgMjkwLjY5NzIgNzExLjMwNjIgMjkwLjY5NzJ6TTYyMy40ODA4IDExMy40MjAzSDQwMC43NjQ5Mjh2NjYuNTEzOTJoMjIyLjcxNTkwNDAwMDAwMDAyVjExMy40MjAyODh6TTg4NC4wNTMgMTEzLjQyMDNoLTgyLjc3NDAxNnY2Ni4xNDUyOGg4NS45NDAyMjRjMjUuMjc4NSAwIDQ2LjYxMTUgMjEuMzc2IDQ2LjYxMTUgNDYuNjc3djE1My45Mjc2OEg5MC40Mzg2NTYwMDAwMDAwMXYtMTUzLjkyNzY4YzAtMjUuMyAyMS4zMzMtNDYuNjc3IDQ2LjYxMTUtNDYuNjc3aDg2LjUwMzQyNFYxMTMuNDIwMjg4aC04Mi42NDI5NDRjLTY0LjA4NiAwLTExNi41MDc2IDUyLjUwODctMTE2LjUwNzYgMTE2LjcwMzJ2Njc2LjgwMTUzNTk5OTk5OTljMCA2NC4xNzQxIDUwLjQ5MTQgMTE2LjY4MDcgMTE0LjU3NzQgMTE2LjY4MDdIODg0LjA1Mjk5MmM2NC4wNjI1IDAgMTE2LjUwNjYtNTIuNTA2NiAxMTYuNTA2Ni0xMTYuNjgwN1YyMzAuMTIzNTE5OTk5OTk5OThDMTAwMC41NTk2IDE2NS45MjkgOTQ4LjExNDQgMTEzLjQyMDMgODg0LjA1MyAxMTMuNDIwM3pNOTMzLjgyOTYgOTEwLjM1MTRjMCAyNS4zLTIxLjMzMyA0Ni42NzYtNDYuNjExNSA0Ni42NzZIMTM3LjA1MDExMTk5OTk5OTk4Yy0yNS4yNzg1IDAtNDYuNjExNS0yMS4zNzYtNDYuNjExNS00Ni42NzZWNDQ2LjQ0NTU2OEg5MzMuODI5NjMyVjkxMC4zNTEzNnpNMjY3LjEwODQgNjQ2LjE4MTljMzYuODc3MyAwIDY2Ljc1MjUtMjkuOTM5NyA2Ni43NTI1LTY2Ljg4MTUgMC0zNi45MjI0LTI5Ljg3NTItNjYuODYxMS02Ni43NTI1LTY2Ljg2MTEtMzYuODU0OCAwLTY2Ljc1MjUgMjkuOTM5Ny02Ni43NTI1IDY2Ljg2MTFDMjAwLjM1NTggNjE2LjI0MjIgMjMwLjI1MjUgNjQ2LjE4MTkgMjY3LjEwODQgNjQ2LjE4MTl6TTUxMS41NDg0IDY0Ni4xODE5YzM2Ljg1NTggMCA2Ni43NTI1LTI5LjkzOTcgNjYuNzUyNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTU3LTY2Ljg2MTEtNjYuNzUyNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzQ0NC43OTU5IDYxNi4yNDIyIDQ3NC42NzExIDY0Ni4xODE5IDUxMS41NDg0IDY0Ni4xODE5ek0yNjUuOTE2NCA4OTAuNzA5YzM2Ljg3NzMgMCA2Ni43NTE1LTI5LjkzOTcgNjYuNzUxNS02Ni44NjExIDAtMzYuOTQyOC0yOS44NzQyLTY2Ljg4MjYtNjYuNzUxNS02Ni44ODI2LTM2Ljg1NTggMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44ODI2QzE5OS4xNjM5IDg2MC43NjkzIDIyOS4wNTk2IDg5MC43MDkgMjY1LjkxNjQgODkwLjcwOXpNNTExLjU0ODQgODkwLjcwOWMzNi44NTU4IDAgNjYuNzUyNS0yOS45Mzk3IDY2Ljc1MjUtNjYuODYxMSAwLTM2Ljk0MjgtMjkuODk1Ny02Ni44ODI2LTY2Ljc1MjUtNjYuODgyNi0zNi44NzczIDAtNjYuNzUyNSAyOS45Mzk3LTY2Ljc1MjUgNjYuODgyNkM0NDQuNzk1OSA4NjAuNzY5MyA0NzQuNjcxMSA4OTAuNzA5IDUxMS41NDg0IDg5MC43MDl6TTc1NS42NDEzIDY0Ni4xODE5YzM2Ljg1NjggMCA2Ni43NTM1LTI5LjkzOTcgNjYuNzUzNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTY3LTY2Ljg2MTEtNjYuNzUzNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzY4OC44ODk5IDYxNi4yNDIyIDcxOC43NjQgNjQ2LjE4MTkgNzU1LjY0MTMgNjQ2LjE4MTl6TTMxMS43MDM2IDI5MC42OTcyYzI0LjI4MTEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTQ0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMTYgMC00My45ODkgMTkuNzI4NC00My45ODkgNDQuMDUzNXYyMDAuMTA0OTZDMjY3LjcxNDYgMjcwLjk5MDMgMjg3LjQwMiAyOTAuNjk3MiAzMTEuNzAzNiAyOTAuNjk3MnoiIGZpbGw9IiM1ZTdhODgiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==) no-repeat 8px 10px;
    padding-left: 36px;
    color:#666;
  }
  /* 优化日期输入框 start */
  .flex{
    width:100%;
    height:100%;
  }
  .flex input{
    border:none;
    background: transparent;
    display: block;
    width:100%;
    height:44px;
    text-align: center;
  }
  /* 优化日期输入框 start */

  /*transition*/
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease-in-out;
  }
  .fade-enter,.fade-leave-active{
    opacity: 0;
    transform: translateY(-10px);

  }

  /*下拉框*/
  .calendar-dropdown{
    background: rgba(0,0,0,.5);
    position: absolute;
    left:0;
    top:0;
    border: 1px solid #eee;
    border-radius: 2px;
    /*控制日期表格显示的宽度=100%*/
    width:100%;
    /*height:800px;*/
  }
  /*弹出框*/
  .calendar-dialog{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
  }

  .calendar-dialog-mask{
    background:rgba(255,255,255,.5);
    width:100%;
    height:100%;
  }

  .calendar-dialog-body{
    background: #fff;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
  }
  /* 日历控件 style end */


  /*days 日期控件*/
  #wrap{
    position: relative;
    top: 0px;
    left:0;
    height:46px;
    margin:0 auto;
    overflow: scroll;
    z-index: 99;
    overflow: scroll;
    background: #E5F2FA;
  }
  #innerWrap{
    position: absolute;
    height:100%;
    overflow: scroll;
  }
  #innerWrap .scroll{
    position: relative;
    display: inline-block;
    width:66px;
    height:44px;
    text-align: left;
    line-height:44px;
  }
  #innerWrap .scroll:first-child{
    margin-left:0px;
  }
  #innerWrap .scroll > .daysList{
    display: inline-block;
    color: #2196F3;
    width:56px;
    height:100%;
  }
  p.dateDetail{
    width:100%;
    /*height:22px;*/
    height:44px;
    text-align: center;
    /*line-height:22px;*/
    line-height:44px;
    padding:3px;
    color: #2196F3;
  }
  p.dateDetail > .num{
    font-size:16px;
  }
  p.dateDetail > .china{
    font-size:12px;
  }
  /* 隐藏滚动条 */
  ::-webkit-scrollbar{
    display:none;
  }
  #innerWrap .scroll .bg{
    position: absolute;
    left:0;
    bottom:-2px;
    width:100%;
    height:2px;
    background: #2196F3;
  }


</style>
