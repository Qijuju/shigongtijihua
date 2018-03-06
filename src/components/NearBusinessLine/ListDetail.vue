<template>
  <div class="listDetail">
    <!--title-->
    <!--<Header title="邻近营业线施工日计划"></Header>-->
    <van-nav-bar title="邻近营业线施工日计划"
                 left-text="返回"
                 @click-left="onClickLeft"
                 fixed
    ></van-nav-bar>
    <!--内容-->
    <div class="content">
      <van-row>
        <van-col span="8">项目名称</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xmmc)'>{{totalData.xmmc}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工日期</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgrq)'>{{totalData.sgrq}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">类别</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.lb)'>{{totalData.lb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">线路</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xl)'>{{totalData.xl}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">行别</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xb)'>{{totalData.xb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工项目</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgxm)'>{{totalData.sgxm}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工地点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgdd)'>{{totalData.sgdd}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">开始时间点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.kssjd)'>{{totalData.kssjd}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">结束时间点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jjsjd)'>{{totalData.jjsjd}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="wordBreak">施工内容</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgnr)'>{{totalData.sgnr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工机械</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgjx)'>{{totalData.sgjx}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工单位负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgdwfzr)'>{{totalData.sgdwfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">设备监护单位及负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sbjhfzr)'>{{totalData.sbjhfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工配合通知书照片</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.phtzszp)'>{{totalData.phtzszp}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">监理单位及负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jldwfzr)'>{{totalData.jldwfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">建设单位及负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jsdwfzr)'>{{totalData.jsdwfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">备注</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.beizhu)'>{{totalData.beizhu}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">人员签到情况</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.ryqdb)'>{{totalData.ryqdb}}</span>
        </van-col>
      </van-row>
      <div class="img">
        <img class="photo" src="../../assets/images/icon/date.png" alt="">
        <img class="photo" src="../../assets/images/icon/date.png" alt="">
        <img class="photo" src="../../assets/images/icon/date.png" alt="">
        <img class="photo" src="../../assets/images/icon/date.png" alt="">
        <div class="addPhoto" @click='phoneOrPicture()'>+</div>
      </div>
      <van-row>
        <van-col span="8">计划兑换情况</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jhdxqk)'>{{totalData.jhdxqk}}</span>
        </van-col>
      </van-row>
      <br>
      <van-row>
        <van-col span="8">现场照片</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xczp)'>{{totalData.xczp}}</span>
        </van-col>
      </van-row>
      <div class="img">
        <img class="photo" src="../../assets/images/icon/date.png" alt="">
        <img class="photo" src="../../assets/images/icon/date.png" alt="">
        <img class="photo" src="../../assets/images/icon/date.png" alt="">
        <div class="addPhoto" @click='phoneOrPicture()'>+</div>
      </div>
      <van-row>
        <van-col span="8">签到时间</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.qdsj)'>{{totalData.qdsj}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">签到地点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.qddd)'>{{totalData.qddd}}</span>

          <button>获取</button>
          <button>刷新</button>
        </van-col>
      </van-row>
      <!--弹出层-->
      <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <p>{{popupTxt}}</p>
      </mt-popup>
      <!--相册、拍照选择-->
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible"
      >
      </mt-actionsheet>
    </div>
  </div>
</template>
<script>
  // 引入组件
  import Header from '../Common/Header'
  import $ from 'jquery'
  import { Dialog } from 'vant';
  //  import axios from 'axios';

  export default {
    name: "listDetail",
    components: {
      Header
    },
    data(){
      return{
        checked: true,
        baseuserid:102300,
        id:this.$route.query.id,// 获取通过路由传的值
        totalData:[],
        popupVisible:false,
        popupTxt:'',
        sheetVisible:false, // 隐藏拍照、相册选择框
        actions:[
          {
            name:'拍照',
            method :function () {
              console.log("拍照事件")
            }
          },
          {
            name:'从相册中选择',
            method :function () {
              console.log("从相册中选择事件")
            }
          }
        ]
      }
    },
    methods:{
      onClickLeft(){
        this.$router.push({path: '/NearBusinessLine'});
      },
      phoneOrPicture() { // 拍照或从相册中选择
        console.log("拍照或从相册中选择--点击事件进来了吗？");
        this.sheetVisible = true;
      },
      popupClick(txt) { // popup弹出层点击事件
        this.popupVisible = true;
        this.popupTxt = txt;
      },
      onInput(checked) {
        Dialog.confirm({
          title: '提醒',
          message: '是否切换开关？'
        }).then(() => {
          this.checked = checked;
        });
      },
      getData(){
        let vm = this;
        let url = 'http://whjjgc.r93535.com/LJYYXDayUniquePlanServlet?id='+vm.id+'&baseuserId='+vm.baseuserid;
        console.log("邻近营业线详情页请求的url："+url);
        vm.$http.get(url).then((response) => {
          console.log("详情页面的数据：" + JSON.stringify(response.data));
          vm.totalData = response.data;
        }, (response) => {
          console.log('error');
        });

      }
    },
    mounted:function () {
      this.getData(),
        $('.van-col.van-col-8').each(function (i) {
          var txtL=$($('.van-col.van-col-8')[i]).text().length;
          if(txtL>8){
            $($('.van-col.van-col-8')[i]).addClass('wordBreak')
          }else {
            $($('.van-col.van-col-8')[i]).removeClass('wordBreak')
          }
        })
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
  /* 照片 */
  .img{
    width:100%;
    height:100px;
    background: #a3f8ff;
  }
  img.photo{
    width: 50px;
    height:50px;
    margin:5px;
  }
  .addPhoto{
    display: inline-block;
    width:50px;
    height:50px;
    text-align: center;
    line-height:50px;
    background: #ccc;
    color: #9c9c9c;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size:30px;
    margin:5px;
    border:1px dashed #9c9c9c;
  }
  .content{
    margin-top:44px;
    margin-bottom:55px;
  }

  /* 修改栅格样式 */
  .van-row{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin-top:-1px;
  }
  .van-col{
    height:44px;
    padding:0;
    line-height:44px;
    /* 折行显示 */
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
  .van-col.wordBreak{
    line-height:22px;
  }
  /* @media screen and (min-width: 375px) {
     .van-col.wordBreak{
       line-height:44px;
     }
   }
   @media screen and (max-width: 375px) {
     .van-col.wordBreak{
       line-height:22px;
     }
   }*/


</style>
