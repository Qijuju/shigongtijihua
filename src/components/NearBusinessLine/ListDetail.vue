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
          <span @click='popupClick(totalData.jssjd)'>{{totalData.jssjd}}</span>
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
          <!--<img width="90%" height="80%" style="margin-left: 5%;" v-bind:src="totalData.phtzszp" alt="通知书照片">-->
          <img width="90%" height="80%" style="margin-left: 5%;" src="" alt="通知书照片" v-on:click="showBigImage($event)"/>
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
        <van-col span="24">人员签到情况</van-col>
        <!--<van-col span="16">-->
          <!--<span @click='popupClick(totalData.ryqdb)'>{{totalData.ryqdb}}</span>-->
        <!--</van-col>-->
      </van-row>
      <div class="img">

        <!--写死的数据-->
        <!--<img class="photo" src="../../assets/images/icon/qdb.jpg" alt="pictures" width="90%" height="80%" style="margin-left: 5%;" v-on:click="showBigImage($event)"/>-->

        <!--绑定动态图片资源-->
        <div v-for="path in ryqdqkImgArr" class="photoBox">
          <img class="photo" :src="path" alt="logo" v-on:click="showBigImage($event)"/>
        </div>
        <!--编辑权限问题 -->
        <!--<div class="addPhoto" @click='phoneOrPicture()' v-if="totalData.editStatus===1" >+</div>-->
        <!--测试用-->
        <div class="addPhoto" @click='takePicture(1)' >+</div>
      </div>
      <van-row>
        <van-col span="8">计划兑换情况</van-col>
        <van-col span="16">

          <input type="text" @click='popupClick(totalData.jhdxqk)'v-model="totalData.jhdxqk" v-if="totalData.editStatus===1">
          <input type="text" @click='popupClick(totalData.jhdxqk)'v-model="totalData.jhdxqk" v-else readonly>

        </van-col>
      </van-row>
      <br>
      <van-row>
        <van-col span="24">现场照片</van-col>
      </van-row>
      <div class="img">
        <!--写死的数据-->
        <!--<img class="photo" src="../../assets/images/icon/timg.jpg" alt="pictures" width="90%" height="80%" style="margin-left: 5%;" v-on:click="showBigImage($event)"/>-->

        <!--绑定动态图片资源-->
        <div v-for="path in xczpImgArr" class="photoBox">
          <img class="photo" :src="path" alt="logo"  v-on:click="showBigImage($event)"/>
        </div>

        <!--编辑权限-->
        <!--<div class="addPhoto" @click='phoneOrPicture()' v-if="totalData.editStatus===1" >+</div>-->
        <!--测试用-->
        <div class="addPhoto" @click='takePicture(2)' >+</div>
      </div>
      <van-row>
        <van-col span="8">签到时间</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.qdsj)'>{{totalData.qdsj}}</span>
          <!--权限-->
          <!--<button @click="getCurrentTime()" v-if="totalData.editStatus===1">获取当前时间</button>-->
          <!--无权限-->
          <button @click="getCurrentTime()">获取当前时间</button>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">签到地点</van-col>
        <van-col span="16">

          <span @click='popupClick(totalData.qddd)'>{{totalData.qddd}}</span>

          <!--权限-->
          <!--<button @click="getCurrentPositionInfo()" v-if="totalData.editStatus===1">获取当前位置</button>-->

          <!--没有权限-->
          <button @click="getCurrentPositionInfo()">获取当前位置</button>

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

      <div id="save" @click="save()">保存</div>
    </div>

    <!--预览图片的盒子-->
    <div id="showBigImage" v-if="showBigImage" @click="showBigImageBox($event)" v-bind:style="{height:setHeight+'px'}">
      <!--<img  src="../../assets/images/sgrjhImages/search.png" alt="">-->
      <img  v-bind:src="previewPicSrc" alt="">
    </div>

  </div>
