<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Waves from '@/components/layout/wave.comp.vue'
import { useRouter } from 'vue-router'
import Pagination from '@/components/layout/Pagination.comp.vue'
import { type PageModel } from '@/models/blog.model'
import { reactive } from 'vue'

const router = useRouter()

let isFixed = ref<boolean>(false) // 右侧栏围是否为固定定位
const homeMainRef = ref<any>(null)

const pageParams = reactive<PageModel>({
  page: 1,
  size: 10
})

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
    type: '日常',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1志1啊日日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F29%2F20161129152324_LCiUN.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701784&t=1a6df5da8f63b8e1f49f84447e3f5e91',
    author: '0422',
    createTime: 123321321321321
  },
  {
    title: '我是日志2',
    type: '日常',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F10%2F20140610142525_vCrms.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701833&t=4cde503e7b0f34dfe0d0e53dc3550421',
    author: '0423',
    createTime: 123321321321321
  },
  {
    title: '我是日志3',
    type: '日常',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    img: 'https://pica.zhimg.com/v2-e034491c1f5c519df0a6197c5ca58c40_r.jpg?source=1940ef5c',
    author: '0424',
    createTime: 123321321321321
  }
])

// 置顶文章
const topBlog = ref<any[]>([
  {
    title: '我是顶部文章1',
    type: '日常',
    content:
      '顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...',
    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F29%2F20161129152324_LCiUN.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701784&t=1a6df5da8f63b8e1f49f84447e3f5e91',
    author: '0422',
    createTime: 123321321321321
  }
])

// 用户信息
const userInfo = ref<any>({
  userName: 'zty',
  avatar: 'https://i0.hdslb.com/bfs/face/5b7c5ee50f5a2fe2f76d7ed8090048e720a73753.jpg@120w_120h_1c.avif'
})

// 日志
const blogs = ref<any>({
  article: 15,
  icon: 8,
  said: 1
})

const pageHandle = (page: number) => {
  pageParams.page = page
}

const handleScroll = () => {
  const heightFromTop = homeMainRef.value.getBoundingClientRect()
  isFixed.value = heightFromTop.top <= 0 ? true : false
}

