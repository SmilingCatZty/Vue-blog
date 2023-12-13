<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Waves from '@/components/layout/wave.comp.vue'
import HomeLeft from './components/HomeLeft.vue'
import HomeRight from './components/HomeRight.vue'

let isFixed = ref<boolean>(false) // 右侧栏围是否为固定定位
const homeMainRef = ref<HTMLElement>()

// 背景图列表
const imgList = ref<string[]>([
  'http://43.138.109.120:9000/avatar/db65e35d7441ea7e58c17288b15beecd.jpg',
  'http://43.138.109.120:9000/avatar/f1383bb237d5bcc338a6c35e002c1109.jpg',
  'http://43.138.109.120:9000/avatar/55b4c83af0c708baea3473377db15b0f.jpg'
])

const handleScroll = () => {
  const heightFromTop = homeMainRef.value?.getBoundingClientRect()
  if (heightFromTop) isFixed.value = heightFromTop.top <= 0 ? true : false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="home" ref="homeRef">
    <header class="home-header bg-gray-500">
      <div class="header-imgs">
        <ul>
          <li
            v-for="(img, index) in imgList"
            :key="index"
            :style="{
              backgroundImage: `url(${img})`,
              animationDelay: index === 0 ? '0s' : `${5 * index}s`,
              animationDuration: `${10 * imgList.length}s`
            }"
          />
        </ul>
      </div>
      <div class="header-title">
        <h1 class="text-8xl font-bold text-center text-white">Smiling Cat Blog</h1>
      </div>
      <Waves />
    </header>
    <main ref="homeMainRef" class="home-main bg-slate-50">
      <div class="main-content">
        <!-- 主体左侧 -->
        <div class="main-left">
          <HomeLeft :style="{ width: '100%' }" />
        </div>
        <!-- 主体右侧 -->
        <div class="w-1/4 h-auto card bg-grey-50 flex items-start ml-5">
          <div class="main-right-contain w-full sticky top-5">
            <HomeRight />
          </div>
        </div>
      </div>
    </main>
    <footer class="home bg-orange-200"></footer>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'Rainbow-Party-2';
  src: url('@/assets/font/Rainbow-Party-2.ttf');
  font-weight: normal;
  font-style: normal;
}
.home {
  margin: 0;
  padding: 0;
}
.home-header {
  height: 100vh;
  position: relative;
  z-index: 1;

  .header-imgs {
    z-index: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;

    ul {
      position: relative;
      height: 100%;

      li {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        animation-name: home-img_swipper;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        // animation-fill-mode: both;
        backface-visibility: hidden;
        transform-style: preserve-3d;
      }
    }
  }

  .header-title {
    font-family: Rainbow-Party-2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.home-main {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;

  .main-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 85%;

    .main-left {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
    }

    .main-right-fixed {
      position: fixed;
    }
  }
}

@keyframes home-img_swipper {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  2% {
    opacity: 1;
  }
  8% {
    opacity: 1;
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }
  17% {
    opacity: 1;
    transform: scale(1.1);
  }
  25% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
  }
}
</style>