</template>
<script>
  // 引入组件
  import Header from '../Common/Header'
  import $ from 'jquery'
  import { Dialog } from 'vant';
    import axios from 'axios';

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

        xczp:[],
        ryqdqkImgArr:[], // 人员签到情况图片集合
        xczpImgArr:[],  // 现场照片集合

        previewPicSrc:'', // 预览图片的src
        setHeight:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,/// 设置预览图片的盒子的高度=屏幕可视区域的高度

        sheetVisible:false, // 隐藏拍照、相册选择框
        actions:[
//          {
//            name:'拍照',
//            method :function () {
//              console.log("拍照事件")
//            }
//          },
//          {
//            name:'从相册中选择',
//            method :function () {
//              console.log("从相册中选择事件")
//            }
//          }
        ]
      }
    },
    methods:{
      // JSAPI 函数调用  获取位置信息
      getCurrentPositionInfo(){
        RPM.getCurrentPositionInfo();
      },
      // 获取位置信息的回调函数（ios、android和js交互）
      RPMPositionCallBack:function (params) {
        this.totalData.qddd=params;
      },
      // 预览图片
      showBigImageBox(event){
        var el = event.currentTarget;
        $(el).hide();
      },
      showBigImage(event){
        //获取点击对象
        var el = event.currentTarget;

        // 当前点击的src
        this.previewPicSrc =$(el).attr("src");

        // 显示box
        $('#showBigImage').show();

      },
//      调取手机摄像头或相册
      takePicture(index) { // 拍照或从相册中选择

        this.sheetVisible = true; // 展示

        this.actions = [
          {
            name:'拍照',
            method :function () {
              console.log("拍照事件");
              // 调取JSAPI拍照事件,参数：1 表示原始照片；2 带水印照片
              RPM.takePicture(2,index); // 参数一：表示获取原始图片JSAPI约定；参数二：点击的方法的标识位
            }
          },
          {
            name:'从相册中选择',
            method :function () {
              RPM.selectPhotos(9,index);
            }
          }

        ];

      },
      // 拍照的原始图片的回调函数，
      RPMImageCallBack:function (params,imageType,index) { // 参数一：base64;参数二：图片类型；参数三：标识位
        var imgSrc="data:image/"+imageType+";base64,"+params;

        switch (index){
          case '1':
            this.ryqdqkImgArr.push(imgSrc);
            break;
          case '2':
            this.xczpImgArr.push(imgSrc);
            break;
          default:
            break;
        }
        // 将这张图片追加到数组中便于保存所有图片
        var obj={};
        obj.imgType = imageType; // 图片类型
        obj.base64 =  params; // 图片的base64
        this.xczp.push(obj);

        this.callBackParams = imageType;

      },
      // 从相册中选择照片的回调函数
      RPMSelectPhotosCallBack:function (params,index) {
        var a = params.split(',');

        for (var i=0;i<a.length;i++){
          var obj={};
          obj.imgType = a[i].split('|')[0]; // 图片类型
          obj.base64 =  a[i].split('|')[1]; // 图片的base64

          var imgUrl ="data:image/"+obj.imgType+";base64,"+obj.base64;

          switch (index){
            case '1':
              this.ryqdqkImgArr.push(imgUrl);
              break;
            case '2':
              this.xczpImgArr.push(imgUrl);
              break;
            default:
              break;
          }
          this.xczp.push(obj);
        }

        this.paramsCount =a.length;

      },

      // 保存可编辑字段
      save(){
        console.log("邻近营业线保存接口调用");
        let vm = this;
        vm.id=29;
        vm.qdsj='2018-03-08';

        let url = 'http://tljjgxt.r93535.com/NearDayplanPhSaveServlet';

        var obj={
          id:vm.id,
          ryqdb:'',
          xczp:'',
          jhdxqk:'',
          qdsj:'',
          qddd:'',
          jwd:''
        };
        axios.post(url,obj,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
            console.log("post请求成功"+JSON.stringify(response));
          })
          .catch(function (error) {
            console.log(error);
          });

      },
      onClickLeft(){
        this.$router.push({path: '/NearBusinessLine'});
      },
      phoneOrPicture() { // 拍照或从相册中选择
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
        let url = 'http://tljjgxt.r93535.com/LJYYXDayUniquePlanServlet?id='+vm.id+'&baseuserId='+this._GLOBAL.baseUserId;
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
      // 绑定获取位置信息的回调函数
      window.RPMPositionCallBack = this.RPMPositionCallBack;

      // 绑定拍照的回调函数
      window.RPMImageCallBack = this.RPMImageCallBack;

      // 绑定选择照片的回调函数
      window.RPMSelectPhotosCallBack = this.RPMSelectPhotosCallBack;
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

  /* input */
  input{
    display: inline-block;
    width:100%;
    height:100%;
    border:0;
    padding:5px;
  }

  #save{
    position: fixed;
    left:0px;
    bottom:50px;
    width:100%;
    height:40px;
    text-align: center;
    line-height:40px;
    background: #2196F3;
    color:#fff;
    border-radius:4px;
  }
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
    /*height:100px;*/
    /*background: #a3f8ff;*/
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
    margin-bottom:91px;
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
