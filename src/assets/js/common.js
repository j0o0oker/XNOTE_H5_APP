 import Vue from 'vue';
 import toast from '../../components/common/toast.vue';
 import refresh from '../../components/common/refresh.vue';

let $j = new Object();

$j.name = 'a';




/*
*ui组件
*/
// 小提示
$j.toast = function () {

    let body = document.body;
    let toast_box = document.createElement('div')

    body.appendChild(toast_box)
    new Vue({
        render: (h) => {
          return h(
            toast,
            {
              props: {
                text: ''
              }
            }
          )
        }
      }).$mount(toast_box)
      setTimeout(function() {
        body.removeChild(document.getElementById('toast'));
      }, 1000)
}
$j.Jscroll = function(dom, options) {
      let refresh_box = document.createElement('div');
      dom.parentNode.insertBefore(refresh_box, dom);

      let isMoving = false;
      let opacity = 110;

      let startY, startX;
      function rerender() {
        new Vue({
            render: (h) => {
              return h(
                refresh,
                {
                  props: {
                    isMoving,
                    opacity
                  }
                }
              )
            }
          }).$mount(refresh_box);
      }
      rerender();
        dom.ontouchstart = function(e) {
          isMoving = true;
          // e.preventDefault();
          startY = e.touches[0].clientY;
          startX = e.touches[0].clientX;
        }
        dom.ontouchmove = function(e) {
          let curY = e.touches[0].clientY;
          let curX = e.touches[0].clientX;
          dom.style.top = (curY - startY) + 'px';
          opacity = dom.offsetTop;
          rerender()
          if (dom.offsetTop > 100) {
            dom.style.top = '100px';
          }
        }
        dom.ontouchend = function(e) {
          isMoving = false;
          let timer = setInterval(() => {
            opacity = dom.offsetTop;
            rerender();
            dom.style.top = dom.offsetTop - dom.offsetTop/2 + 'px';
            if (dom.offsetTop <= 1) {
              dom.style.top = 0;
              clearInterval(timer);
            }
          }, 100)
        }
      }


let export_name = $j;

// module.exports = {
//   $j
// }
export {
  $j
}
