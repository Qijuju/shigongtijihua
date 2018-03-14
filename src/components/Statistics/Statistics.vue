<template>
  <div class="statistics">

    <van-radio name="2" v-model="radio">单选框 1</van-radio>
    <van-radio name="1" v-model="radio">单选框 2</van-radio>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        radio: '0'
      }
    }
  };


</script>

<style scoped>

</style>
