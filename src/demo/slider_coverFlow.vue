<style lang="sass">
@import "../utils/common.scss"
</style>
<template>
  <div>
    <div style="width:70%;margin:20px auto;height:400px">
      <slider ref="slider" :pages="someList" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
        <div slot="loading">
          <div class="loadingDot">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </slider>
    </div>
    <div class="sliderButton">
      <button @click="slidePre">上一页/pre</button>
      <button @click="slideNext">下一页/next</button>
      <button @click="appendslider">添加一页/append</button>
      <button @click="turnTo(2)">跳转到第三页/turnTo</button>
      <button @click="autoplayStart">启动自动滚动/autoplayStart</button>
      <button @click="autoplayStop">停止自动滚动/autoplayStop</button>
      <button @click="loadingShow">loading显示/loadingShow</button>
      <button @click="loadingHide">loading关闭/loadingHide</button>
    </div>
  </div>
</template>
<script>
import slider from '../components/slider'
export default {
  el: '#slidercoverFlow',
  data () {
    return {
      someList: [],
      sliderinit: {
        effect: 'coverflow',
        currentPage: 1,
        tracking: false,
        thresholdDistance: 100, // 滑动距离阈值判定
        thresholdTime: 300, // 滑动时间阈值判定
        deviation: 200, // 偏移值
        widthScalingRatio: 0.8, // 宽度缩放比例
        heightScalingRatio: 0.8, // 高度缩放比例
        infinite: 2, // 多级滚动时，需要添加前后遍历数
        slidesToScroll: 1, // 需要滚动页面的数量
        loop: true // 无限循环
        // autoplay: 1000 // 自动播放:时间[ms]
      }
    }
  },
  components: {
    slider
  },
  mounted () {
    let that = this
    setTimeout(function () {
      that.someList = [
        {
          html: 'slide1',
          style: {
            'background': '#1bbc9b',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slide2',
          style: {
            'background': '#4bbfc3',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slide3',
          style: {
            'background': '#7baabe',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slide4',
          style: {
            'background': '#1bbc9b',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slide5',
          style: {
            'background': '#4bbfc3',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slide6',
          style: {
            'background': '#7baabe',
            'width': '33.33333333%'
          }
        }
      ]
    }, 2000)
  },
  methods: {
    turnTo (num) {
      // 传递事件 vue 2.0 传递事件修改了，好的写法应该直接写在空vue类中
      this.$refs.slider.$emit('slideTo', num)
    },
    slideNext () {
      this.$refs.slider.$emit('slideNext')
      // slider.$emit('slideNext')
    },
    slidePre () {
      this.$refs.slider.$emit('slidePre')
      // slider.$emit('slidePre')
    },
    autoplayStart () {
      this.$refs.slider.$emit('autoplayStart')
      // slider.$emit('slidePre')
    },
    autoplayStop () {
      this.$refs.slider.$emit('autoplayStop')
      // slider.$emit('slidePre')
    },
    appendslider () {
      this.someList.push({
        html: 'slidernew',
        style: {
          background: '#333',
          color: '#fff',
          width: '23.5%',
          'margin-right': '2%'
        }
      })
    },
    loadingShow () {
      this.$refs.slider.$emit('loadingShow')
      // slider.$emit('slidePre')
    },
    loadingHide () {
      this.$refs.slider.$emit('loadingHide')
      // slider.$emit('slidePre')
    },
    // 监听事件发生了变化,需要指向一个子组件实例
    slide (data) {
      console.log(data)
    },
    onTap (data) {
      console.log(data)
    },
    onInit (data) {
      console.log(data)
    }
  }
}
</script>
