<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageBox from '@/components/layout/pageBox.comp.vue'
import Steps from '@/components/layout/Steps.comp.vue'
import StepItem from '@/components/layout/StepItem.comp.vue'

const router = useRouter()
const route = useRoute()

const articleImage: string =
  'http://43.138.109.120:9000/avatar/765664a8a75211296a9cd89671d6d660.png'

const stepsList = [
  {
    step: 3,
    children: [
      {
        stepItem: '3月3日',
        article: [
          { title: '我是3月3日1', blog_id: '33-1' },
          { title: '我是3月3日2', blog_id: '33-2' }
        ]
      },
      { stepItem: '3月2日', article: [{ title: '我是3月2日1', blog_id: '32-1' }] },
      { stepItem: '3月1日', article: [{ title: '我是3月1日1', blog_id: '31-1' }] }
    ]
  },
  {
    step: 2,
    children: [
      {
        stepItem: '2月3日',
        article: [
          { title: '我是2月3日1', blog_id: '23-1' },
          { title: '我是2月3日2', blog_id: '23-1' },
          { title: '我是2月3日3', blog_id: '23-1' },
          { title: '我是2月3日4', blog_id: '23-1' }
        ]
      }
    ]
  },
  {
    step: 1,
    children: [
      { stepItem: '1月3日', article: [{ title: '我是1月3日1', blog_id: '23-1' }] },
      {
        stepItem: '1月2日',
        article: [
          { title: '我是1月2日1', blog_id: '23-1' },
          { title: '我是1月2日2', blog_id: '23-1' }
        ]
      }
    ]
  }
]

// 分类查看
const categoryView = ({ month, day }: { month?: number; day?: number }) => {
  router.push(`${route.params.year}/${month}`)
}
</script>

<template>
  <div class="article h-full">
    <PageBox title="归档">
      <Steps>
        <template v-for="(step, idx) in stepsList" :key="idx">
          <StepItem :fontSize="24" :iconSize="14">
            <span @click="categoryView({ month: step.step })">
              {{ step.step + '月' }}
            </span>
          </StepItem>
          <template v-for="(s, i) in step.children" :key="i">
            <StepItem :fontSize="16" :iconSize="12">
              <div class="flex">
                <div class="flex items-center" :style="{minWidth:'100px'}">
                  <span>{{ s.stepItem }}</span>
                  <span class="ml-4 text-slate-400 text-xs">
                    {{ '(' + s.article.length + ')' }}
                  </span>
                </div>
                <div class="ml-8">
                  <div
                    class="hover:text-red-800"
                    v-for="(article, index) in s.article"
                    :key="index"
                  >
                    {{ article.title }}
                  </div>
                </div>
              </div>
            </StepItem>
          </template>
        </template>
      </Steps>
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
