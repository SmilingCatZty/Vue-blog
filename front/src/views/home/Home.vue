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
    type: '日常',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1志1啊日日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    author: '0422',
    createTime: 123321321321321
  },
  {
    title: '我是日志2',
    type: '日常',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    author: '0423',
    createTime: 123321321321321
  },
  {
    title: '我是日志3',
    type: '日常',
    content:
      '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
    author: '0424',
    createTime: 123321321321321
  }
])

// 用户信息
const userInfo = ref<any>({
  userName: 'zty',
  avatar:
    'https://i0.hdslb.com/bfs/face/5b7c5ee50f5a2fe2f76d7ed8090048e720a73753.jpg@120w_120h_1c.avif'
})

// 日志
const blogs = ref<any>({
  article: 15,
  icon: 8,
  said: 1
})
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
        <!-- 主体左侧 -->
        <div class="main-left">
          <ul>
            <li
              class="left-blog card mt-4 shadow-lg bg-white"
              v-for="(blog, index) in blogList"
              :key="index"
            >
              <div class="blog-contain">
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
                  <img src="" alt="" class="blog-img border" />
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
              </div>
            </li>
          </ul>
        </div>
        <!-- 主体右侧 -->
        <div class="card bg-slate-400 main-right">
          <div class="right-user bg-gray-100 card shadow-lg">
            <div class="user-avatar">
              <img :src="userInfo.avatar" alt="" />
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
          <div class="right-notice bg-gray-100 card shadow-lg mt-3">
            <div class="notice-title">公告</div>
            <div class="notice-content mt-2">
              <span>后端基于Nest开发,前端基于Vue3+Ts+daisyUI+ElementPlus开发</span>
            </div>
          </div>
          <div class="right-chat bg-gray-100 card shadow-lg"></div>
          <div class="right-website bg-gray-100 card shadow-lg mt-3">
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
    </main>
    <footer class="home"></footer>
  </div>
</template>

<style lang="scss" scoped>
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
      }
    }

    .main-right {
      display: flex;
      position: sticky;
      top: 20px;
      align-items: flex-start;
      width: 25%;
      margin: 0 auto;

      .right-user {
        width: 100%;
        padding: 16px;
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
        padding: 16px;
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
        padding: 16px;

        .website-title{
          font-size: 20px;
          font-weight: 500;
        }

        .website-item{
          display: flex;
          justify-content: space-between;
        }
      }
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
