<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { PageModel, BlogInfoModel } from '@/models/blog.model'
import { blogApi } from '@/api/modules/blog'
import Pagination from '@/components/layout/Pagination.comp.vue'
import dayjs from 'dayjs'

const router = useRouter()

const pageParams = reactive<PageModel>({
  page: 1,
  size: 5
})

const user = {
  name: 'zty0422'
}
const total = ref<number>(0)

// 置顶文章
let topBlogList = ref<BlogInfoModel[]>([])

// 日志列表
let blogList = ref<BlogInfoModel[]>([])

// 获取博客列表
const getBlogList = async () => {
  try {
    const { status, data } = await blogApi.getBlogList(pageParams)
    if (status === 200) {
      blogList.value = data.blogList
      total.value = data.total
    }
  } catch (error) {
    console.error('home-left', error)
  }
}
// 获取置顶博客列表
const getTopBlogList = async () => {
  try {
    const { status, data } = await blogApi.getTopBlogList()
    if (status === 200) {
      topBlogList.value = data.blogList
    }
  } catch (error) {
    console.error('home-left', error)
  }
}

// 分页管理
const pageHandle = (page: number) => {
  pageParams.page = page
  getBlogList()
}

// 查看详情
const viewDetail = (blog_id: string) => {
  router.push(`/article-detail/${blog_id}`)
}

// 查看更多
const viewMore = () => {
  router.push(`/article`)
}

onMounted(() => {
  getBlogList()
  getTopBlogList()
})
</script>

<template>
  <div class="left-box w-full">
    <!-- 置顶文章 -->
    <main v-if="topBlogList.length">
      <van-divider :style="{ fontSize: '40px', color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        <div :style="{fontFamily: 'Rabit'}">置顶文章</div>
      </van-divider>
      <ul>
        <li
          class="left-blog relative card m-4 shadow-lg hover:shadow-2xl bg-white"
          v-for="(blog, index) in topBlogList"
          :key="index"
        >
          <article v-if="blog.blog_id" class="blog-contain cursor-pointer" @click="viewDetail(blog.blog_id)">
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
              <img :src="blog.blog_background" alt="" class="blog-img border object-cover" />
            </div>
            <div class="blog-right">
              <div class="content-top" style="{}">
                <span>{{ dayjs(blog.create_time).format('YYYY-MM-DD') }}</span>
                <span>{{ blog.blog_type }}</span>
              </div>
              <div class="content-main">
                <span class="content-main_title text-xl text-ellipsis line-clamp-1 mt-2">{{ blog.blog_title }}</span>
                <span class="content-main_text text-sm text-ellipsis line-clamp-5 mt-2">{{ blog.blog_content }}</span>
              </div>
              <div class="content-bottom" :style="{ textAlign: index % 2 === 0 ? 'left' : 'right' }">
                <span>{{ user.name }}</span>
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
      <van-divider :style="{ fontSize: '40px', color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        <div :style="{fontFamily: 'Rabit'}">文章列表</div>
      </van-divider>
      <ul>
        <li
          class="left-blog card m-4 shadow-lg hover:shadow-2xl bg-white"
          v-for="(blog, index) in blogList"
          :key="blog.blog_id"
        >
          <article v-if="blog.blog_id" class="blog-contain cursor-pointer" @click="viewDetail(blog.blog_id)">
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
              <img :src="blog.blog_background" alt="" class="blog-img border object-cover" />
            </div>
            <div class="blog-right">
              <div class="content-top text-ellipsis line-clamp-1">
                <span>{{ dayjs(blog.create_time).format('YYYY-MM-DD') }}</span>
                <span class="ml-3">{{ blog.blog_type }}</span>
              </div>
              <div class="content-main">
                <span class="content-main_title text-xl text-ellipsis line-clamp-1 mt-2">{{ blog.blog_title }}</span>
                <span class="content-main_text text-base text-ellipsis line-clamp-5 mt-1">{{ blog.blog_content }}</span>
              </div>
              <div class="content-bottom" :style="{ textAlign: index % 2 === 0 ? 'left' : 'right' }">
                <span>{{ user.name }}</span>
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
    <Pagination :total="total" :size="pageParams.size" @pageHandle="pageHandle" />
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'Rainbow-Party-2';
  src: url('@/assets/font/Rainbow-Party-2.ttf');
  font-weight: normal;
  font-style: normal;
}
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
          color: #6e9aff;
        }

        .content-main_text {
          width: 100%;
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
    font-family: 'Rainbow-Party-2';
    position: absolute;
    font-size: 22px;
    cursor: pointer;
    transition: all 0.5s;
    bottom: 0;
    padding: 8px 25px;
    color: var(#fff);
    background-image: linear-gradient(to right, #acd3ff 0, #cdd5ff 100%);
  }
  .blog-more-l {
    right: 0;
    border-radius: 15px 0;
    color: white;
  }
  .blog-more-r {
    left: 0;
    border-radius: 0 15px;
    color: black;
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
    animation: 0.8s blog-img_rotate;
  }
  // .blog-contain:visited img {
  //   animation: 1.5s blog-img_rotate;
  // }
}
.left-blog + .left-blog {
  margin-top: 2rem;
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
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes blog-img_rotate_leave {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
