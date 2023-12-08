<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageBox from '@/components/layout/pageBox.comp.vue'
import Steps from '@/components/layout/Steps.comp.vue'
import StepItem from '@/components/layout/StepItem.comp.vue'

const router = useRouter()

const articleImage: string =
  'http://43.138.109.120:9000/avatar/765664a8a75211296a9cd89671d6d660.png'

const stepsList = ref<any[]>([
  {
    step: 2024,
    children: [
      { stepItem: 12, count: 2 },
      { stepItem: 1, count: 3 }
    ]
  },
  {
    step: 2023,
    children: [
      { stepItem: 12, count: 2 },
      { stepItem: 11, count: 1 },
      { stepItem: 10, count: 3 },
      { stepItem: 9, count: 4 },
      { stepItem: 8, count: 2 }
    ]
  }
])

// 分类查看
const categoryView = ({ year, month }: { year?: number; month?: number }) => {
  month ? router.push(`article/${year}/${month}`) : router.push(`article/${year}`)
}
</script>

<template>
  <div class="article h-full">
    <PageBox title="归档">
      <!-- <StepItem :stepsList="stepsList"></StepItem> -->
      <Steps>
        <template v-for="(step, idx) in stepsList" :key="idx">
          <StepItem :fontSize="24" :iconSize="14">
            <span class="cursor-pointer" @click="categoryView({ year: step.step })">
              {{ step.step + '年' }}
            </span>
          </StepItem>
          <template v-for="(s, i) in step.children" :key="i">
            <StepItem :fontSize="16" :iconSize="12">
              <span
                class="cursor-pointer"
                @click="categoryView({ year: step.step, month: s.stepItem })"
              >
                {{ s.stepItem + '月' }}
              </span>
              <span class="ml-2 text-slate-400 text-xs">{{ '(' + s.count + ')' }}</span>
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
