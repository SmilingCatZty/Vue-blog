<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

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

const navClickHandle = () => {
  router.push('/article')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    ref="navHeader"
    class="header h-16 w-full flex fixed z-10 bg-black bg-opacity-10"
    :class="showHeader ? 'nav-show' : 'nav-hide'"
  >
    <div class="header-left h-full flex px-5">
      <div>Smiling cat</div>
    </div>
    <div class="header-center flex flex-1 justify-center items-center">
      <div
        class="items-center flex p-2 cursor-pointer"
        v-for="(nav, index) in navList"
        :key="index"
        @click="navClickHandle"
      >
        <div class="center-icon w-6 h-6 bg-red-100"></div>
        <div class="center-title mx-1">{{ nav.title }}</div>
      </div>
    </div>
    <div class="header-right flex">
      <div class="right-item w-12 h-12 mx-1">
        <svg
          t="1698033069913"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1574"
          width="40"
          height="40"
        >
          <path
            d="M835.56 742.29l-162.67-136.5c24.38-40.57 38.4-88.07 38.4-138.85 0-149.12-120.88-270-270-270s-270 120.88-270 270 120.88 270 270 270c63.67 0 122.18-22.05 168.34-58.91l164.22 137.8c20.31 17.04 50.58 14.39 67.62-5.92 17.05-20.31 14.4-50.58-5.91-67.62zM295.63 612.6c-38.91-38.91-60.34-90.64-60.34-145.66 0-55.02 21.43-106.76 60.34-145.66 38.91-38.91 90.64-60.34 145.66-60.34s106.76 21.43 145.66 60.34c38.91 38.91 60.34 90.64 60.34 145.66 0 55.02-21.43 106.76-60.34 145.66s-90.64 60.34-145.66 60.34-106.75-21.43-145.66-60.34z"
            p-id="1575"
            fill="#000000"
          ></path>
        </svg>
      </div>
      <div class="right-item w-12 h-12 mx-1">
        <svg
          t="1698032558785"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4419"
          width="40"
          height="40"
        >
          <path
            d="M512 256a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-85.333334 0v85.333333a42.666667 42.666667 0 0 0 42.666667 42.666667zM896 469.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 0-85.333334zM256 512a42.666667 42.666667 0 0 0-42.666667-42.666667H128a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 42.666667-42.666667zM265.386667 213.333333a42.666667 42.666667 0 0 0-59.306667 62.72l61.44 59.306667a42.666667 42.666667 0 0 0 31.146667 11.946667 42.666667 42.666667 0 0 0 30.72-13.226667 42.666667 42.666667 0 0 0 0-60.16zM725.333333 347.306667a42.666667 42.666667 0 0 0 29.44-11.946667l61.44-59.306667A42.666667 42.666667 0 0 0 758.613333 213.333333l-61.44 60.586667a42.666667 42.666667 0 0 0 0 60.16 42.666667 42.666667 0 0 0 28.16 13.226667zM512 768a42.666667 42.666667 0 0 0-42.666667 42.666667v85.333333a42.666667 42.666667 0 0 0 85.333334 0v-85.333333a42.666667 42.666667 0 0 0-42.666667-42.666667zM756.48 688.64a42.666667 42.666667 0 0 0-59.306667 61.44L758.613333 810.666667a42.666667 42.666667 0 0 0 29.44 11.946666 42.666667 42.666667 0 0 0 30.72-12.8 42.666667 42.666667 0 0 0 0-60.586666zM267.52 688.64l-61.44 59.306667a42.666667 42.666667 0 0 0 0 60.586666 42.666667 42.666667 0 0 0 30.72 12.8 42.666667 42.666667 0 0 0 28.586667-10.666666l61.44-59.306667a42.666667 42.666667 0 0 0-59.306667-61.44zM512 341.333333a170.666667 170.666667 0 1 0 170.666667 170.666667 170.666667 170.666667 0 0 0-170.666667-170.666667z"
            p-id="4420"
            fill="#000000"
          ></path>
        </svg>
      </div>
      <div class="right-item w-12 h-12 mx-1">
        <svg
          t="1698032787258"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="11791"
          width="40"
          height="40"
        >
          <path
            d="M502.468 531.84c108.41 0 196.61-87.545 196.61-195.258 0-107.673-88.2-195.26-196.61-195.26S305.86 228.95 305.86 336.583c0 107.673 88.2 195.259 196.61 195.259z m81 18.82H436.195c-136.922 0-248.236 110.454-248.236 246.354v14.645c0 71.018 109.555 71.018 248.236 71.018h147.273c133.241 0 248.277 0 248.277-71.018v-14.645c0-135.819-111.354-246.355-248.277-246.355z"
            fill="#000000"
            p-id="11792"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0.25rem;
  transition: 0.4s ease-in-out;

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

    .right-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.nav-show {
  transform: translateY(0);
}

.nav-hide {
  transform: translateY(-100%);
}
</style>