const viewDetail = (blog_id: string) => {
  router.push(`/article-detail/${blog_id}`)
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
          <div class="left-box">
            <h2>置顶文章</h2>
            <div>
              <ul>
                <li
                  class="left-blog card mt-4 shadow-lg hover:shadow-2xl bg-white"
                  v-for="(blog, index) in topBlog"
                  :key="index"
                >
                  <article class="blog-contain cursor-pointer" @click="viewDetail(blog.blog_id)">
                    <div
                      class="blog-left"
                      :style="{
                        order: index % 2 == 0 ? 0 : 1,
                        WebkitClipPath:
                          index % 2 == 0
                            ? `polygon(0 0, 92% 0%, 100% 100%, 0% 100%)`
                            : `polygon(0 0%,100% 0%,100% 100%,8% 100%)`
                      }"
                    >
                      <img :src="blog.img" alt="" class="blog-img border object-cover" />
                    </div>
                    <div class="blog-right">
                      <div class="content-top" style="{}">
                        <span>{{ blog.createTime }}</span>
                        <span>{{ blog.type }}</span>
                      </div>
                      <div class="content-main">
                        <span class="content-main_title">{{ blog.title }}</span>
                        <span class="content-main_text">{{ blog.content }}</span>
                      </div>
                      <div class="content-bottom">
                        <span>{{ blog.author }}</span>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
            <h2>文章列表</h2>
            <!-- 文章列表 -->
            <ul>
              <li
                class="left-blog card mt-4 shadow-lg hover:shadow-2xl bg-white"
                v-for="(blog, index) in blogList"
                :key="index"
              >
                <article class="blog-contain cursor-pointer" @click="viewDetail(blog.blog_id)">
                  <div
                    class="blog-left"
                    :style="{
                      order: index % 2 == 0 ? 0 : 1,
                      WebkitClipPath:
                        index % 2 == 0
                          ? `polygon(0 0, 92% 0%, 100% 100%, 0% 100%)`
                          : `polygon(0 0%,100% 0%,100% 100%,8% 100%)`
                    }"
                  >
                    <img :src="blog.img" alt="" class="blog-img border object-cover" />
                  </div>
                  <div class="blog-right">
                    <div class="content-top" style="{}">
                      <span>{{ blog.createTime }}</span>
                      <span>{{ blog.type }}</span>
                    </div>
                    <div class="content-main">
                      <span class="content-main_title">{{ blog.title }}</span>
                      <span class="content-main_text">{{ blog.content }}</span>
                    </div>
                    <div class="content-bottom">
                      <span>{{ blog.author }}</span>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
          <div class="text-center w-full p-2">
            <Pagination :total="4" :size="5" @pageHandle="pageHandle"></Pagination>
          </div>
        </div>
        <!-- 主体右侧 -->
        <div class="main-right w-1/4 h-auto card bg-grey-50 flex items-start ml-5">
          <div class="main-right-contain w-full sticky top-5">
            <div class="right-contain-box">
              <div class="right-user bg-blue-100 card shadow-lg p-4">
                <div class="user-avatar">
                  <img src="/src/assets/image/smilingSun.jpeg" alt="" />
                </div>
                <div class="user-name mt-2">{{ userInfo.userName }}</div>
                <div class="user-content mt-2">
                  <div class="content-article">
                    <div>{{ blogs.article }}</div>
                    <div>文章</div>
                  </div>
                  <div class="content-icon">
                    <div>{{ blogs.icon }}</div>
                    <div>标签</div>
                  </div>
                  <div class="content-said">
                    <div>{{ blogs.said }}</div>
                    <div>说说</div>
                  </div>
                </div>
              </div>
              <div class="right-notice bg-blue-100 card shadow-lg mt-3 p-4">
                <div class="notice-title">公告</div>
                <div class="notice-content mt-2">
                  <span>后端基于Nest开发,前端基于Vue3+Ts+daisyUI+ElementPlus开发</span>
                </div>
              </div>
              <div class="right-chat bg-blue-100 card shadow-lg"></div>
              <div class="right-website bg-blue-100 card shadow-lg mt-3 p-4">
                <div class="website-title">网站咨询</div>
                <div class="website-online website-item mt-2">
                  <span>在线人数</span>
                  <span>1</span>
                </div>
                <div class="website-viewer website-item mt-2">
                  <span>访问量</span>
                  <span>11</span>
                </div>
                <div class="website-time website-item mt-2">
                  <span>运行时常</span>
                  <span>111</span>
                </div>
              </div>
            </div>
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
    // flex-direction: column;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 85%;

    .main-left {
      width: 70%;
      display: flex;
      flex-wrap: wrap;

      .left-blog {
        width: 100%;
        height: 250px;
        overflow: hidden;

        .blog-contain {
          height: 100%;
          display: flex;

          .blog-left {
            width: 50%;
            overflow: hidden;

            .blog-img {
              width: 100%;
              height: 100%;
              background-color: #ccc;
              transition: all 0.2s ease-in-out 0s;
            }
          }

          .blog-right {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;

            .content-top {
              width: 100%;
              height: 20px;
              line-height: 20px;
              color: grey;
            }

            .content-main {
              display: flex;
              flex-direction: column;
              flex: 1;
              width: 100%;
              margin-top: 10px;
              margin-bottom: 10px;
              .content-main_title {
                width: 100%;
                font-size: 24px;
              }

              .content-main_text {
                width: 100%;
                font-size: 16px;
              }
            }

            .content-bottom {
              width: 100%;
              height: 20px;
              line-height: 20px;
              color: grey;
            }
          }
        }
        .blog-contain:hover img {
          animation: 1.5s blog-img_rotate;
        }
      }
    }

    .main-right {
      .right-user {
        width: 100%;
        .user-avatar {
          display: flex;
          justify-content: center;
          overflow: hidden;

          img {
            border: 1px solid blue;
            border-radius: 50%;
            width: 160px;
            height: 160px;
            object-fit: cover;
          }
        }
        .user-name {
          text-align: center;
          height: 40px;
          line-height: 40px;
        }
        .user-content {
          display: flex;
          text-align: center;
          .content-article {
            flex: 1;
          }
          .content-icon {
            flex: 1;
          }
          .content-said {
            flex: 1;
          }
        }
      }
      .right-notice {
        width: 100%;
        .notice-title {
          font-size: 20px;
          font-weight: 500;
        }
        .notice-content {
          font-size: 16px;
          overflow: hidden;
        }
      }
      .right-chat {
      }
      .right-website {
        width: 100%;

        .website-title {
          font-size: 20px;
          font-weight: 500;
        }

        .website-item {
          display: flex;
          justify-content: space-between;
        }
      }
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

@keyframes blog-img_rotate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
