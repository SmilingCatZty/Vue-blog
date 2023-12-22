<script lang="ts" setup>
import Waves from '@/components/layout/wave.comp.vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    default: '我是顶部文章1'
  },
  background: {
    type: String,
    default: 'http://43.138.109.120:9000/avatar/765664a8a75211296a9cd89671d6d660.png'
  }
})

const route  = useRoute()

onMounted(() => {
  const urlParams = route.params
  console.log(urlParams);
  
})

</script>

<template>
  <div class="article h-full">
    <header class="article-header relative">
      <div class="header-title fixed">
        <h1 class="text-4xl text-slate-100">{{ props.title }}</h1>
      </div>
      <img class="header-img fixed" :src="props.background" alt="" />
      <Waves />
    </header>
    <main class="article-main">
      <div class="w-full z-10 bg-slate-50">
        <div class="card shadow-lg ml-16 mr-16 p-3">
          <slot />
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
