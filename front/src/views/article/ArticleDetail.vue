<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { blogApi } from '@/api/modules/blog'
import { useRoute } from 'vue-router'
import type { BlogInfoModel } from '@/models/blog.model'
import PageBox from '@/components/layout/pageBox.comp.vue'
import UploadFile from '@/components/layout/UploadFile.comp.vue'

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

const uploadParsingSuccess = (file: any) => {
  console.log('file', file)
  mdValue.value = file
}

watch(
  () => route.params.blog_id,
  async () => {
    await getBlogInfo()
  }
)
// onMounted(() => {
//   getBlogInfo()
// })
</script>

<template>
  <div class="article h-full">
    <PageBox :title="articleInfo.blog_title" :background="articleInfo.blog_background">
      <UploadFile @parsingSuccess="uploadParsingSuccess"></UploadFile>
      <v-md-editor v-model="mdValue" mode="preview"></v-md-editor>
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
</style>
