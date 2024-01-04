<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { blogApi } from '@/api/modules/blog'
import { useRoute } from 'vue-router'
import type { BlogInfoModel } from '@/models/blog.model'
import PageBox from '@/components/layout/pageBox.comp.vue'

const route = useRoute()
const mdValue = ref<any>('2133211234567')

const articleInfo = ref<BlogInfoModel>({
  blog_id: route.params.blog_id as string,
  blog_title: '我是顶部文章1',
  blog_type: '日常',
  blog_content:
    '顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...',
  blog_background:
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F29%2F20161129152324_LCiUN.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701784&t=1a6df5da8f63b8e1f49f84447e3f5e91',
  blog_digest: '',
  blog_labels: [],
  blog_is_top: false,
  create_time: new Date()
})

const titleList = ref<any[]>([])
const mdRef = ref<any>(null)
const currentIndex = ref<number>(0)
const showFixedBox = ref<boolean>(false)

const getBlogInfo = async () => {
  try {
    const { status, data } = await blogApi.getBlogDetail(route.params.blog_id as string)
    if (status === 200) {
      articleInfo.value = data
      mdValue.value = articleInfo.value.blog_content
    }
  } catch (error) {
    console.error('article-detail', error)
  }
}

const getTitles = () => {
  const anchors = mdRef.value.$el.querySelectorAll('h2')
  const titles = Array.from(anchors).filter((t: any) => !!t.innerText.trim())
  if (!titles.length) titleList.value = []
  const hTags = Array.from(new Set(titles.map((t: any) => t.tagName))).sort()
  titleList.value = titles.map((el: any, idx: number) => {
    return {
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName)
    }
  })
}

const handleAnchorClick = (anchor: any, idx: number) => {
  const heading = mdRef.value.$el.querySelector(`[data-v-md-line="${anchor.lineIndex}"]`)
  if (heading) {
    window.scrollTo({
      behavior: 'smooth',
      top: heading.offsetTop + window.innerHeight * 0.75
    })
  }
}

const handleScroll = (): void => {
  window.pageYOffset >= window.innerHeight * 0.75 ? (showFixedBox.value = true) : (showFixedBox.value = false)
}

watch(
  () => route.params.blog_id,
  async (v) => {
    if (v) {
      await getBlogInfo()
    }
  }
)

onMounted(async () => {
  window.addEventListener('scroll', handleScroll)
  await getBlogInfo()
  getTitles()
})
</script>

<template>
  <div class="article h-full">
    <PageBox :title="articleInfo.blog_title" :background="articleInfo.blog_background">
      <main class="flex justify-between flex-row">
        <!-- markdown预览 -->
        <div class="w-full flex-1 mr-3">
          <v-md-editor
            ref="mdRef"
            :default-show-toc="false"
            :toc-nav-position-right="true"
            :default-fullscreen="false"
            v-model="mdValue"
            mode="preview"
          />
        </div>
        <!-- 导航栏 -->
        <div :style="{ width: '200px', height: 'auto' }">
          <div
            class="adticle-detail-nav top-1 bg-white p-3 mr-3"
            :style="{ width: '200px', position: showFixedBox ? 'fixed' : 'static' }"
          >
            <div class="text-xl font-medium">目录导航</div>
            <div
              class="catalog-item"
              v-for="(anchor, index) of titleList"
              :key="anchor.title"
              :class="currentIndex === index ? 'active' : ''"
              :style="{ paddingLeft: `${5 + anchor.indent * 15}px` }"
              @click="handleAnchorClick(anchor, index)"
            >
              <a>{{ anchor.title }}</a>
            </div>
          </div>
        </div>
      </main>
    </PageBox>
  </div>
</template>

<style lang="scss" scoped>
.article {
  .article-header {
    height: 75vh;
    z-index: 1;
    .header-title {
      z-index: 2;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
    }
    .header-img {
      width: 100%;
      height: 75vh;
    }
  }
  .article-main {
    z-index: 5;
    overflow: hidden;
  }
}
.v-md-editor {
  :deep(.v-md-editor__left-area) {
    display: inline-block !important;
    padding: 10px;
  }
}
.adticle-detail-nav {
  border-radius: 10px;
}
</style>
