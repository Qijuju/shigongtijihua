<template>
  <div class="listDetail">
    <!--title-->
    <van-nav-bar title="营业线施工日计划"
                 left-text="返回"
                 @click-left="onClickLeft"
                 fixed
    ></van-nav-bar>
    <!--内容-->
    <div class="content">
      <van-row>
        <van-col span="8">日计划号</van-col>
        <van-col span="16" >
          <span @click='popupClick(totalData.rjhh)'>{{totalData.rjhh}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">月计划号</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.yjhh)'>{{totalData.yjhh}}</span>
        </van-col>
      </van-row>
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
        <van-col span="8">等级</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.dj)'>{{totalData.dj}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">线别</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xb)'>{{totalData.xb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">地点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.dd)'>{{totalData.dd}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">行别</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xingbie)'>{{totalData.xingbie}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工类型</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sglx)'>{{totalData.sglx}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工里程</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sglc)'>{{totalData.sglc}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工项目</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgxm)'>{{totalData.sgxm}}</span>
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
        <van-col span="8" class="wordBreak">施工内容及影响范围</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgnr)' v-html="totalData.sgnr"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">限速及行车方式</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xsjxcfs)' v-html="totalData.xsjxcfs"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">行车限制卡</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xcxzk)'>{{totalData.xcxzk}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">路用列车信息</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.lylcxx)'>{{totalData.lylcxx}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">设备变化</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sbbh)'>{{totalData.sbbh}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">运输组织</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.yszz)'>{{totalData.yszz}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">施工单位及负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgdwfzr)'>{{totalData.sgdwfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">配合单位</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.phdw)'>{{totalData.phdw}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">外局代码</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.wjdm)'>{{totalData.wjdm}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">备注</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.bz)'>{{totalData.bz}}</span>
        </van-col>
      </van-row>
      <br>
      <van-row>
        <van-col span="24">计划批复情况</van-col>
      </van-row>
      <div class="img">
        <!--绑定动态图片资源-->
        <div v-for="path in jhpfqkImgArr" class="photoBox">
          <img class="photo" v-bind:src="path" alt="logo"  v-on:click="showBigImage($event)"/>
        </div>

        <!-- 根据 editStatus的值判断账户是否有编辑权限-->
        <!--<div class="addPhoto" @click='takePictureE()' v-if="totalData.editStatus===1">+</div>-->

        <!-- 测试JSAPI用 : 调取手机摄像头，进行拍照-->
        <div class="addPhoto" @click='takePictureE(1)'>+</div>
      </div>
      <van-row>
        <van-col span="8">计划批复情况描述</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jhpfqk)'>{{totalData.jhpfqk}}</span>

        </van-col>
      </van-row>
      <br>
      <van-row>
        <van-col span="24">人员签到情况</van-col>
      </van-row>
      <div class="img">

        <!--绑定动态图片资源-->
        <div v-for="path in ryqdqkImgArr" class="photoBox">
          <img class="photo" v-bind:src="path" alt="logo"  v-on:click="showBigImage($event)"/>
        </div>

        <!-- 根据 editStatus的值判断账户是否有编辑权限-->
        <!--<div class="addPhoto" @click='takePictureE()' v-if="totalData.editStatus===1">+</div>-->

        <!-- 测试JSAPI用 : 调取手机摄像头，进行拍照-->
        <div class="addPhoto" @click='takePictureE(2)'>+</div>

      </div>

      <van-row>
        <van-col span="8" class="getHeight">人员签到情况描述</van-col>
        <van-col span="16">
          <input type="text" @click='popupClick(totalData.dcryqk)'v-model="testTxt" v-if="totalData.editStatus===1">
          <input type="text" @click='popupClick(totalData.dcryqk)'v-model="testTxt" v-else readonly>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">计划兑现情况</van-col>
        <van-col span="16">
          <van-switch v-model="totalData.jhsfdx" v-if="totalData.editStatus===1"/>
          <van-switch v-model="totalData.jhsfdx" v-else disabled  />
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">计划兑现情况描述</van-col>
        <van-col span="16">
          <input type="text" @click='popupClick(totalData.jhdxqk)'v-model="totalData.jhdxqk" v-if="totalData.editStatus===1">
          <input type="text" @click='popupClick(totalData.jhdxqk)'v-model="totalData.jhdxqk" v-else readonly>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">现场照片</van-col>
      </van-row>
      <van-row>
        <div class="img" style="height: 170px;">

          <!--照片的展示-->
        <div v-for="path in picturesArr" class="photoBox">
          <img class="photo" v-bind:src="path" alt="logo" v-on:click="showBigImage($event)"/>
        </div>


        <!--编辑权限code-->
        <!--<div class="addPhoto" @click='takePictureE()' v-if="totalData.editStatus===1" >+</div>-->
        <!-- 测试用 -->
        <div class="addPhoto" @click='takePictureE(3)'>+</div>

      </div>
      </van-row>

      <van-row>
        <van-col span="8">签到时间</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.qdsj)'>{{totalData.qdsj}}</span>
          <button @click="getCurrentTime()" v-if="totalData.editStatus===1">获取当前时间</button>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">签到地点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.qddd)'>{{totalData.qddd}}</span>
          <button @click="getCurrentPositionInfo()" v-if="totalData.editStatus===1">获取当前位置</button>
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
      <!--<p hidden>{{imgCount}}</p>-->

       <!--预览图片的盒子-->
      <div id="showBigImage" v-if="showBigImage" @click="showBigImageBox($event)" v-bind:style="{height:setHeight+'px'}">
        <!--<img  src="../../assets/images/sgrjhImages/search.png" alt="">-->
        <img  v-bind:src="previewPicSrc" alt="">
      </div>

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
          testTxt:'',
          // 拍照
          callBackParams:'',
          imgUrl:'',

          // 从照片中选择照片
          paramsCount:'',

          jhpfqkImgArr:[], // 计划批复情况
          ryqdqkImgArr:[], // 人员签到情况图片集合
          picturesArr:[], // 现场照片

          previewPicSrc:'', // 预览图片的src
          setHeight:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,/// 设置预览图片的盒子的高度=屏幕可视区域的高度


          xczp:[],// 现场照片：拍照和相册中选择的照片存放的数组
