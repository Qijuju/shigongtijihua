<template>
  <div class="statistics">
    <p>待开发</p>
    <a href="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520996380&di=a3687696b55ac568b64430dce4c1aeaf&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F48540923dd54564ee177f739b9de9c82d1584f9b.jpg" download="downImg">下载图片</a>

    <br/><br/><br/>
    <a href="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1520393452&di=fcc9d03d613da51f63c46f09f7e7ef28&src=http://attimg.dospy.com/img/day_100711/20100711_a45f5ecbbf9a7f3493b0T4t8LFe86N32.png" download="downImg">下载图片2</a>

    <br/><br/><br/>

    <a href="https://cdn.jsdelivr.net/npm/vue" download="downfile">下载文件23</a>

  </div>

  <!--<div>-->
    <!--&lt;!&ndash; 图片上传 &ndash;&gt;-->
    <!--<image-upload-->
      <!--class="image-upload"-->
      <!--ref='imgaeUpload'-->
      <!--:url='http://XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'-->
      <!--:touch-size = 1-->
      <!--:multiple = true-->
      <!--:lrz-options = {width:1024}-->
      <!--field-name = 'serverImgFile'-->
      <!--:data = {}-->
      <!--:max-count = 10-->
      <!--@chooseImages='bindtap_chooseImages'-->
    <!--/>-->

    <!--&lt;!&ndash; 图片预览 &ndash;&gt;-->
    <!--<image-preview-->
      <!--style="z-index:200"-->
      <!--:images="preImages"-->
      <!--v-model="index"-->
      <!--:numIsShow="true"-->
      <!--:deleteIsShow="true"-->
      <!--@delete="bindtap_delete"-->
    <!--/>-->

  <!--</div>-->
</template>

<script>
  import {ImageUpload,ImagePreview} from 'vue-image-upload-preview'

  export default{
    name:'statistics',
    components:{
      'image-preview':ImagePreview,
      'image-upload' :ImageUpload
    },
    data() {
      return {
        index: -1,
        images: []
      }
    },
    computed:{
      preImages() {
        return this.images.map(v=>{return v.src});
      }
    },
    methods:{
      uploadImg(){
//        this.$refs.imgaeUpload.uploadImages(this.images)
//          .then(res => {
//          ...
//          }).catch(res => {
//        ...
//        })
      },

    }
  }
</script>

<style scoped>


</style>
