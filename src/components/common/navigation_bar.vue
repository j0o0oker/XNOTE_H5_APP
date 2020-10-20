<template>
  <div class="navigation-bar">
    <i class="iconfont left-btn" @click="onLeftBtnClick">&#xe65c;</i>
    <span class="title">{{nav_title}}</span>
    <i class="iconfont left-btn" @click="onRightBtnClick">&#xe60d;</i>
  </div>
</template>

<script>

  export default {
    name: "navigation-bar",
    props: {
      title: {
        type: String,
        default: '标题'
      }
    },
    data: function () {
      return {
        nav_title: this.title
      }
    },
    created: function () {
    },
    mounted: function () {

    },
    methods: {
      onLeftBtnClick() {
        this.$router.back();
      },
      onRightBtnClick() {
        this.$j.toast();
      }
    },
    components: {
    }
  }
</script>

<style scoped lang="scss">
  .navigation-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.5rem;
    padding: .25rem .5rem;
    border-bottom: 1px solid #ccc;
    font-size: .75rem;
    background-color: #fff;
  }
  .iconfont {
    font-size: 1rem;
  }
  .left-btn {
    color: #000;
  }
</style>
