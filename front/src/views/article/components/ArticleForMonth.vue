<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { blogApi } from '@/api/modules/blog'
import PageBox from '@/components/layout/pageBox.comp.vue'
import Steps from '@/components/layout/Steps.comp.vue'
import StepItem from '@/components/layout/StepItem.comp.vue'
import dayjs from 'dayjs'

const router = useRouter()
const route = useRoute()

const articleImage: string = 'http://43.138.109.120:9000/avatar/765664a8a75211296a9cd89671d6d660.png'

const stepsList = ref<any[]>([
  {
    day: 12,
    Articlelist: [
      {
        title: '我是日志3',
        blog_id: '11',
        type: '日常',
        content:
          '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
        img: 'https://pica.zhimg.com/v2-e034491c1f5c519df0a6197c5ca58c40_r.jpg?source=1940ef5c',
        author: '0424',
        createTime: 123321321321321
      },
      {
        title: '我是日志1',
        blog_id: '12',
        type: '日常',
        content:
          '日志1啊日志1日志1啊日志1日志1啊日志1日志1志1啊日日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F29%2F20161129152324_LCiUN.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701784&t=1a6df5da8f63b8e1f49f84447e3f5e91',
        author: '0422',
        createTime: 12332471321321
      },
      {
        title: '我是日志2',
        blog_id: '13',
        type: '日常',
        content:
          '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F10%2F20140610142525_vCrms.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701833&t=4cde503e7b0f34dfe0d0e53dc3550421',
        author: '0423',
        createTime: 12332381321321
      }
    ]
  },
  {
    day: 10,
    Articlelist: [
      {
        blog_title: '我是日志1',
        blog_id: '1',
        blog_type: '日常',
        blog_content:
          '日志1啊日志1日志1啊日志1日志1啊日志1日志1志1啊日日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
        blog_background:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F29%2F20161129152324_LCiUN.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701784&t=1a6df5da8f63b8e1f49f84447e3f5e91',
        createTime: ''
      }
    ]
  }
])

// 查看博客详情
const viewDetail = (blog_id: string) => {
  router.push(`/article-detail/${blog_id}`)
}

const getArchive = async () => {
  try {
    const { status, data } = await blogApi.getArchiveForMonth(
      Number(route.params.year as string),
      Number(route.params.month as string)
    )
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
            <span>
              {{ route.params.month + '月' + step.day + '日' }}
            </span>
          </StepItem>
          <template v-for="(s, i) in step.Articlelist" :key="i">
            <StepItem :fontSize="16" :iconSize="12">
              <div class="flex">
                <span class="flex items-center" :style="{ minWidth: '80px' }">
                  {{ dayjs(s.createTime).format('hh:mm') }}
                </span>
                <span class="ml-2 text-slate-400 text-xs card">
                  <article
                    class="flex justify-around p-3 shadow-sm border rounded-lg hover:bg-slate-200 cursor-pointer"
                    @click="viewDetail(s.blog_id)"
                  >
                    <div class="w-16 h-16 bg-slate-500"></div>
                    <div class="flex flex-1 flex-wrap items-baseline pl-2 pr-2">
                      <div class="w-full">
                        <span class="article-right-title text-sm text-ellipsis line-clamp-1">{{ s.blog_title }}</span>
                        <span class="article-right-label">{{ s.blog_type }}</span>
                      </div>
                      <div class="w-full line-clamp-2">
                        {{ s.blog_content }}
                      </div>
                    </div>
                  </article>
                </span>
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
  .article-right-title {
    color: #6e9aff;
  }
  .article-right-label {
    border-radius: 6px;
    padding: 2px 4px;
    background-color: #ffe1ff;
    font-size: 0.6rem;
  }
}
</style>
