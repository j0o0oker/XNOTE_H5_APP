<template>
  <div class="refresh" ref="refresh">
    <div class="model" ref="model"></div>
    <img class="img" src="../../assets/images/common/refresh_01.png">
    <span>{{random_str}}</span>
  </div>
</template>

<script>
  export default {
    name: 'refresh',
    data: function() {
      return {
        myOpacity: this.opacity,
        random_arry: ['刷','你再刷','你再刷一个试试','hh','2233','emmm','QAQ','嘤嘤嘤','略略略','嘻嘻嘻','biubiu~'],
        random_str: '刷新'
      }
    },
    props: {
      opacity: {
        type: Number,
        default: 0
      },
      isMoving: {
        type: Boolean,
        default: false
      }
    },
    created() {
    },
    mounted() {
      this.$refs.model.style.backgroundColor = 'rgba(0, 0, 0, '+ 10/this.myOpacity +')';
      // console.log(this.$refs.model.style.backgroundColor);
    },
    computed:{

    },
    watch:{
      opacity: {
        handler() {
            // let timer = setInterval(() => {
            //   if (this.$refs.model) {
            //     this.myOpacity = this.opacity;
            //     this.$refs.model.style.backgroundColor = 'rgba(0, 0, 0, '+ 10/this.myOpacity +')';
            //     console.log(this.$refs.model.style.backgroundColor);
            //     this.cmputed_random_str();
            //     clearInterval(timer);
            //   }
            // },100);
            // console.log(this.opacity);
            if (this.$refs.model) {
              this.myOpacity = this.opacity;
              this.$refs.model.style.backgroundColor = 'rgba(0, 0, 0, '+ 10/this.myOpacity +')';
              console.log(this.$refs.model.style.backgroundColor);
              this.cmputed_random_str();
              clearInterval(timer);
            }
        },
        immediate: true,
        deep: true,

      },
      isMoving() {

      }
    },
    methods: {
      cmputed_random_str() {
        if (!this.isMoving) {
          let random_num = Math.floor(Math.random() * 10);
          this.random_str = this.random_arry[random_num];
        }

      }
    }
  }
</script>

<style scoped lang="scss">
  .refresh {
    // position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
    color: fff;
    // background-color: rgba(0, 0, 0, 1);
    z-index: 1;
    // opacity: 0;
    .model {
      position: absolute;
      // width: 100%;
      height: 100px;
      // background-color: rgba(0, 0, 0, 1);
    }
    .img {
      margin-right: 1rem;
    }
  }
</style>
