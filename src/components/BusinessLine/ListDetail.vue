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
        <van-col span="8" class="getHeight">日计划号</van-col>
        <van-col span="16" >
          <span class="w"  @click='popupClick(totalData.rjhh)' v-html="totalData.rjhh"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">月计划号</van-col>
        <van-col span="16" >
          <span class="w" @click='popupClick(totalData.yjhh)' v-html="totalData.yjhh"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">项目名称</van-col>
        <van-col span="16" >
          <span class="w" @click='popupClick(totalData.xmmc)' v-html="totalData.xmmc"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工日期</van-col>
        <van-col span="16" >
          <span class="w" @click='popupClick(totalData.sgrq)' v-html="totalData.sgrq"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">等级</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.dj)' v-html="totalData.dj"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">线别</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.xb)' v-html="totalData.xb"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">地点</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.dd)' v-html="totalData.dd"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">行别</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.xingbie)' v-html="totalData.xingbie"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工类型</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.sglx)' v-html="totalData.sglx"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工里程</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.sglc)' v-html="totalData.sglc"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工项目</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.sgxm)' v-html="totalData.sgxm"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">开始时间点</van-col>
        <van-col span="16">
          <span  class="w" @click='popupClick(totalData.kssjd)' v-html="totalData.kssjd"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">结束时间点</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.jssjd)' v-html="totalData.jssjd"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工内容及影响范围</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.sgnr)' v-html="totalData.sgnr"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">限速及行车方式</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.xsjxcfs)' v-html="totalData.xsjxcfs"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">行车限制卡</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.xcxzk)' v-html="totalData.xcxzk"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">路用列车信息</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.lylcxx)' v-html="totalData.lylcxx"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">设备变化</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.sbbh)' v-html="totalData.sbbh"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">运输组织</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.yszz)' v-html="totalData.yszz"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工单位及负责人</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.sgdwfzr)' v-html="totalData.sgdwfzr"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">配合单位</van-col>
        <van-col span="16">
          <span class="w" @click='popupClick(totalData.phdw)' v-html="totalData.phdw"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight" >外局代码</van-col>
        <van-col span="16" >
          <span class="w" @click='popupClick(totalData.wjdm)' v-html="totalData.wjdm"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">备注</van-col>
        <van-col span="16" >
          <span class="w" @click='popupClick(totalData.bz)' v-html="totalData.bz"></span>
        </van-col>
      </van-row>
      <br>
      <van-row>
        <van-col span="24" class="getHeight">计划批复情况</van-col>
      </van-row>
      <div class="img">
        <!--绑定动态图片资源-->
        <!--没有权限-->
        <!--<div v-for="path in jhpfqkImgArr" class="photoBox">-->
          <!--<img class="photo" v-bind:src="path" alt="logo"  v-on:click="showBigImage($event)"/>-->
        <!--</div>-->

      </div>
      <van-row>
        <van-col span="8" class="getHeight">计划批复情况描述</van-col>
        <van-col span="16">
          <span  class="w" @click='popupClick(totalData.jhpfqk)' v-html="totalData.jhpfqk"></span>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24" class="getHeight">人员签到情况</van-col>
      </van-row>
      <div class="img">

        <!--绑定动态图片资源-->
        <div v-for="path in ryqdqkImgArr" class="photoBox">
          <img class="photo" v-bind:src="path" alt="logo" width="50%" height="50%"  v-on:click="showBigImage($event)"/>
        </div>

        <div class="addPhoto" @click='takePictureE(2,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")' v-if="totalData.editStatus==1">+</div>

      </div>

      <van-row>
        <van-col span="8" class="getHeight">人员签到情况描述</van-col>
        <van-col span="16">
          <input type="text" @click='popupClick(totalData.dcryqk)'v-model="testTxt" v-if="totalData.editStatus==1">
          <input type="text" @click='popupClick(totalData.dcryqk)'v-model="testTxt" v-else readonly>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="8" class="getHeight">计划兑现情况</van-col>
        <van-col span="16">
          <van-switch v-model="totalData.jhsfdx" v-if="totalData.editStatus==1"/>
          <van-switch v-model="totalData.jhsfdx" v-else disabled  />
        </van-col>
      </van-row>

      <van-row>
        <van-col span="8" class="getHeight">计划兑现情况描述</van-col>
        <van-col span="16">
          <input type="text" @click='popupClick(totalData.jhdxqk)'v-model="totalData.jhdxqk" v-if="totalData.editStatus==1">
          <input type="text" @click='popupClick(totalData.jhdxqk)'v-model="totalData.jhdxqk" v-else readonly>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24" class="getHeight">现场照片</van-col>
      </van-row>

      <van-row>
        <van-col span="24">
          <!--<div class="img">-->
          <!--<div class="testBox" v-for="(item ,index) in testImgIdUrlData">-->
            <!--<img v-bind:id="item.id" v-bind:src="item.imgUrl" v-bind:alt="index">-->
            <!--<span @click="reduceFn(index)">-</span>-->
          <!--</div>-->

          <!--<div class="testBox">-->
            <!--&lt;!&ndash;参数：参1：标识位；参2：是否下载图片; 参3：下载图片的url地址&ndash;&gt;-->
            <!--<div class="testBox1" @click='takePictureE(3,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")' >+</div>-->
          <!--</div>-->

          <div v-for="path in picturesArr" class="photoBox">
          <img class="photo" v-bind:src="path" alt="logo" v-on:click="showBigImage($event)"/>
          </div>

          <!--参数：参1：标识位；参2：是否下载图片; 参3：下载图片的url地址-->
          <div class="testBox addPhoto" @click='takePictureE(3,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")' v-if="totalData.editStatus==1" >+</div>

          <!--</div>-->
        </van-col>
      </van-row>

      <van-row>
        <van-col span="8" class="getHeight">签到时间</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.qdsj)' v-html="totalData.qdsj"></span>
          <button class="refreshBtn" @click="getCurrentPositionInfo()" v-if="totalData.editStatus==1">刷新</button>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">签到地点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.qddd)' v-html="totalData.qddd"></span>
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

       <!--预览图片的盒子-->
      <div id="showBigImage" v-if="showBigImage" @click="showBigImageBox($event)" v-bind:style="{height:setHeight+'px'}">
        <!--<img  src="../../assets/images/sgrjhImages/search.png" alt="">-->
        <!--<img  v-bind:src="previewPicSrc" alt=""  :style="{width:previewPicWidth+'px',height:previewPicHeight+'px'}">-->
        <img  v-bind:src="previewPicSrc" alt="" style="width:100%;"/>

      </div>

    </div>
    <p hidden>{{storeXmId}}</p>
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
          baseuserid:'222441',
          domainName:'tljjgxt.r93535.com', // 域名

          longitude:'', // 经度
          latitude:'', // 纬度

          // 测试图片删除功能数据
          testImgIdUrlData:[
            {id:'1',imgUrl:'../../assets/images/sgrjhImages/fqd.png'},
            {id:'2',imgUrl:'../../assets/images/sgrjhImages/fyyxg.png'},
            {id:'3',imgUrl:'../../assets/images/sgrjhImages/homeg.png'},
            {id:'4',imgUrl:'../../assets/images/sgrjhImages/ljyyxg.png'},
            {id:'5',imgUrl:'../../assets/images/sgrjhImages/searchg.png'},
            {id:'6',imgUrl:'../../assets/images/sgrjhImages/fqd.png'}

          ],
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
          previewPicWidth:'', // 预览图片的宽
          previewPicHeight:'', // 预览图片的高

          testW:'',
          setHeight:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,/// 设置预览图片的盒子的高度=屏幕可视区域的高度

          xczp:[],// 现场照片：拍照和相册中选择的照片存放的数组

          checked: true,

