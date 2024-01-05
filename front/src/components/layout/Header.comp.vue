<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { SvgIcons } from '@/libs/svg-icon.map'

const route = useRoute()
const router = useRouter()

const showHeader = ref<boolean>(true)
const navHeader = ref<any>(null)
let navTop = ref<number>(0)
const navList = ref<any>([
  {
    title: '首页',
    icon: SvgIcons.get('home')?.icon,
    path: 'home',
    child: []
  },
  {
    title: '文章',
    icon: SvgIcons.get('document')?.icon,
    path: 'article',
    child: [
      { title: '归档', icon: '', path: '' },
      { title: '分类', icon: '', path: '' },
      { title: '标签', icon: '', path: '' }
    ]
  },
  {
    title: '娱乐',
    icon: SvgIcons.get('game')?.icon,
    path: '',
    child: []
  },
  {
    title: '统计',
    icon: SvgIcons.get('graph')?.icon,
    path: 'statistics',
    child: []
  },
  {
    title: '友链',
    icon: SvgIcons.get('link')?.icon,
    path: 'friend-link',
    child: []
  }
])

const handleScroll = (): void => {
  const lastScrollPosition = navTop.value
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (currentScrollPosition > lastScrollPosition) {
    // 向下滚动
    showHeader.value = false
  } else {
    // 向上滚动
    showHeader.value = true
  }
  navTop.value = currentScrollPosition
}

const calssHandle = () => {
  let classRes = ''
  classRes = showHeader.value ? 'nav-show' : 'nav-hide'
  classRes = window.scrollY === 0 ? classRes + ' ' + 'header-top' : classRes + ' ' + 'header-untop'
  return classRes
}

const navClickHandle = (nav: any) => {
  router.push(`/${nav.path}`)
}

const goHome = () => {
  router.push('/home')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="navHeader" class="header h-16 w-full flex justify-between fixed z-20" :class="calssHandle()">
    <!-- 导航左侧 -->
    <div class="header-left font-type font-bold h-full flex items-center px-5 cursor-pointer">
      <div @click="goHome()">Smiling cat</div>
    </div>
    <!-- 导航中部 -->
    <div class="header-center flex flex-1 justify-center items-center">
      <div
        class="items-center flex p-2 cursor-pointer"
        v-for="(nav, index) in navList"
        :key="index"
        @click="navClickHandle(nav)"
      >
        <div class="center-icon w-5 h-5">
          <img :src="nav.icon" alt="" />
        </div>
        <div class="text-2xl mx-1">{{ nav.title }}</div>
      </div>
    </div>
    <!-- 导航右侧 -->
    <div class="flex items-center">
      <div class="flex justify-center items-center w-10 h-10 mx-1">
        <img :src="SvgIcons.get('search')?.icon" alt="" />
      </div>
      <div class="right-item w-10 h-10 mx-1">
        <img :src="SvgIcons.get('weather')?.icon" alt="" />
      </div>
      <div class="right-item w-10 h-10 mx-1">
        <img :src="SvgIcons.get('user')?.icon" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  padding: 0.25rem;
  transition: 0.4s ease-in-out;

  .header-left {
    font-size: 30px;
  }

  .header-center {
    font-family: Yuzhou;
    font-weight: 600;
    .items-center {
      border-radius: 15px;
    }

    .items-center:hover {
      background-color: rgba($color: #000000, $alpha: 0.1);
    }
  }
}

.header-top {
  background: linear-gradient(-225deg, rgba($color: #6b97e1, $alpha: 0) 0, rgba($color: #f8cced, $alpha: 0) 100%);
}
.header-untop {
  background: linear-gradient(-225deg, rgba($color: #6b97e1, $alpha: 0.6) 0, rgba($color: #f8cced, $alpha: 1) 100%);
}

.nav-show {
  transform: translateY(0);
}

.nav-hide {
  transform: translateY(-100%);
}

.font-type {
  font-family: Rainbow;
}
.center-type{
  font-family: Yuzhou;
}
</style>
