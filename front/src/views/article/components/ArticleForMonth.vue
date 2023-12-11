<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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
        title: '我是日志1',
        blog_id: '1',
        type: '日常',
        content:
          '日志1啊日志1日志1啊日志1日志1啊日志1日志1志1啊日日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F29%2F20161129152324_LCiUN.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701784&t=1a6df5da8f63b8e1f49f84447e3f5e91',
        author: '0422',
        createTime: 123321321321321
      },
      {
        title: '我是日志2',
        blog_id: '2',
        type: '日常',
        content:
          '日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1日志1啊日志1',
        img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F10%2F20140610142525_vCrms.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700701833&t=4cde503e7b0f34dfe0d0e53dc3550421',
        author: '0423',
        createTime: 12332321321320
      }
    ]
  }
])

// 查看博客详情
const viewDetail = (blog_id: string) => {
  router.push(`/article-detail/${blog_id}`)
}
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
                        <span>{{ s.title }}</span>
                        <span>{{ s.type }}</span>
                      </div>
                      <div class="w-full">
                        {{ s.content }}
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
