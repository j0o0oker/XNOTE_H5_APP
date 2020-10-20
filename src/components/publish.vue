<template>
  <div class="publish">
    <navBar :title="nav_title"></navBar>
  </div>
</template>

<script>

  import navBar from './common/navigation_bar.vue'

export default {
  name: 'publish',
  data: function () {
    return {
      nav_title: '写文章'
    }
  },
  components: {
    navBar
  }
}
</script>

<style>

</style>