//          3.12 原始
//          id:this.$route.query.id,// 获取通过路由传的值
          id:'',
          totalData:[],
          popupVisible:false,
          popupTxt:'',
          sheetVisible:false, // 隐藏拍照、相册选择框
          actions:[]
        }
      },
      computed:{
        storeXmId(){
          this.id = this.$store.getters.businessLineSearch.xmId;
          this.getData();
          return this.$store.getters.businessLineSearch.xmId; // 返回点击项目的id
        },
      },
      methods:{
        // 图片元素的删除功能
        reduceFn(index){//删除当前选中对象
          this.testImgIdUrlData.splice(index,1);
        },
        // 预览图片
        showBigImageBox(event){
          var el = event.currentTarget;
          $(el).hide();
        },
        showBigImage(event){
          var el = event.currentTarget;   //获取点击对象
          this.previewPicSrc =$(el).attr("src");  // 当前点击图片的src

          this.previewPicWidth = $(el).width(); // 当前点击图片的宽
          this.previewPicHeight = $(el).height();// 当前点击图片的高

          $('#showBigImage').show(); // 显示box
        },
        // 获取位置信息的回调函数（ios、android和js交互）
        RPMPositionCallBack:function (params) { // '位置,经度,纬度'

          var arr =params.split(',');
          this.totalData.qddd=arr[0]; //当前位置


        },

        // 拍照的原始图片的回调函数，
        RPMImageCallBack:function (params,imageType,x,y) { // 参数一：base64;参数二：图片类型；参数三：标识位

          let s="data:image/"+imageType+";base64,"+params;

          switch (x){
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
        RPMSelectPhotosCallBack:function (params,x,y) {
          var a = params.split(',');

          for (var i=0;i<a.length;i++){
            var obj={};
            obj.imgType = a[i].split('|')[0]; // 图片类型
            obj.base64 =  a[i].split('|')[1]; // 图片的base64

            var imgUrl ="data:image/"+obj.imgType+";base64,"+obj.base64;

            switch (x){
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
          // 获取当前时间
          let currentTime=new Date().getFullYear()+(new Date().getMonth()>=9?"-":"-0")+(new Date().getMonth()+1)+(new Date().getDate()>=9?"-":"-0")+new Date().getDate()+(new Date().getHours()>=9?" ":" 0")+new Date().getHours()+(new Date().getMinutes()>=9?":":":0")+new Date().getMinutes();

          this.totalData.qdsj=currentTime;

          // 调取获取当前位置的JSAPI
          RPM.getCurrentPositionInfo();
        },
        // JSAPI 函数调用 拍照或拍照或从相册中
        takePictureE(index,bo,url) {
          this.sheetVisible = true; // 拍照或从相册中选择项目显示
          this.actions = [
            {
              name:'拍照',
              method :function () {
                // 调取JSAPI拍照事件,参数：1 表示原始照片；2 带水印照片
                RPM.takePicture(2,index,bo,url); // 参数一：表示获取原始图片JSAPI约定；参数二：点击的方法的标识位
              }
            },
            {
              name:'从相册中选择',
              method :function () {
                RPM.selectPhotos(9,index,bo,url);
              }
            }
          ];
        },
        save(){
          let vm = this;
          let url = 'http://'+vm.domainName+'/DayplanPhSaveServlet';

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
          console.log("详情页接收到的项目id为：" +vm.id);
          let url = 'http://'+vm.domainName+'/YYXDayPlanUniqueServlet?id='+vm.id+'&baseuserId='+vm.baseuserid;
          vm.$http.get(url).then((response) => {
            console.log("详情页面的数据：" + JSON.stringify(response.data));
            vm.totalData = response.data;

            vm.totalData.jhsfdx = vm.totalData.jhsfdx == '1'?true:false;

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
        },

        // android回传图片id的回调函数
        RPMImageIdCallBack(dataId,x,y){
          console.log("ndroid回传图片id，接收到的参数为：" + dataId+":"+x+':'+y);
        }
      },
      mounted:function () {
        console.log("当前项目的id："+ this.id);

        // 绑定获取位置信息的回调函数
        window.RPMPositionCallBack = this.RPMPositionCallBack;

        // 绑定拍照的回调函数
        window.RPMImageCallBack = this.RPMImageCallBack;

        // 绑定选择照片的回调函数
        window.RPMSelectPhotosCallBack = this.RPMSelectPhotosCallBack;

        // 绑定获取android回传图片id的回调函数
        window.RPMImageIdCallBack = this.RPMImageIdCallBack;

        this.getData();

      }
    }
</script>

<style scoped>
  /* 照片test*/
  .testBox{
    width:32%;
    border:1px solid #2a30ff;
    display: inline-block;
    margin-top:10px;
  }
  .testBox >img{
    width:100%;
    height:100%;
  }
  .testBox>span{
    display: inline-block;
    width:100%;
    height:30px;
    text-align: center;
    line-height:30px;
    background: #f30;
    color: #fff;
    font-size:30px;
  }
  .testBox>.testBox1{
    width:50px;
    height:50px;
    text-align: center;
    line-height:50px;
    margin: auto;
  }
  /* 首列的字体 */
  .getHeight{
    font-weight:bold;
  }
  /* 禁用按钮button*/
  /* 照片的样式 */
  .photoBox{
    /*width:18%;*/
    margin-left:1%;
    /*height:70px;*/
    margin-top:10px;
    float: left;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .photoBox >img.photo{
    /*width:100%;*/
    /*height:100%;*/
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
  .van-col.van-col-16{
    position: relative;
  }
  .van-col.van-col-16>button.refreshBtn{
    position: absolute;
    top:5px;
    right:5px;

  }

  .van-col.van-col-16>span.w{
    display: inline-block;
    width:100%;
    height:100%;

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
    padding: 5px;
    line-height:30px;
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
