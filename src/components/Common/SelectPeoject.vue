<template>
  <div class="selectProject">
    <div id="wrapProject">
      <div id="innerWrapProject" :style="{'width':width+'px'}">
        <div class="scrollProject" v-for="item in projects" @click="changeItem($event,item)">
          {{item.xmmc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  import { Button } from 'vant';
  import $ from 'jquery'

  // 文档加载完成后设置元素的宽度
  $(function () {
    var screenW = $(window).width(); // 获取屏幕的宽度
    $("#wrapProject").width(screenW);// 设置外层盒子宽度==屏幕宽度
    $("#innerWrapProject").addClass('bg');

  })

  export default {
    props:{
      projects: Array ,//这样可以指定传入的类型，如果类型不对，会警告
      count:Number
    },
    name: "selectProject",
    components: {
      Button
    },
    data(){
      return{
        show:false,
        proCount:this.count // 通过props 传值
      }
    },
    computed:{
      width(){
        return this.count*130 // 动态设置宽度
      }
    },
    methods: {
      changeItem(e,item) { // 点击项目的触发函数
        // 改变背景色
        $(e.target).addClass("bg").siblings().removeClass("bg");

        // 将项目名称存储到store
        this.$store.commit('setSelectProjectObj',{selectProjectObj:item});
      }
    }
  }
</script>

<style scoped>
  #wrapProject{
    position: relative;
    top: 0px;
    left:0;
    /*width:100%;*/
    height:100px;
    margin:0 auto;
    overflow: scroll;
    z-index: 99;
    overflow: scroll;
    background: #E5F2FA;
  }
  #innerWrapProject{
    height:100%;
  }
  #innerWrapProject .scrollProject{
    float: left;
    width:120px;
    height:90px;
    text-align: center;
    margin:0 5px;
    padding:5px;
    border-radius:10px;
    color: #fff;
    background: #59C13A
  }
  #innerWrapProject .scrollProject.bg{
    background-color: #FF4A58;
  }
  /* 隐藏滚动条 */
  ::-webkit-scrollbar{
    display:none;
  }
</style>
