<script lang="ts" setup>
import { ref } from 'vue'
import Waves from '@/components/layout/wave.comp.vue'

const mdValue = ref<any>('2133211234567')

const articleImage: string = 'http://43.138.109.120:9000/avatar/765664a8a75211296a9cd89671d6d660.png'

const articleInfo = ref<any>({
  title: '我是顶部文章1',
  type: '日常',
  content:
    '顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...顶部文章2呀顶部文章2...',
  img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F29%2F20161129152324_LCiUN.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701784&t=1a6df5da8f63b8e1f49f84447e3f5e91',
  author: '0422',
  createTime: 123321321321321
})
</script>

<template>
  <div class="article h-full">
    <header class="article-header relative">
      <div class="header-title fixed">
        <h1 class="text-4xl text-slate-100">{{ articleInfo.title }}</h1>
      </div>
      <img class="header-img fixed" :src="articleImage" alt="" />
      <Waves />
    </header>
    <main class="article-main">
      <div class="w-full z-10 bg-slate-50">
        <div class="card shadow-lg ml-16 mr-16">
          <v-md-editor v-model="mdValue" mode="preview" height="400px"></v-md-editor>
        </div>
      </div>
    </main>
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
