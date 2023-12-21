<script lang="ts" setup>
import { BackTop } from 'vant'
import { ref, onMounted } from 'vue'

let scrollCat = ref<any>(null)

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 使用平滑滚动效果
    // speed:100,
  })
}

const handleScroll = (): void => {
  if (window.pageYOffset >= 200) {
    ;(document.querySelector('.back-to-top') as HTMLElement).style.top = '0'
  } else {
    ;(document.querySelector('.back-to-top') as HTMLElement).style.top = '-999px'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="scrollCat" class="back-to-top fixed right-3 -top-full z-10">
    <img class="h-full top-img" src="@/assets/image/scroll-cat.gif" alt="" />
    <div class="top-occupation cursor-pointer" @click="backToTop"></div>
  </div>
</template>

<style lang="scss" scoped>
.back-to-top {
  height: 80vh;
  transition: all 0.5s ease-in-out;
  .top-img {
    position: relative;
    animation: upAndDown 2s linear infinite;
  }
  .top-occupation {
    position: absolute;
    width: 100%;
    height: 80px;
    bottom: 0;
  }
}

@keyframes upAndDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
