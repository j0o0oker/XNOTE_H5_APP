<template>
  <div class="toast" id="toast">
    <div class="main-content">
      <i class="iconfont icon">&#xe65c;</i>
      <span>{{fromtMsg}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    props: {
      msg: {
        type: String,
        default: '提示文字'
      }
    },
    data() {
      return {
        fromtMsg: this.msg
      }
    }
  }
</script>

<style scoped lang="scss">
  body, html {
    position: absolute;
    height: 100%;
  }
  .toast {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    .main-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 5rem;
      height: 5rem;
      padding: .5rem;
      border-radius: .25rem;
      font-size: .9rem;
      color: #fff;
      background-color: rgba(0, 0, 0, .8);
      .icon {
        margin-bottom: 1rem;
        font-size: 2rem;
      }
    }
  }
</style>
