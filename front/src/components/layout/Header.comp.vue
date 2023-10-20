<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const showHeader = ref<boolean>(true)
const navHeader = ref<any>(null)
let navTop = ref<number>(0)
const navList = ref<any>([
  {
    title: '首页',
    icon: '',
    path: 'home',
    child: []
  },
  {
    title: '文章',
    icon: '',
    path: 'article',
    child: [
      { title: '归档', icon: '', path: '' },
      { title: '分类', icon: '', path: '' },
      { title: '标签', icon: '', path: '' }
    ]
  },
  {
    title: '娱乐',
    icon: '',
    path: '',
    child: []
  },
  {
    title: '统计',
    icon: '',
    path: '',
    child: []
  },
  {
    title: '友链',
    icon: '',
    path: 'link',
    child: []
  }
])

const handleScroll = (): void => {
  const lastScrollPosition = navTop.value
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (currentScrollPosition > lastScrollPosition) {
    // 向下滚动
    showHeader.value = false
  } else {
    // 向上滚动
    showHeader.value = true
  }
  navTop.value = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div v-show="showHeader" ref="navHeader" class="header h-16 w-full flex fixed z-10">
    <div class="header-left h-full flex px-5">
      <div>Smiling cat</div>
    </div>
    <div class="header-center flex flex-1 justify-center items-center">
      <div class="items-center flex p-2" v-for="(nav, index) in navList" :key="index">
        <div class="center-icon w-6 h-6 bg-red-100"></div>
        <div class="center-title mx-1">{{ nav.title }}</div>
      </div>
    </div>
    <div class="header-right flex">
      <div class="right-item w-12 h-12 bg-slate-400 mx-1"></div>
      <div class="right-item w-12 h-12 bg-slate-400 mx-1"></div>
      <div class="right-item w-12 h-12 bg-slate-400 mx-1"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0.25rem;
  transition: all 0.5s;

  .header-left {
    font-size: 26px;
    align-items: center;
  }
  .header-center {
    .items-center {
      border-radius: 15px;
    }
    .items-center:hover {
      background-color: rgba($color: #000000, $alpha: 0.1);
    }
    .center-title {
      font-size: 16px;
    }
  }
  .header-right {
    align-items: center;
  }
}
</style>
