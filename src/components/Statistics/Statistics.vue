<template>
  <div class="statistics">
    <p>统计模块，待开发</p>
    <!--<ul-->
      <!--v-waterfall-lower="loadMore"-->
      <!--v-waterfall-upper="refreshData"-->
      <!--waterfall-disabled="disabled"-->
      <!--waterfall-offset="400"-->
    <!--&gt;-->
      <!--<li v-for="item in list">{{ item }}</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import { Waterfall } from 'vant';

  export default{
    name:'statistics',
    directives: {
      /*WaterfallLower: Waterfall('lower'),
      WaterfallUpper: Waterfall('upper')*/
    },
    data(){
      return {
        /*list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        disabled: false*/
      }
    },
    components:{
    },
    methods: {
      /*refreshData(){
        this.disabled = true;
        setTimeout(() => {
          this.list = ['a','b','c','d','e','f','g','h','i','j','k','l'];
          this.disabled = false;
        }, 200);

      },
      loadMore(){
        this.disabled = true;
        setTimeout(() => {
          for (let i = 0; i < 5; i++) {
            this.list.push(this.list.length);
          }
          this.disabled = false;
        }, 200);
      }*/
    }
  }
</script>

<style>
/*  ul li{
    height:60px;
    line-height:60px;
    border-bottom:1px solid #ccc;
  }*/

</style>
