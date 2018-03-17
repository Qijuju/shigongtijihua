<template>
  <div class="listDetail">
    <!--title-->
    <van-nav-bar title="营业线施工日计划"
                 left-text="返回"
                 right-text="关闭"  @click-right="onClickRight"
                 @click-left="onClickLeft"
                 fixed
    ></van-nav-bar>

    <!--内容-->
    <div class="content">
      <van-row>
        <van-col span="8" class="getHeight">本系统日计划号</van-col>
        <van-col span="16" >
          <span class="w"  @click='popupClick(totalData.rjhh)' v-html="totalData.rjhh"></span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" class="getHeight">月计划号</van-col>
        <van-col span="16" >
          <!--<span class="w" @click='popupClick(totalData.yjhh)' v-html="totalData.yjhh">{{totalData.xmmc}}</span>-->
          <span class="w" @click='popupClick(totalData.yjhh)'>{{totalData.yjhh}}</span>
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
      <van-row>
        <van-col span="24" class="getHeight">计划批复情况</van-col>
      </van-row>

      <van-row>
        <van-col span="8" class="getHeight">计划批复情况描述</van-col>
        <van-col span="16">
          <span  class="w" @click='popupClick(totalData.jhpfqk)' v-html="totalData.jhpfqk"></span>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24" class="getHeight">人员签到情况</van-col>
      </van-row>

      <div class="imgBox">

        <div class="imgnow" v-for="(item ,index) in ryqdqkImgArr">
          <img v-bind:src="item.s" :alt="index" v-on:click="showBigImage($event)">
          <van-icon name="checked"  v-show="item.isShow==true"/>
          <van-icon name="clear"  v-show="item.isShow==false"/>
          <van-icon name="delete" @click="onDelete(1,index)" />
        </div>

        <!--权限-->
        <div class="addPhoto" @click='takePictureE(1,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")' v-if="totalData.editStatus==1">+</div>


        <!--<div class="addPhoto" @click='takePictureE(1,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")'>+</div>-->

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

          <span v-html="totalData.jhsfdx" v-if="totalData.editStatus==1" @click="changeValue($event)"></span>
          <span v-html="totalData.jhsfdx" v-else></span>

        </van-col>
      </van-row>

      <van-row>
        <van-col span="8" class="getHeight">计划兑现情况描述</van-col>
        <van-col span="16">
          <input type="text" @click='popupClick(totalData.jhdxqk)' v-model="totalData.jhdxqk" v-if="totalData.editStatus==1">
          <input type="text" @click='popupClick(totalData.jhdxqk)'v-model="totalData.jhdxqk" v-else readonly>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="24" class="getHeight">现场照片</van-col>
      </van-row>

      <div class="imgBox">
        <div class="imgnow" v-for="(item ,index) in zczpArr" >
          <img v-bind:src="item.s" :alt="index" v-on:click="showBigImage($event)">
          <van-icon name="checked"  v-show="item.isShow==true" />
          <van-icon name="clear"  v-show="item.isShow==false"/>
          <van-icon name="delete" @click="onDelete(2,index)" />
        </div>

        <div class="addPhoto" @click='takePictureE(2,true,"http://www.r93535.com/tljggxt/selfrun/selfruncon!saveFiles.action")' v-if="totalData.editStatus==1">+</div>

      </div>

      <van-row>
        <van-col span="8" class="getHeight">签到时间</van-col>
        <van-col span="16">
          <span style="display: inline-block;width: 140px;" @click='popupClick(totalData.qdsj)' v-html="totalData.qdsj"></span>
          <!--权限-->
          <button class="refreshBtn" @click="getCurrentPositionInfo()" v-if="totalData.editStatus==1">签到</button>

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

      <button id="save" @click="save()" v-if="totalData.editStatus==1">保存</button>

       <!--预览图片的盒子-->
      <div id="showBigImage" v-if="showBigImage" @click="showBigImageBox($event)" v-bind:style="{height:setHeight+'px'}">
        <img  v-bind:src="previewPicSrc" alt="" style="width:100%;"/>
      </div>
    </div>
    <p hidden>{{storeXmId}}</p>
  </div>
