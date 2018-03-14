(function(){

    "use strict";

    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var e = {};

    isiOS==true?true:false;

    e.scanClick=function () { // 调摄像头实现扫描功能
        isiOS?loadURL("scanClick:scanClick"):androidObject.scan();
    };

    e.takePicture=function (num,index,bo,url) { // 调相机实现拍照功能
      console.log("jsApi拍照函数被调用："+ num +'-'+index);
        isiOS? loadURL("takePicture:takePicture:"+num+":"+index+':'+bo+':'+url):androidObject.photo(num,index,bo,url);
    };
    // 获取位置信息
    e.getCurrentPositionInfo=function () {
      console.log("获取位置信息调取方法");
      isiOS? loadURL("getCurrentPositionInfo:getCurrentPositionInfo:39.992520,116.336170,描述0;39.992520,116.336170,描述1;39.998293,116.352343,描述2;40.0040871,16.348904,描述3;40.001442, 116.353915,描述4;39.989105,116.353915,描述5;43.989105,119.353915,描述6"):androidObject.getCurrentPositionInfo();
    };

    e.selectPhotos=function (num,index,bo,url) { // 从相册中选择照片
      console.log("jsApi从相册中选择照片函数被调用："+ num +'-'+index);
        isiOS? loadURL("selectPhotos:selectPhotos:"+num+":"+index+':'+bo+':'+url):androidObject.selectPhoto(num,index,bo,url);
    };

    function loadURL(url) {
        var iFrame;
        iFrame = document.createElement("iframe");
        iFrame.setAttribute("src", url);
        iFrame.setAttribute("style", "display:none;");
        iFrame.setAttribute("height", "0px");
        iFrame.setAttribute("width", "0px");
        iFrame.setAttribute("frameborder", "0");
        document.body.appendChild(iFrame);
        // 发起请求后这个 iFrame 就没用了，所以把它从 dom 上移除掉
        iFrame.parentNode.removeChild(iFrame);
        iFrame = null;
    }

    this.RPM=e;

}).call(window);

