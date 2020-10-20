<template>
  <div class="collect">
    {{msg}}
    <!-- <tabBar></tabBar> -->
  </div>
</template>

<script>
  // import tabBar from '@/components/common/tab_bar.vue'
  export default {
    name: 'collect',
    data () {
      return {
        msg: '收藏'
      }
    },
    components: {
      // tabBar
    }
  }
</script>


</style>
