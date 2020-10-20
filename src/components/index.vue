<template>
  <div id="app">
	  <tabBar></tabBar>
  </div>
</template>

<script>
  import tabBar from '@/components/common/tab_bar.vue'

  export default {
    name: 'App',
    data: function() {
      return {
      }
    },
    methods: {

    },
    components: {
      tabBar
    }
  }
</script>



<style>
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 20px;
  }

</style>