</template>
<script>
  // 引入组件

  import {Toast ,Dialog } from 'vant';
  import $ from 'jquery'
  import axios from 'axios';
  // 引入第三方,将字符串转换成base64
  import { Base64 } from '../../assets/js/Base64.js'


    export default {
      name: "listDetail",
      components: {
        Toast,Dialog
      },
      data(){
        return{
          domainName:'tljjgxt.r93535.com', // 域名
//          id:'', // 营业线数据id
          id:this.$store.getters.businessLineSearch.xmId,
          jwd:'', // ‘经度，纬度’ 保存字段
          ryqdbId:'', //人员签到表 保存字段
          xczpId:'', //现场照片 保存字段

          ryqdbIdArr:[], //人员签到表 桥梁作用
          xczpIdArr:[], //现场照片 桥梁作用

          // 测试用 ，保存的字段
          saveS:'',

          testTxt:'',
          // 拍照
          callBackParams:'',
          imgUrl:'',

          // 从照片中选择照片
          paramsCount:'',

          jhpfqkImgArr:[], // 计划批复情况
          ryqdqkImgArr:[], // 人员签到情况图片集合
          zczpArr:[], // 现场照片

          previewPicSrc:'', // 预览图片的src
          previewPicWidth:'', // 预览图片的宽
          previewPicHeight:'', // 预览图片的高

          testW:'',
          setHeight:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,/// 设置预览图片的盒子的高度=屏幕可视区域的高度

          xczp:[],// 现场照片：拍照和相册中选择的照片存放的数组

          checked: true,

//          3.12 原始

          baseuserid:this._GLOBAL.baseUserId,
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
//          this.getData();
          return this.$store.getters.businessLineSearch.xmId; // 返回点击项目的id
        },
      },
      methods:{
        //  关闭应用程序。调取JSAPI,关闭应用程序
        onClickRight(){
          RPM.closeApplication();
        },

        // 引入base64
        Base64:function () {
          Base64();
        },

        changeValue(event){
          var el = event.currentTarget;

          var s=el.innerText=='是'?'否':'是';

          this.totalData.jhsfdx= s;

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
              console.log("删除前的id数组为：" + JSON.stringify(this.ryqdbIdArr));
              this.ryqdbIdArr.splice(index,1);
              console.log("删除后的额的id数组为：" + JSON.stringify(this.ryqdbIdArr));

            }
            if (num===2){
              console.log('删除的对象为：' +JSON.stringify(this.zczpArr[index]));
              this.zczpArr.splice(index,1);

              // 删除对应图片的id
              this.xczpIdArr.splice(index,1);
            }

          }).catch(() => {
            console.log("点击取消按钮")
          });
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
        RPMPositionCallBack:function (params) { // 返回参数格式：'位置,经度,纬度'
          var arr =params.split(',');
          this.totalData.qddd=arr[0]; //当前位置

          // 取经纬度
          this.jwd = arr[1]+',' +arr[2];

          console.log("上传的经纬度为：" + this.jwd);
        },

        // 拍照的水印图片的回调函数，
        RPMImageCallBack:function (params,imageType,x,y) { // 参数一：base64;参数二：图片类型；参3：x轴,参4：y轴

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
              this.zczpArr.push(imgObj);
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
                this.zczpArr.push(imgObj);
                break;
              default:
                break;
            }

            this.xczp.push(obj);
          }

          this.paramsCount =a.length;
        },

        // android回传图片id的回调函数。参1：图片的id，参2:x轴；参3：y轴
        RPMImageIdCallBack(dataId,x,y){
          console.log("ndroid回传图片id，接收到的参数为：" + dataId+":"+x+':'+y);
          // 首先判断id是否为空。 为空时，显示叉号，非空时，显示对号。
          if (dataId !==''){ // 接收返回的图片id非空

            switch (x){
              case '1':
                // 将对应的图片的标识修改为true,图片的右上角显示对号
                this.ryqdqkImgArr[y-1].isShow = true;
                // 将图片id追加到数组中
                this.ryqdbIdArr.push(dataId);
                console.log('人员签到图片：' +  this.ryqdbIdArr.length);
                break;
              case '2':
                // 将对应的图片的标识修改为true,图片的右上角显示对号
                this.zczpArr[y-1].isShow = true;
                // 将图片id追加到数组中
                this.xczpIdArr.push(dataId);
                console.log('人员签到图片：' +  this.xczpIdArr.length);
                break;
              default:
                break;
            }

          }else { // 接收返回的图片id为空
            switch (x){
              case '1':
                // 将对应的图片的标识修改为true,图片的右上角显示对号
                this.ryqdqkImgArr[y-1].isShow = false;
                break;
              case '2':
                // 将对应的图片的标识修改为true,图片的右上角显示对号
                this.zczpArr[y-1].isShow = false;
                break;
              default:
                break;
            }
          }
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

          let  arrL;
          if(index==1){
            arrL = this.ryqdqkImgArr.length;
          }

          if (index==2){
            arrL = this.zczpArr.length;
          }

          this.sheetVisible = true; // 拍照或从相册中选择项目显示
          this.actions = [
            {
              name:'拍照',
              method :function () {

                // 调取JSAPI拍照事件,参数：1 表示原始照片；2 带水印照片
                // 参1：加水印照片；参2：标识位;参3：boolean 是否下载图片；参4：图片下载url;参5:页面现有照片的个数（长度）
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

        // 保存功能调取方法
        save(){


          console.log("清楚空元素之前的数据：" +JSON.stringify(this.ryqdbIdArr));
          for(var i = 0; i < this.ryqdbIdArr.length; i++) {
            if(this.ryqdbIdArr[i] == null|| this.ryqdbIdArr[i]=='' ||this.ryqdbIdArr[i]==undefined) {
              this.ryqdbIdArr.splice(i,1);
              i = i - 1; // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位，
                         // 这样才能真正去掉空元素,觉得这句可以删掉的连续为空试试，然后思考其中逻辑
            }
          }
          console.log("清楚空元素之后：" +JSON.stringify(this.ryqdbIdArr));

          console.log("清楚空元素之前的数据：" +JSON.stringify(this.xczpIdArr));
          for(var i = 0; i < this.xczpIdArr.length; i++) {
            if(this.xczpIdArr[i] == null|| this.xczpIdArr[i]=='' ||this.xczpIdArr[i]==undefined) {
              this.xczpIdArr.splice(i,1);
              i = i - 1; // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位，
                         // 这样才能真正去掉空元素,觉得这句可以删掉的连续为空试试，然后思考其中逻辑
            }
          }
          console.log("清楚空元素之后：" +JSON.stringify(this.xczpIdArr));

          // 将图片id数组转换成字符串
          var ryqdbId = this.ryqdbIdArr.join(',');
          var xczpId = this.xczpIdArr.join(',');

          console.log('拼接要保存的的数组id为' + ryqdbId);

          // 计划兑现情况,将汉字转换成数字字符串
          var jhsfdxS = this.totalData.jhsfdx === '是'?'1':'0'; // 注意：后台要求‘否’的情况，只能传‘0’，不能传空字符串。

          // 将需要保存的’汉字字符串字段’转换成base64形式保存到后台，处理的字段3个，包括：（人员签到情况描述、计划兑现情况描述、签到地点）。
          var base = new Base64();
          var qdddTemp = base.encode(this.totalData.qddd);  // 签到地点
          var dcryqkTemp = base.encode(this.totalData.dcryqk); // 计划兑现情况
          var jhdxqkTemp = base.encode(this.totalData.jhdxqk); // 计划兑现情况


          let url = 'http://tljjgxt.r93535.com/DayplanSaveServlet?id='+this.id+'&qddd='+qdddTemp+'&qdsj='+this.totalData.qdsj+'&jhdxqk='+jhdxqkTemp+'&jhsfdx='+jhsfdxS+'&dcryqk='+dcryqkTemp+'&ryqdb='+ ryqdbId+'&xczp='+xczpId+'&jwd='+this.jwd;

          this.$http.get(url).then((response) => {
            console.log("营业线保存成功：" + JSON.stringify(response));
            // 保存成功
            Toast(`保存成功`);
            // 跳转页面，返回首页
            this.$router.push({path: '/BusinessLine'});

          }, (response) => {
            console.log('error');
          });
        },
        onClickLeft(){

          // 清空历史数据，再次进入重新获取数据
          this.totalData.qddd='';
          this.totalData.qdsj='';
          this.totalData.jhdxqk='';
          this.totalData.jhsfdx='';
          this.totalData.dcryqk='';
          this.ryqdqkImgArr  =[];
          this.ryqdbIdArr=[];
          this.zczpArr  =[];
          this.xczpIdArr=[];
          this.jwd='';


          // 跳转页面，返回首页
          this.$router.push({path: '/BusinessLine'});

        },

        popupClick(txt) { // popup弹出层点击事件
          console.log("点击空格的内容为：" + txt);

          if (txt !=''){
            this.popupVisible = true;
            this.popupTxt = txt;
          }else {
            return;
          }

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
          let url = 'http://tljjgxt.r93535.com/YYXDayPlanUniqueServlet?id='+vm.id+'&baseuserId='+this._GLOBAL.baseUserId;
          vm.$http.get(url).then((response) => {
            vm.totalData = response.data;

            console.log('获取营业线的详情页面的数据--1：' + JSON.stringify(vm.totalData));
            console.log('获取营业线的详情页面--------2：' + JSON.stringify(vm.totalData.ryqdb));
            console.log('获取的详情页:现场照片--------3：' + JSON.stringify(vm.totalData.xczp));

            // 根据后台返回的图片id数据获取图片信息
            var ryqdbTempUrl ='http://rails.r93535.com/tljggxt/selfrun/selfruncon!getFilePath.action?fileId='+vm.totalData.ryqdb;
            var xczpTempUrl ='http://rails.r93535.com/tljggxt/selfrun/selfruncon!getFilePath.action?fileId='+vm.totalData.xczp;

            console.log('获取营业线的详情页面--------2url：' + ryqdbTempUrl);
            console.log('获取的详情页:现场照片--------3url：' + xczpTempUrl);

            // 将从接口拿到的id数据放进数组中
            var ryqdbT = vm.totalData.ryqdb.split(',');
            var xczpT = vm.totalData.xczp.split(',');

            for (var i=0;i<ryqdbT.length;i++){
              this.ryqdbIdArr.push(ryqdbT[i]);
            }

            for (var i=0;i<xczpT.length;i++){
              this.xczpIdArr.push(xczpT[i]);
            }
            // 请求人员签到表数据
            axios.get(ryqdbTempUrl).then(response => {
              console.log("图片url数据源22222：" +JSON.stringify( response.data));
              // 将接收到的id转换成数组形式
              var ryqdbTemp = response.data; //  4
//
              for (var i=0;i<ryqdbTemp.length;i++){
                console.log("图片的src:" +JSON.stringify( ryqdbTemp[i]));
                var index=i;

                /*
                *  // 将对应的图片的标识修改为true,图片的右上角显示对号
                this.ryqdqkImgArr[y-1].isShow = false;
                break;
              case '2':
                // 将对应的图片的标识修改为true,图片的右上角显示对号
                this.zczpArr[y-1].isShow = false;
                * */

                var imgObj={};
                imgObj.s = ryqdbTemp[index].fileAddr;
                imgObj.x=1;
                imgObj.y=index;

                if (ryqdbTemp[index].id==''){
                  imgObj.isShow=false;
                }else {
                  imgObj.isShow=true;
                }

                this.ryqdqkImgArr.push(imgObj);
              }
            }).catch(err => {
              console.error(err.message)
            })

            // 请求现场照片数据
            axios.get(xczpTempUrl).then(response => {
              console.log("图片url数据源3333：" +JSON.stringify( response.data));
              var xczpTemp = response.data; // 1


              console.log("拿回的图片数据为232：" + JSON.stringify(xczpTemp));

              for (var i=0;i<xczpTemp.length;i++){
                var index=i;
                var imgObj={};
                imgObj.s = xczpTemp[index].fileAddr;
                imgObj.x=2;
                imgObj.y=index;
                if (xczpTemp[index].id==''){
                  imgObj.isShow=false;
                }else {
                  imgObj.isShow=true;
                }

                this.zczpArr.push(imgObj);
              }
            }).catch(err => {
              console.error(err.message)
            })

            vm.totalData.jhsfdx = vm.totalData.jhsfdx === '1'?'是':'否';

            this.$nextTick(function(){
              console.log("$nextTick监听数据渲染完成之后的回调函数");
              var obj = $(".getHeight");
              for(var i=0;i<obj.length;i++){
                var h=$(obj[i]).height();
                $(obj[i]).siblings().css({
//                  'height':h+'px',
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

      }
    }
</script>


<style scoped>
  /*添加工作内容*/
  .workcontent{
    padding: 10px 15px;
  }
  textarea{
    border: 1px solid #ccc;
    margin-left: 6%;
    width: 88%;
    border-radius: 5px;
  }
  .addPhoto{
    display: inline-block;
    width:18%;
    margin-left:10px;
    margin-top:10px;
    height:70px;
    text-align: center;
    line-height:70px;
    color: #333;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size:30px;

    border:1px dashed #9c9c9c;
  }

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
    margin-left:1%;
    margin-top:10px;
    float: left;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .photoBox >img.photo{
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

  /* 设置头部 style start */
  .van-nav-bar{
    background: #2196F3;
    color: #fff;
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

  /*修改样式*/
  .van-col.wordBreak{
    line-height: 44px;
  }
</style>
