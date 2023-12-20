<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { PageModel } from '@/models/blog.model'
import Pagination from '@/components/layout/Pagination.comp.vue'

const router = useRouter()

const pageParams = reactive<PageModel>({
  page: 1,
  size: 10
})

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

const pageHandle = (page: number) => {
  pageParams.page = page
}

// 查看详情
const viewDetail = (blog_id: string) => {
  router.push(`/article-detail/${blog_id}`)
}

// 查看更多
const viewMore = () => {
  router.push(`/article`)
}
</script>

<template>
  <div class="left-box w-full">
    <!-- 置顶文章 -->
    <main v-if="topBlog.length">
      <van-divider :style="{ fontSize: '24px', color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        置顶文章
      </van-divider>
      <ul>
        <li
          class="left-blog relative card m-4 shadow-lg hover:shadow-2xl bg-white"
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
                <span class="content-main_title mt-2">{{ blog.title }}</span>
                <span class="content-main_text text-ellipsis line-clamp-4 mt-2">{{ blog.content }}</span>
              </div>
              <div class="content-bottom" :style="{ textAlign: index % 2 === 0 ? 'left' : 'right' }">
                <span>{{ blog.author }}</span>
              </div>
            </div>
          </article>
          <div class="blog-more" :class="index % 2 == 0 ? 'blog-more-l' : 'blog-more-r'" @click="viewMore()">
            more...
          </div>
        </li>
      </ul>
    </main>
    <!-- 文章列表 -->
    <main v-if="blogList.length">
      <van-divider :style="{ fontSize: '24px', color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        文章列表
      </van-divider>
      <ul>
        <li
          class="left-blog card m-4 shadow-lg hover:shadow-2xl bg-white"
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
                    : `polygon(0 0%,100% 0%,100% 100%,8% 100%)`,
                borderRadius: index % 2 == 0 ? '1rem 0 0 1rem' : '0 1rem 1rem 0'
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
                <span class="content-main_title mt-2">{{ blog.title }}</span>
                <span class="content-main_text text-ellipsis line-clamp-4 mt-2">{{ blog.content }}</span>
              </div>
              <div class="content-bottom" :style="{ textAlign: index % 2 === 0 ? 'left' : 'right' }">
                <span>{{ blog.author }}</span>
              </div>
            </div>
          </article>
          <div class="blog-more" :class="index % 2 == 0 ? 'blog-more-l' : 'blog-more-r'" @click="viewMore()">
            more...
          </div>
        </li>
      </ul>
    </main>
  </div>
  <div class="text-center w-full p-2">
    <Pagination :total="4" :size="5" @pageHandle="pageHandle" />
  </div>
</template>

<style lang="scss" scoped>
.left-blog {
  height: 250px;
  // overflow: hidden;

  .blog-contain {
    height: 100%;
    display: flex;

    .blog-left {
      width: 50%;
      border-radius: 1rem 0 0 1rem;
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
      flex-direction: column;
      justify-content: space-between;
      padding: 15px;

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
  .blog-more {
    position: absolute;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.5s;
    bottom: 0;
    padding: 8px 25px;
    color: var(#fff);
    background-image: linear-gradient(to right, #ed6ea0 0, #ec8c69 100%);
  }
  .blog-more-l {
    right: 0;
    border-radius: 15px 0;
  }
  .blog-more-r {
    left: 0;
    border-radius: 0 15px;
  }
  .blog-more-l:hover {
    right: -10px;
    bottom: -10px;
  }
  .blog-more-r:hover {
    left: -10px;
    bottom: -10px;
  }
  .blog-contain:hover img {
    animation: 1.5s blog-img_rotate;
  }
}
.left-blog + .left-blog {
  margin-top: 1rem;
}

.left-box-title::before {
  content: '';
  display: table-cell;
  position: relative;
  top: 50%;
  width: 30vh;
  height: 4px;
  background-repeat: no-repeat;
  background-color: #c7bbbb;
}
.left-box-title::after {
  content: '';
  display: table-cell;
  position: relative;
  top: 50%;
  width: 30vh;
  height: 4px;
  background-repeat: no-repeat;
  background-color: #c7bbbb;
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
