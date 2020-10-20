<template>
  <div id="app">
	  <index></index>
  </div>
</template>

<script>
  import index from '@/components/index.vue'

  export default {
    name: 'App',
    data: function() {
      return {
      }
    },
    methods: {

    },
    components: {
      index
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
