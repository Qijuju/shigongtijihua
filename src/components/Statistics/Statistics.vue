<template>
  <div class="statistics">



  </div>
</template>

<script>

  export default {
    data() {
      return {

        show: false,
        options: [
          {text: '現金購買'},
          {text: '抵押購買'}
        ],
        selected: 0,

      }
    },
    methods: {
      showClick() {
        this.show = !this.show
      },
      select(index) {
        this.selected = index
      }
    }
  };


</script>

<style scoped>



</style>
