<script lang="ts" setup>
import { ref } from 'vue'

// 背景图列表
const imgList = ref<string[]>([
  'http://43.138.109.120:9000/avatar/db65e35d7441ea7e58c17288b15beecd.jpg',
  'http://43.138.109.120:9000/avatar/f1383bb237d5bcc338a6c35e002c1109.jpg',
  'http://43.138.109.120:9000/avatar/55b4c83af0c708baea3473377db15b0f.jpg'
])

// 日志列表
const blogList = ref<any[]>([
  {
    title: '我是日志1',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    author: '0422'
  },
  {
    title: '我是日志2',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    author: '0423'
  },
  {
    title: '我是日志3',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    author: '0424'
  }
])
</script>

<template>
  <div class="home">
    <header class="home-header">
      <div class="header-imgs">
        <ul>
          <li
            v-for="(img, index) in imgList"
            :key="index"
            :style="{
              backgroundImage: `url(${img})`,
              animationDelay: `${index * 5}s`,
              animationDuration: `${5 * imgList.length}s`
            }"
          />
        </ul>
      </div>
      <div class="header-title">
        <h1 class="text-4xl">Smiling Cat Blog</h1>
      </div>
    </header>
    <main class="home-main bg-slate-50">
      <div class="main-content">
        <div class="main-left">
          <ul>
            <li
              class="left-blog card mt-4 shadow-lg bg-slate-300"
              v-for="(blog, index) in blogList"
              :key="index"
            >
              <div class=""></div>
            </li>
          </ul>
        </div>
        <div class="card bg-slate-400 main-right"></div>
      </div>
    </main>
    <footer class="home"></footer>
  </div>
</template>

<style lang="scss" scoped>
.home-header {
  height: 100vh;
  position: relative;
  z-index: 1;

  .header-imgs {
    height: 100%;

    ul {
      height: 100%;
      box-sizing: border-box;

      li {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        animation-name: home-img_swipper;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        backface-visibility: hidden;
        transform-style: preserve-3d;
      }
    }
  }

  .header-title {
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
    width: 85%;

    .main-left {
      width: 70%;
      display: flex;

      .left-blog {
        width: 100%;
        height: 200px;
      }
    }

    .main-right {
      display: flex;
      position: sticky;
      top: 20px;
      align-items: flex-start;
      justify-content: center;
      width: 25%;
      margin: 0 auto;
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
