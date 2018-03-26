<template>
  <div class="listDetail">

    <van-nav-bar title="非营业线施工日计划详情"
                 left-text="返回"
                 @click-left="$router.go(-1)"
                 right-text="关闭"  @click-right="onClickRight"
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

    <p hidden>{{storeXmId}}</p>
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
//          baseuserid:102300, // 基础平台登录人员id
          domainName:'tljjgxt.r93535.com', // 域名

//          id:this.$route.query.id,// 获取通过路由传的值
          id:this.$store.getters.nonBusinessLineSearch.xmId,// 获取通过路由传的值
          totalData:[], // 数据源
          popupVisible:false, // 弹出层显示隐藏控制
          popupTxt:'', // 弹出层内容

        }
      },
      computed:{
        storeXmId(){
          this.id = this.$store.getters.nonBusinessLineSearch.xmId;
          this.getData();
          return this.$store.getters.nonBusinessLineSearch.xmId; // 返回点击项目的id
        },
      },

      mounted:function () {
        this.getData();
      },
      methods:{

        //  关闭应用程序。调取JSAPI,关闭应用程序
        onClickRight(){
          RPM.closeApplication();
        },

        // 返回事件
        onClickLeft(){
          this.$router.push({path: '/NonBusinessLine'});
        },

        // popup弹出层点击事件
        popupClick(txt) {
          console.log("点击空格的内容为：" + txt);
          if (txt !=''){
            this.popupVisible = true;
            this.popupTxt = txt;
          }else {
            return;
          }
        },

        // 获取详情数据
        getData(){
          let vm = this;
          let url = 'http://tljjgxt.r93535.com/FYYXDayUniquePlanServlet?id='+ vm.id+'&baseuserId='+this._GLOBAL.baseUserId;

          console.log("非营业线请求的url:" + url);
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
  /* 设置表格title*/
  .getHeight{
    font-weight:bold;
  }
  /* 设置头部 style start */
  .van-nav-bar{
    background: #2196F3;
    color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff;
  }
  /* span 占满格*/
  .van-col.van-col-16>span{
    display: inline-block;
    width:100%;
    height:100%;
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

</style>
