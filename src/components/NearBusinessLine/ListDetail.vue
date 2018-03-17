<template>
  <div class="listDetail">

    <van-nav-bar title="邻近营业线施工日计划"
                 left-text="返回"
                 @click-left="onClickLeft"
                 fixed
    ></van-nav-bar>

    <!--内容-->
    <div class="content">
      <van-row>
        <van-col span="8" class="getHeight">项目名称</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xmmc)'>{{totalData.xmmc}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工日期</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgrq)'>{{totalData.sgrq}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">类别</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.lb)'>{{totalData.lb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">线路</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xl)'>{{totalData.xl}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">行别</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.xb)'>{{totalData.xb}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工项目</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgxm)'>{{totalData.sgxm}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工地点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgdd)'>{{totalData.sgdd}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">开始时间点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.kssjd)'>{{totalData.kssjd}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">结束时间点</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jssjd)'>{{totalData.jssjd}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工内容</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgnr)'>{{totalData.sgnr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工机械</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgjx)'>{{totalData.sgjx}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工单位负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sgdwfzr)'>{{totalData.sgdwfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">设备监护单位及负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.sbjhfzr)'>{{totalData.sbjhfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">施工配合通知书照片</van-col>
        <van-col span="16">
          <!--<img width="90%" height="80%" style="margin-left: 5%;" v-bind:src="totalData.phtzszp" alt="通知书照片">-->
          <img width="90%" height="80%" style="margin-left: 5%;border:0;" src="" alt="通知书照片" v-on:click="showBigImage($event)"/>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">监理单位及负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jldwfzr)'>{{totalData.jldwfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">建设单位及负责人</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.jsdwfzr)'>{{totalData.jsdwfzr}}</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">备注</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.beizhu)'>{{totalData.beizhu}}</span>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24" class="getHeight">人员签到情况</van-col>
      </van-row>

      <div class="imgBox">
        <!--正式-->
        <div class="imgnow" v-for="(item ,index) in ryqdqkImgArr" >
          <img v-bind:src="item.s" :alt="index" v-on:click="showBigImage($event)">
          <van-icon name="checked"  v-show="item.isShow==true" />
          <van-icon name="clear"  v-show="item.isShow==false"/>
          <van-icon name="delete" @click="onDelete(1,index)" />
        </div>


        <div class="addPhoto" @click='takePictureE(1,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")' v-if="totalData.status==1">+</div>

        <!--<div class="addPhoto" @click='takePictureE(1,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")'>+</div>-->

      </div>

      <van-row>
        <van-col span="8" class="getHeight">计划兑换情况</van-col>
        <van-col span="16">

          <span v-html="totalData.jhsfdx" v-if="totalData.status==1" @click="changeValue($event)"></span>
          <span v-html="totalData.jhsfdx" v-else></span>

        </van-col>
      </van-row>
      <br>
      <van-row>
        <van-col span="24" class="getHeight">现场照片</van-col>
      </van-row>

      <div class="imgBox" >
        <div class="imgnow" v-for="(item ,index) in xczpImgArr" v-if="xczpImgArr.length > '0'">
          <img v-bind:src="item.s" :alt="index" v-on:click="showBigImage($event)">
          <van-icon name="checked"  v-show="item.isShow==true" />
          <van-icon name="clear"  v-show="item.isShow==false"/>
          <van-icon name="delete" @click="onDelete(2,index)" />
        </div>

        <div class="addPhoto" @click='takePictureE(2,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")' v-if="totalData.status==1">+</div>

        <!--<div class="addPhoto" @click='takePictureE(2,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")'>+</div>-->

      </div>

      <van-row>
        <van-col span="8" class="getHeight">签到时间</van-col>
        <van-col span="16">
          <span @click='popupClick(totalData.qdsj)' v-html="totalData.qdsj"></span>
          <!--权限-->
          <button class="refreshBtn" @click="getCurrentPositionInfo()" v-if="totalData.status==1">签到</button>
          <!--无权限-->
          <!--<button class="refreshBtn" @click="getCurrentPositionInfo()">刷新</button>-->

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

      <!-- 待接口测试返回-->
      <button id="save" @click="save()" v-if="totalData.status==1">保存</button>
    </div>

    <!--预览图片的盒子-->
    <div id="showBigImage" v-if="showBigImage" @click="showBigImageBox($event)" v-bind:style="{height:setHeight+'px'}">
      <!--<img  src="../../assets/images/sgrjhImages/search.png" alt="">-->
      <img  v-bind:src="previewPicSrc" alt="">
    </div>

    <p hidden>{{storeXmId}}</p>
  </div>
</template>
<script>

  // 引入组件
  import {Toast ,Dialog } from 'vant'
  import $ from 'jquery'
  import axios from 'axios'
  // 引入第三方,将字符串转换成base64
  import { Base64 } from '../../assets/js/Base64.js'


  export default {
    name: "listDetail",
    components: {
      Toast,Dialog
    },
    data(){
      return{
        checked: true,
     // baseuserid:'222441',
        domainName:'tljjgxt.r93535.com', // 域名
//        id:'',
        id:this.$store.getters.nearBusinessLineSearch.xmId,
        totalData:[],
        popupVisible:false,
        popupTxt:'',

        jwd:'', // ‘经度，纬度’ 保存字段

        xczp:[],
        ryqdqkImgArr:[], // 人员签到情况图片集合
        xczpImgArr:[],  // 现场照片集合

        ryqdbIdArr:[], //人员签到表 桥梁作用
        xczpIdArr:[], //现场照片 桥梁作用

        ryqdbId:'', //人员签到表 保存字段
        xczpId:'', //现场照片 保存字段





        previewPicSrc:'', // 预览图片的src
        setHeight:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,/// 设置预览图片的盒子的高度=屏幕可视区域的高度

        sheetVisible:false, // 隐藏拍照、相册选择框
        actions:[]
      }
    },
    computed:{
      storeXmId(){
        this.id = this.$store.getters.nearBusinessLineSearch.xmId;
//        this.getData();
        return this.$store.getters.nearBusinessLineSearch.xmId; // 返回点击项目的id
      },
    },
    methods:{
      // 引入base64
      Base64:function () {
        Base64();
      },
      // 图片删除函数
      onDelete(num,index){
        Dialog.confirm({
          title: '删除',
          message: '确定删除此图片吗？'
        }).then(() => {

          console.log("删除的确认方法：" + num+ ':'+ index);
          // 删除图片的方法
          if (num===1){

            console.log('删除的对象为：' +JSON.stringify(this.ryqdqkImgArr[index]));
            this.ryqdqkImgArr.splice(index,1);

            // 删除图片。根据有没有id,有id的时从删除对应的id，没有id时，不执行删除操作。
            console.log('删除前数据：' +JSON.stringify( this.ryqdbIdArr));
            this.ryqdbIdArr.splice(index,1);

            console.log('删除后的数据：' +JSON.stringify( this.ryqdbIdArr));



          }

          if (num===2){

            console.log('删除的对象为：' +JSON.stringify(this.xczpImgArr[index]));
            // 删除图片的方法
            this.xczpImgArr.splice(index,1);
            console.log('删除前数据：' +JSON.stringify( this.xczpIdArr));
            // 删除对应图片的id
            this.xczpIdArr.splice(index,1);
            console.log('删除后的数据：' +JSON.stringify( this.xczpIdArr));

          }

        }).catch(() => {
          console.log("点击取消按钮")
        });
      },

      changeValue(event){

        var el = event.currentTarget;

        var s=el.innerText=='是'?'否':'是';

        this.totalData.jhsfdx= s;

      },
      // JSAPI 函数调用 拍照或拍照或从相册中
      takePictureE(index,bo,url) {
        let  arrL;
        if(index==1){
          arrL = this.ryqdqkImgArr.length;
        }

        if (index==2){
          arrL = this.xczpImgArr.length;
        }

        this.sheetVisible = true; // 拍照或从相册中选择项目显示
        this.actions = [
          {
            name:'拍照',
            method :function () {

              // 调取JSAPI拍照事件,参数：1 表示原始照片；2 带水印照片
              RPM.takePicture(2,index,bo,url,arrL); // 参数一：表示获取原始图片JSAPI约定；参数二：点击的方法的标识位
            }
          },
          {
            name:'从相册中选择',
            method :function () {
              RPM.selectPhotos(9,index,bo,url,arrL);
            }
          }
        ];
      },

      // JSAPI 函数调用  获取位置信息
      getCurrentPositionInfo(){

        // 获取当前时间
        let currentTime=new Date().getFullYear()+(new Date().getMonth()>=9?"-":"-0")+(new Date().getMonth()+1)+(new Date().getDate()>=9?"-":"-0")+new Date().getDate()+(new Date().getHours()>=9?" ":" 0")+new Date().getHours()+(new Date().getMinutes()>=9?":":":0")+new Date().getMinutes();

        this.totalData.qdsj=currentTime;


        RPM.getCurrentPositionInfo();
      },
      // 获取位置信息的回调函数（ios、android和js交互）
      RPMPositionCallBack:function (params) { // '位置,经度,纬度'
        var arr =params.split(',');
        this.totalData.qddd=arr[0]; //当前位置

        // 取经纬度
        this.jwd = arr[1]+',' +arr[2];

        console.log("上传的经纬度为：" + this.jwd);
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
      takePicture(index,bo,url) { // 拍照或从相册中选择

        this.sheetVisible = true; // 展示

        this.actions = [
          {
            name:'拍照',
            method :function () {
              console.log("拍照事件");
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
      // 拍照的原始图片的回调函数，
      RPMImageCallBack:function (params,imageType,x,y) { // 参数一：base64;参数二：图片类型；参数三：标识位

        let s="data:image/"+imageType+";base64,"+params;

        let imgObj={};
        imgObj.s = s;
        imgObj.x=x;
        imgObj.y=y;
        imgObj.isShow=false;

        switch (x){
          case '1':
            this.ryqdqkImgArr.push(imgObj);
            break;
          case '2':
            this.xczpImgArr.push(imgObj);
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
        var idArr = y.split(',');

        for (var i=0;i<a.length;i++){
          var obj={};
          obj.imgType = a[i].split('|')[0]; // 图片类型
          obj.base64 =  a[i].split('|')[1]; // 图片的base64

          var imgUrl ="data:image/"+obj.imgType+";base64,"+obj.base64;

          let imgObj={};
          imgObj.s=imgUrl;
          imgObj.x=x;
          imgObj.y=idArr[i];
          imgObj.isShow=false;

          switch (x){
            case '1':
              this.ryqdqkImgArr.push(imgObj);
              break;
            case '2':
              this.xczpImgArr.push(imgObj);
              break;
            default:
              break;
          }

          this.xczp.push(obj);
        }

        this.paramsCount =a.length;
      },
      // android回传图片id的回调函数
      RPMImageIdCallBack(dataId,x,y){
       /* ryqdbIdArr:[], //人员签到表 桥梁作用
          xczpIdArr:[], //现场照片 桥梁作用*/

        console.log("ndroid回传图片id，接收到的参数为：" + dataId+":"+x+':'+y);
        // 首先判断id是否为空。 为空时，显示叉号，非空时，显示对号。
        if (dataId !==''){ // 非空
          switch (x){
            case '1':
              // 将对应的图片的标识修改为true,图片的右上角显示对号
              this.ryqdqkImgArr[y-1].isShow = true;

              // 将图片id追加到数组中，只存储有id返回的图片的id
              this.ryqdbIdArr.push(dataId);

              break;
            case '2':
              // 将对应的图片的标识修改为true,图片的右上角显示对号
              this.xczpImgArr[y-1].isShow = true;

              // 将图片id追加到数组中，只存储有id返回的图片的id
              this.xczpIdArr.push(dataId);

              break;
            default:
              break;
          }

        }else {

          switch (x){
            case '1':
              // 将对应的图片的标识修改为true,图片的右上角显示对号
              this.ryqdqkImgArr[y-1].isShow = false;
              break;
            case '2':
              // 将对应的图片的标识修改为true,图片的右上角显示对号
              this.xczpImgArr[y-1].isShow = false;
              break;
            default:
              break;
          }
        }
      },

      // 保存可编辑字段
      save(){
        // 将图片id数组转换成字符串
        var ryqdbId = this.ryqdbIdArr.join(',');
        var xczpId = this.xczpIdArr.join(',');

        // 计划兑现情况,将汉字转换成数字字符串
//        var jhsfdxS = this.totalData.jhsfdx === '是'?'1':'0'; // 注意：后台要求‘否’的情况，只能传‘0’，不能传空字符串。

        // 将需要保存的’汉字字符串字段’转换成base64形式保存到后台，处理的字段3个，包括：（计划兑现情况描述、签到地点）。

        var base = new Base64();

        var qdddTemp = base.encode(this.totalData.qddd);  // 签到地点
        var jhdxqkTemp = base.encode(this.totalData.jhdxqk); // 计划兑现情况


        console.log("保存传递的函数为11：" + ryqdbId);
        console.log("保存传递的函数为222：" + xczpId);

        let url = 'http://tljjgxt.r93535.com/NearDayplanSaveServlet?id='+this.id+'&qddd='+qdddTemp+'&qdsj='+this.totalData.qdsj+'&jhdxqk='+jhdxqkTemp+'&ryqdb='+ ryqdbId+'&xczp='+xczpId+'&jwd='+this.jwd;

        this.$http.get(url).then((response) => {

          console.log('保存成功的数据：' + JSON.stringify(response));
          // 保存成功
          Toast(`保存成功`);

        }, (response) => {
          console.log('error');
        });
      },
      onClickLeft(){
        Dialog.confirm({
          message: '确认退出此次编辑？'
        }).then(() => {
          // 清空数据
          this.totalData.qddd ='';
          this.totalData.qdsj ='';
          this.totalData.jhsfdx ='';
          this.xczpImgArr=[];
          this.ryqdqkImgArr=[];

          // 跳转页面，返回列表页
          this.$router.push({path: '/NearBusinessLine'});

        }).catch((error) => {
          console.log(error);
        });
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

          console.log('获取营业线的详情页面--------2：' + JSON.stringify(vm.totalData.ryqdb));
          console.log('获取的详情页:现场照片--------3：' + JSON.stringify(vm.totalData.xczp));

          // 根据后台返回的图片id数据获取图片信息
          var ryqdbTempUrl ='http://rails.r93535.com/tljggxt/selfrun/selfruncon!getFilePath.action?fileId='+vm.totalData.ryqdb;
          var xczpTempUrl ='http://rails.r93535.com/tljggxt/selfrun/selfruncon!getFilePath.action?fileId='+vm.totalData.xczp;

          var ryqdbT = vm.totalData.ryqdb.split(',');
          var xczpT = vm.totalData.xczp.split(',');

          for (var i=0;i<ryqdbT.length;i++){
            this.ryqdbIdArr.push(ryqdbT[i]);
          }
          console.log("aaa:" +JSON.stringify( this.ryqdbIdArr));

          for (var i=0;i<xczpT.length;i++){
            this.xczpIdArr.push(xczpT[i]);
          }
          console.log("bbbb:" +JSON.stringify(  this.xczpIdArr));

          // 请求人员签到表数据
          axios.get(ryqdbTempUrl).then(response => {
            // 将接收到的id转换成数组形式
            var ryqdbTemp = response.data; //  4
//
            for (var i=0;i<ryqdbTemp.length;i++){
              console.log("图片的src:" +JSON.stringify( ryqdbTemp[i]));
              var index=i;
              var imgObj={};

              imgObj.s = ryqdbTemp[index].fileAddr;
              imgObj.x=1;
              imgObj.y=index;
              imgObj.isShow=true;

              this.ryqdqkImgArr.push(imgObj);
            }
          }).catch(err => {
            console.error(err.message)
          })

          // 请求现场照片数据
          console.log("图片url数据源3333url：" +xczpTempUrl);
          axios.get(xczpTempUrl).then(response => {
            console.log("图片url数据源3333：" +JSON.stringify( response.data));
            var xczpTemp = response.data; // 1

            console.log("图片url数据源3333length：" +xczpTemp.length);

            for (var i=0;i<xczpTemp.length;i++){
              var index=i;
              var imgObj={};
              imgObj.s = xczpTemp[index].fileAddr;
              imgObj.x=2;
              imgObj.y=index;
              imgObj.isShow=true;

              this.xczpImgArr.push(imgObj);
            }
          }).catch(err => {
            console.error(err.message)
          })


          this.$nextTick(function(){
            console.log("$nextTick监听数据渲染完成之后的回调函数");
            var obj = $(".getHeight");
            for(var i=0;i<obj.length;i++){
              var h=$(obj[i]).height();
              $(obj[i]).siblings().css({
//                'height':h+'px',
                'lineHeight':h+'px'
              });
            }
          })
        }, (response) => {
          console.log('error');
        });
      }
    },
    activated: function() {
      this.getData();
    },
    mounted:function () {
      // 绑定获取位置信息的回调函数
      window.RPMPositionCallBack = this.RPMPositionCallBack;

      // 绑定拍照的回调函数
      window.RPMImageCallBack = this.RPMImageCallBack;

      // 绑定选择照片的回调函数
      window.RPMSelectPhotosCallBack = this.RPMSelectPhotosCallBack;

      // 绑定获取android回传图片id的回调函数
      window.RPMImageIdCallBack = this.RPMImageIdCallBack;

//      this.getData();

    }
  }
</script>

<style scoped>




  .getHeight{
    font-weight:bold;
  }

  /* span 占满格*/
  .van-col.van-col-16{
    /*line-height: 40px;*/
  }
  .van-col.van-col-16>span{
    display: inline-block;
    width:100%;
    height:100%;
  }
  /* input */
  input{
    display: inline-block;
    width:100%;
    height:100%;
    border:0;
    padding:5px;
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
