<template>
  <div class="statistics">

    <div class="photos">
      <h1>测试图片</h1>
      {{strTotal}}

    </div>

  </div>
</template>

<script>

  export default{
    name:'statistics',
    data() {
      return {

        str:'',
        strTotal:'<img src="" alt="logo">'
      }
    },
    methods:{

    }
  }



</script>

<style scoped>

</style>
