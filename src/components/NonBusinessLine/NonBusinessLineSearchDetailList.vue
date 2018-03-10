<template>
  <div class="listDetail">

    <van-nav-bar title="非营业线施工日计划"
                 left-text="返回"
                 @click-left="onClickLeft"
                 fixed
    ></van-nav-bar>

    <div class="content">
      <van-row>
        <van-col span="8" class="getHeight">项目名称</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xmmc)' v-html="totalData.xmmc"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工日期</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgrq)' v-html="totalData.sgrq"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工地点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgdd)' v-html="totalData.sgdd"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工项目</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgxm)' v-html="totalData.sgxm"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">开始时间点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.kssjd)' v-html="totalData.kssjd"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">结束时间点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jssjb)' v-html="totalData.jssjb"></span>
        </van-col>
      </van-row>
      <van-row>
        <!--<van-col span="8" class="wordBreak">施工内容</van-col>-->
        <van-col span="8" class="getHeight">施工内容</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgnr)' v-html="totalData.sgnr"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工机械</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgjx)' v-html="totalData.sgjx"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工单位及带班领导</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgdwdbld)' v-html="totalData.sgdwdbld"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工架子队</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgjzd)' v-html="totalData.sgjzd"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">监理单位及现场监理</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jldwxcjl)' v-html="totalData.jldwxcjl"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">建设单位包保人员</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jsdwbbry)' v-html="totalData.jsdwbbry"></span>
        </van-col>
      </van-row>

      <!--弹出层-->
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <p>{{popupTxt}}</p>
      </mt-popup>

    </div>
  </div>
</template>
<script>
  // 引入组件
  import $ from 'jquery'
  import { Dialog } from 'vant';

    export default {
      name: "listDetail",
      data(){
        return{
          baseuserid:102300, // 基础平台登录人员id
          id:this.$route.query.id,// 获取通过路由传的值
          totalData:[], // 数据源
          popupVisible:false, // 弹出层显示隐藏控制
          popupTxt:'', // 弹出层内容

        }
      },
      mounted:function () {
        this.getData();
      },
      methods:{
        // 返回事件
        onClickLeft(){
          this.$router.push({path: '/NonBusinessLine/NonBusinessLineSearchDetail'});
        },

        // popup弹出层点击事件
        popupClick(txt) {
          this.popupVisible = true;
          this.popupTxt = txt;
        },

        // 获取详情数据
        getData(){
          let vm = this;
          let url = 'http://whjjgc.r93535.com/FYYXDayUniquePlanServlet?id='+ vm.id+'&baseuserId='+this.baseuserid;
          vm.$http.get(url).then((response) => {

            // 请求成功返回数据
            vm.totalData = response.data;

            /* 表格渲染:动态设置第二列的高度 */
            this.$nextTick(function(){
              console.log("$nextTick监听数据渲染完成之后的回调函数");
              var obj = $(".getHeight");
              for(var i=0;i<obj.length;i++){
                var h=$(obj[i]).height();
                $(obj[i]).siblings().css({
                  'height':h+'px',
                  'lineHeight':h+'px'
                });
              }
            })

          }, (response) => {
            console.log('error');
          });

        }
      }
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
  /* popup */
  .mint-popup{
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding:5px;
  }
  .content{
    margin-top:44px;
    margin-bottom:50px;
  }

  /* 修改栅格样式 */
  .van-row{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin-top:-1px;
  }
  .van-col{
    padding:0;
    line-height:30px;
    padding:5px;
    white-space: normal;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-all;
  }
  .van-col:nth-child(odd){
    background: #E5F2FA;
    border-right:1px solid #ccc;
    text-align: center;
  }
  .van-col:nth-child(even){
    border-right:1px solid #ccc;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  /* 折行显示 */
  /*.van-col.wordBreak{*/
    /*line-height:22px;*/
  /*}*/


</style>
