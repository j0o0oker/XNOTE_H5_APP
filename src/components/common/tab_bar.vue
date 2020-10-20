<template>
  <div id="app">
    <router-view></router-view>
    <transition name="publish">
      <div class="publish-wrap" v-if="isPublishBtnShow" @click="onPublishWrapClick">
        <div class="jui-grid">
          <div class="jui-row">
            <transition name="publishbtn" v-if="isPublishBtnShow">
              <div class="jui-col jui-col-4">
                <div class="icon-wrap" @click.stop="toPublish">
                  <i class="iconfont">&#xe61f;</i>
                </div>
                <span class="title">写笔记</span>
              </div>
            </transition>
            <transition name="publishbtn" v-if="isPublishBtnShow">
              <div class="jui-col jui-col-4">
                <div class="icon-wrap">
                  <i class="iconfont">&#xe61f;</i>
                </div>
                <span class="title">写笔记</span>
              </div>
            </transition>
            <transition name="publishbtn" v-if="isPublishBtnShow">
              <div class="jui-col jui-col-4">
                <div class="icon-wrap">
                  <i class="iconfont">&#xe61f;</i>
                </div>
                <span class="title">写笔记</span>
              </div>
            </transition>
            <transition name="publishbtn" v-if="isPublishBtnShow">
              <div class="jui-col jui-col-4">
                <div class="icon-wrap">
                  <i class="iconfont">&#xe61f;</i>
                </div>
                <span class="title">写笔记</span>
              </div>
            </transition>
          </div>
        </div>
        <div class="close-btn">
          <i class="iconfont">&#xe60d;</i>
        </div>
        <div class="arrow-down"></div>
      </div>
    </transition>
    <div class="tab-bar" v-if="isTabBarShow">
      <router-link to="/note" class="tab-bar-item" :class="{'tab-bar-item-active': curActiveIndex == 0}" @click.native="onTabBarItemClick(0)">
        <i class="icon iconfont">&#xe635;</i>
        <span>笔记</span>
      </router-link>
      <router-link to="/collect" class="tab-bar-item"  :class="{'tab-bar-item-active': curActiveIndex == 1}" @click.native="onTabBarItemClick(1)">
        <i class="icon iconfont">&#xe66f;</i>
        <span>收藏</span>
      </router-link>
     <!-- <router-link to="/publish" class="publish-btn">
        <i class="icon iconfont">&#xe60d;</i>
      </router-link> -->

      <div class="publish-btn" @click="onPublishBtnClick">
        <i class="icon iconfont">&#xe60d;</i>
      </div>
      <router-link to="/message" class="tab-bar-item"  :class="{'tab-bar-item-active': curActiveIndex == 3}" @click.native="onTabBarItemClick(3)">
        <i class="icon iconfont">&#xe6a8;</i>
        <span>留言</span>
      </router-link>
      <router-link to="/mine" class="tab-bar-item"  :class="{'tab-bar-item-active': curActiveIndex == 4}" @click.native ="onTabBarItemClick(4)">
        <i class="icon iconfont">&#xe62f;</i>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import note from '@/components/note'
  import message from '@/components/message'
  import mine from '@/components/mine'
  import publish from '@/components/publish'
  import collect from '@/components/collect'
  import Router from 'vue-router'

  const routes = [
    { name: 'note', path: '/note', component: note},
    { name: 'message', path: '/message', component: message},
    { name: 'mine',path: '/mine', component: mine},
    { name: 'collect',path: '/collect', component: collect},
    { name: 'publish', path: '/publish', component: publish}
  ]
  const router = new Router({
    routes
  })


  export default {
    name: 'App',
    data: function() {
      return {
        msg: 'note',
        curActiveIndex: 0,
        isPublishBtnShow: false,
        isTabBarShow: true
      }
    },
    created: function () {
      var _this = this;
       router.beforeEach((to, from, next) => {
         console.log(to.name);
         if (to.name == 'note'|| to.name == 'collect' || to.name == 'message')  {
           _this.isTabBarShow = true;
           next();
         }else {
           _this.isTabBarShow = false;
           next();
         }
       })
    },
    methods: {
      onTabBarItemClick: function(index) {
        this.curActiveIndex = index;
      },
      onPublishBtnClick: function () {
        this.isPublishBtnShow = true;
        this.isTabBarShow = false;
      },
      toPublish: function () {
        this.isPublishBtnShow = false;
        this.$router.push({ name:'publish'});
      },
      onPublishWrapClick() {
        this.isPublishBtnShow = false;
        this.isTabBarShow = true;
      }
    },
    router: router

  }
</script>



<style scoped lang="scss">
  $main-color: #0088ff;
  $tab-bar-height: 3rem;
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .tab-bar {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: $tab-bar-height;
    border-top: 2px solid #ccc;
    font-size: .8rem;
    background-color: #fff;
  }
  .tab-bar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #cdd0d3;
  }
  .tab-bar-item-active {
    color: $main-color;
  }
  .icon  {
    display: block;
    font-size: 1.2rem;
  }
  .publish-btn {
    position: relative;
    top: -1rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 1.2rem;
    line-height: 2.4rem;
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
    background-color: $main-color;

  }
  .publish-wrap {
    position: absolute;
    // bottom: 4.8rem;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding-bottom: 3rem;
    color: #000;
    background-color: rgba(255, 255, 255, .96);
    // .arrow-down {
    //   position: absolute;
    //   bottom: -.8rem;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   width: 0;
    //   height: 0;
    //   border-width:  .8rem .8rem 0;
    //   border-style: solid;
    //   border-color: $main-color transparent transparent ;
    // }
    .jui-col {
      &:nth-child(1) {
        animation: jumpDuang 1s .2s ease-in-out 1;
        .icon-wrap {
          background-image: linear-gradient(135deg, #33d6ff, #4db5f4);
        }
      }
      &:nth-child(2) {
        animation: jumpDuang 1s .3s ease-in-out 1;
        .icon-wrap {
          background-image: linear-gradient(135deg, #de8c90, #f16b74);
        }
      }
      &:nth-child(3) {
        animation: jumpDuang 1s .4s ease-in-out 1;
        .icon-wrap {
          background-image: linear-gradient(135deg, #3cd1a7, #00c091);
        }
      }
      &:nth-child(4) {
        animation: jumpDuang 1s .5s ease-in-out 1;
        .icon-wrap {
          background-image: linear-gradient(135deg, #c391c6, #f546ff);
        }
      }
    }
    @keyframes jumpDuang {
      0% {
        // position: relative;
        // top: 10px;
        // transform: translate(0,30px);
      }
      25% {
        transform: translate(0,-20px);
      }
      100% {
        // position: relative;
        // top: 150px;
        transform: translate(0,0px);
      }
    }
    .icon-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      color: #fff;
      .iconfont {
        font-size: 1rem!important;
      }
    }
    .title {
      margin-top: .75rem;
      font-size: .8rem;
    }
    .close-btn {
      width: 1rem;
      height: 1rem;
      margin: 0 auto;
      margin-top: 1rem;
      font-size: 1rem;
      text-align: center;
      transform: rotate(45deg);
    }
  }
.publish-enter, .publish-leave-to{
    opacity: .6;
    transition: all .5s ease;

}
.publish-enter-active, .publish-leave-active{
    transition: all .5s ease;
}

.publishbtn-enter, .publishbtn-leave-to{
    opacity: .6;
    transform: translate(0,150px);
    transition: all 1.5s ease;

}
.publishbtn-enter-active, .publishbtn-leave-active{
    transition: all 1.5s ease;
}


</style>
