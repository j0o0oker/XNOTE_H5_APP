<template>
  <div class="note" >
    <!-- <refresh
    :opacity="opacity"
    :isMoving="isMoving"
    ></refresh> -->
    <div class="main-content" ref="note">
      <div class="note-card" v-for="(item, index) in 12" :key="index">
        <div class="title">标题</div>
        <div class="time">2020/9/15</div>
        <div class="content">测试测试测试测试</div>
      </div>
    </div>
  </div>
</template>

<script>
  import refresh from '@/components/common/refresh.vue'
  export default {
    name: 'note',
    data () {
      return {
        msg: '笔记',
        opacity: 1011,
        isMoving: false
      }
    },
    mounted() {
      let options = {
        height: 100
      }
      this.$j.Jscroll(this.$refs.note, options)
    },
    methods: {
      Jscroll(dom, options) {
        var _this = this;
        console.log(options);
        let startY, startX;
        dom.ontouchstart = function(e) {
          _this.isMoving = true;
          e.preventDefault();
          startY = e.touches[0].clientY;
          startX = e.touches[0].clientX;
        }
        dom.ontouchmove = function(e) {
          e.preventDefault();
          let curY = e.touches[0].clientY;
          let curX = e.touches[0].clientX;
          dom.style.top = (curY - startY) + 'px';
          _this.opacity = dom.offsetTop;
          if (dom.offsetTop > 100) {
            dom.style.top = '100px';
          }
        }
        dom.ontouchend = function(e) {
          _this.isMoving = false;
          let timer = setInterval(() => {
            _this.opacity = dom.offsetTop;
            dom.style.top = dom.offsetTop - dom.offsetTop/2 + 'px';
            if (dom.offsetTop <= 1) {
              dom.style.top = 0;
              clearInterval(timer);
            }
          }, 100)
        }
      }
    },
    components: {
      refresh
    }
  }
</script>
<style lang="scss">
  .note::-webkit-scrollbar {
  	display:none;
  }
  .note {
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 3rem);
    padding: .5rem;
    background-color: #f0f0f0;
    overflow-y: scroll;
    // firefox scroll bar hiden
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
    .main-content {
      position: absolute;
      display: block;
      box-sizing: border-box;
      width: calc(100% - 1rem);
      .note-card {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: .5rem;
        padding: 1rem;
        border-radius: .25rem;
        background-color: #fff;
        background-image: url(../assets/images/note/bg_2.jpg);
        // @for $i from 1 through 5 {
        //     $temp: $i % 2;
        //     &:nth-child(#{$i}) {
        //       background-image:url("../assets/images/note/bg_#{$temp}.jpg");
        //     }
        // }

        background-repeat: no-repeat;
        background-size: 100% 100%;
        .title {
          color: #ff7f21;
        }
        .time {
          display: flex;
          align-items: center;
          margin: .5rem 0;
          font-size: .8rem;
          color: #42b983;
          &::before {
            content: '';
            display: inline-block;
            width: .8rem;
            height: .8rem;
            margin-right: .5rem;
            animation: timeball 1s ease-in-out infinite;
          }
          @keyframes timeball {
            0% {
              border-radius: 0%;
              background-color: #ffff00;
              transform: scale(20%, 20%);
              transform: translateX(0);
            }
            25% {
              border-radius: 50%;
              background-color: #ff55ff;
              transform: scale(100%, 100%);
              transform: translateX(90deg);
            }
            50% {
              border-radius: 0%;
              transform: scale(20%, 20%);
              transform: translateX(180deg);
            }
            75% {
              border-radius: 50%;
              background-color: #0055ff;
              transform: scale(100%, 100%);
              transform: translateX(270deg);
            }
            100% {
              border-radius: 50%;
              background-color: #42b983;
              transform: scale(100%, 100%);
              transform: translateX(270deg);
            }
          }
        }
        .content {
          font-size: .75rem;
        }
      }

    }
  }
</style>
