<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { blogApi } from '@/api/modules/blog'
import PageBox from '@/components/layout/pageBox.comp.vue'
import Steps from '@/components/layout/Steps.comp.vue'
import StepItem from '@/components/layout/StepItem.comp.vue'

const router = useRouter()
const route = useRoute()

const articleImage: string = 'http://43.138.109.120:9000/avatar/765664a8a75211296a9cd89671d6d660.png'

const stepsList = ref<any>([
  {
    month: 3,
    dayList: [
      {
        day: '3月3日',
        article: [
          { blog_title: '我是3月3日1', blog_id: '33-1' },
          { blog_title: '我是3月3日2', blog_id: '33-2' }
        ]
      },
      { day: '3月2日', article: [{ blog_title: '我是3月2日1', blog_id: '32-1' }] },
      { day: '3月1日', article: [{ blog_title: '我是3月1日1', blog_id: '31-1' }] }
    ]
  },
  {
    month: 2,
    dayList: [
      {
        day: '2月3日',
        article: [
          { blog_title: '我是2月3日1', blog_id: '23-1' },
          { blog_title: '我是2月3日2', blog_id: '23-1' },
          { blog_title: '我是2月3日3', blog_id: '23-1' },
          { blog_title: '我是2月3日4', blog_id: '23-1' }
        ]
      }
    ]
  },
  {
    month: 1,
    dayList: [
      { day: '1月3日', article: [{ blog_title: '我是1月3日1', blog_id: '23-1' }] },
      {
        day: '1月2日',
        article: [
          { blog_title: '我是1月2日1', blog_id: '23-1' },
          { blog_title: '我是1月2日2', blog_id: '23-1' }
        ]
      }
    ]
  }
])

// 分类查看
const categoryView = ({ month, day }: { month?: number; day?: number }) => {
  router.push(`${route.params.year}/${month}`)
}

// 查看博客详情
const viewDetail = (blog_id: string) => {
  router.push(`/article-detail/${blog_id}`)
}

const getArchive = async () => {
  try {
    const { status, data } = await blogApi.getArchiveForYear(Number(route.params.year))
    if (status === 200) {
      stepsList.value = data
    }
  } catch (error) {
    console.error('article_type-year', error)
  }
}

onMounted(() => {
  getArchive()
})
</script>

<template>
  <div class="article h-full">
    <PageBox title="归档">
      <Steps>
        <template v-for="(step, idx) in stepsList" :key="idx">
          <StepItem :fontSize="24" :iconSize="14">
            <span class="cursor-pointer" @click="categoryView({ month: step.month })">
              {{ step.month + '月' }}
            </span>
          </StepItem>
          <template v-for="(s, i) in step.dayList" :key="i">
            <StepItem :fontSize="16" :iconSize="12">
              <div class="flex">
                <div class="flex items-center" :style="{ minWidth: '100px' }">
                  <span>{{ s.day }}</span>
                  <span class="ml-4 text-slate-400 text-xs">
                    {{ '(' + s.article.length + ')' }}
                  </span>
                </div>
                <div class="ml-8">
                  <div
                    class="hover:text-red-800 cursor-pointer"
                    v-for="(article, index) in s.article"
                    :key="index"
                    @click="viewDetail(article.blog_id)"
                  >
                    {{ article.blog_title }}
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