//          imgLength:'', // 图片的长度

          checked: true,
          baseuserid:102300,
          id:this.$route.query.id,// 获取通过路由传的值
          totalData:[],
          popupVisible:false,
          popupTxt:'',
          sheetVisible:false, // 隐藏拍照、相册选择框
          actions:[]
        }
      },
      methods:{
        // 预览图片
        showBigImageBox(event){
          var el = event.currentTarget;
          $(el).hide();
        },
        showBigImage(event){
          var el = event.currentTarget;   //获取点击对象
          this.previewPicSrc =$(el).attr("src");  // 当前点击的src
          $('#showBigImage').show(); // 显示box
        },
        // 获取位置信息的回调函数（ios、android和js交互）
        RPMPositionCallBack:function (params) {
          this.totalData.qddd=params;
        },

        // 拍照的原始图片的回调函数，
        RPMImageCallBack:function (params,imageType,index) { // 参数一：base64;参数二：图片类型；参数三：标识位

          let s="data:image/"+imageType+";base64,"+params;

          switch (index){
            case '1':
              this.jhpfqkImgArr.push(s);
              break;
            case '2':
              this.ryqdqkImgArr.push(s);
              break;
            case '3':
              this.picturesArr.push(s);
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
                this.jhpfqkImgArr.push(imgUrl);
                break;
              case '2':
                this.ryqdqkImgArr.push(imgUrl);
                break;
              case '3':
                this.picturesArr.push(imgUrl);
                break;
              default:
                break;
            }

            this.xczp.push(obj);
          }

          this.paramsCount =a.length;

        },
        // JSAPI 函数调用  获取位置信息
        getCurrentPositionInfo(){
          RPM.getCurrentPositionInfo();
        },
        // JSAPI 函数调用 拍照或拍照或从相册中
        takePictureE(index) { // 拍照或从相册中选择

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
        save(){
          let vm = this;

          vm.id=28;
          vm.qdsj='2018-03-08';

          let url = 'http://whjjgc.r93535.com/DayplanPhSaveServlet';

          var obj={
            id:vm.id,
            ryqdb:'',
            dcryqk:'',
            xczp:vm.xczp,
            jhsfdx:'',
            jhdxqk:'',
            qdsj:'',
            qddd:'',
            jwd:''
          };
          axios.post(url, obj, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then(function (response) {
              console.log("post111请求成功"+JSON.stringify(response));
            })
            .catch(function (error) {
              console.log(error);
            });

        },
        onClickLeft(){
          this.$router.push({path: '/BusinessLine'});
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
          let url = 'http://whjjgc.r93535.com/YYXDayPlanUniqueServlet?id='+vm.id+'&baseuserId='+vm.baseuserid;
          vm.$http.get(url).then((response) => {
            console.log("详情页面的数据：" + JSON.stringify(response.data));
            vm.totalData = response.data;

            vm.totalData.jhsfdx = vm.totalData.jhsfdx == '1'?true:false;

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

        this.getData();

        $('.van-col.van-col-8').each(function (i) {
          var txtL=$($('.van-col.van-col-8')[i]).text().length;
          if(txtL>7){
            $($('.van-col.van-col-8')[i]).addClass('wordBreak')
          }else {
            $($('.van-col.van-col-8')[i]).removeClass('wordBreak')
          }
        })
      }
    }
</script>

<style scoped>
  /* 禁用按钮button*/
  /* 照片的样式 */
  .photoBox{
    width:18%;
    margin-left:1%;
    height:70px;
    margin-top:10px;
    float: left;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .photoBox >img.photo{
    width:100%;
    height:100%;
    /*height:50px;*/
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  /* input */
  input{
    display: inline-block;
    width:100%;
    height:100%;
    border:0;
    padding:5px;
  }

  /* 保存按钮 */
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
  /* 设置头部 style end */
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
    width:18%;
    margin-left:10px;
    margin-top:10px;
    height:70px;
    text-align: center;
    line-height:70px;
    /*background: #ccc;*/
    color: #333;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size:30px;

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

</style>
