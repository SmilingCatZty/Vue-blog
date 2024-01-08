<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { SvgIcons } from '@/libs/svg-icon.map'
import { showToast } from 'vant'

const route = useRoute()
const router = useRouter()

const showHeader = ref<boolean>(true)
const showPopover = ref<any>([])
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
      { title: '归档', icon: '', path: 'article' },
      { title: '分类', icon: '', path: 'article-type' },
      { title: '标签', icon: '', path: 'article-label' }
    ]
  },
  {
    title: '社交',
    icon: SvgIcons.get('link')?.icon,
    path: 'social',
    child: [
      { title: '留言板', icon: '', path: 'social/board' },
      { title: '友链', icon: '', path: 'social' }
    ]
  },
  {
    title: '统计',
    icon: SvgIcons.get('graph')?.icon,
    path: 'statistics',
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

const onSelect = (action: any) => {
  showToast(action.text)
}

const goHome = () => {
  router.push('/home')
}

const mouseHandle = (idx: number) => {
  // showPopover.value[idx] = true
  for (let index = 0; index < navList.value.length; index++) {
    if (idx === index && idx !== 0 && idx !== navList.value.length - 1) {
      showPopover.value[index] = true
    } else {
      showPopover.value[index] = false
    }
  }
}

const mouseleave = (idx: number) => {
  showPopover.value[idx] = false
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
    <div class="header-center flex flex-1 justify-center">
      <div
        class="item-center p-2 cursor-pointer flex items-center"
        v-for="(nav, index) in navList"
        :key="index"
        @click="navClickHandle(nav)"
        @mouseenter="mouseHandle(index)"
      >
        <van-popover
          v-model:show="showPopover[index]"
          :trigger="'manual'"
          :actions="nav.child"
          @select="onSelect"
          @mouseleave="mouseleave(index)"
        >
          <template #reference>
            <!-- <van-button type="primary">浅色风格</van-button> -->
            <div class="items-center flex justify-center">
              <div class="center-icon w-5 h-5">
                <img :src="nav.icon" alt="" />
              </div>
              <div class="text-2xl mx-1">{{ nav.title }}</div>
            </div>
          </template>
          <div v-for="(child, i) in nav.child" :key="i" @click="navClickHandle(child)" class="header-popupover">
            <div class="popupover-context w-32 h-10 flex justify-center items-center cursor-pointer">
              {{ child.title }}
            </div>
          </div>
        </van-popover>
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
    .item-center {
      border-radius: 15px;
    }

    .item-center:hover {
      background-color: rgba($color: #000000, $alpha: 0.1);
    }
  }
}

.popupover-context{
  background-color: rgba($color: #b6beeb, $alpha: .6) ;
}
.popupover-context:hover {
  background-color: rgba($color: #a8b4f6, $alpha: .7) ;
}
.header-popupover + .header-popupover {
  border-top: 1px solid #c9cff0;
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
.center-type {
  font-family: Yuzhou;
}
</style>
