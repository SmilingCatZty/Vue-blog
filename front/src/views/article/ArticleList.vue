<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageBox from '@/components/layout/pageBox.comp.vue'
import Steps from '@/components/layout/Steps.comp.vue'
import StepItem from '@/components/layout/StepItem.comp.vue'

const router = useRouter()

const articleImage: string = 'http://43.138.109.120:9000/avatar/765664a8a75211296a9cd89671d6d660.png'

const stepsList = ref<any[]>([
  {
    step: 2024,
    children: [
      { stepItem: 12, count: 2, labels: ['JavaScript', 'Vue', 'React'] },
      { stepItem: 1, count: 3, labels: ['JavaScript', 'Vue', 'React'] }
    ]
  },
  {
    step: 2023,
    children: [
      { stepItem: 12, count: 2, labels: ['JavaScript', 'Vue', 'React'] },
      { stepItem: 11, count: 1, labels: ['JavaScript', 'Vue', 'React'] },
      { stepItem: 10, count: 3, labels: ['JavaScript', 'Vue', 'React'] },
      { stepItem: 9, count: 4, labels: ['JavaScript', 'Vue', 'React'] },
      { stepItem: 8, count: 2, labels: ['JavaScript', 'Vue', 'React'] }
    ]
  }
])

// 分类查看
const categoryView = ({ year, month }: { year?: number; month?: number }) => {
  month ? router.push(`article/${year}/${month}`) : router.push(`article/${year}`)
}

const viewArticleForLabel = (label: string) => {
  router.push(`article-lebel/${label}`)
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
              <span class="cursor-pointer" @click="categoryView({ year: step.step, month: s.stepItem })">
                {{ s.stepItem + '月' }}
              </span>
              <span class="ml-2 text-slate-400 text-xs">{{ '(' + s.count + ')' }}</span>
              <span
                class="article-month-label ml-2 w-14 h-5 pl-2 pr-2"
                v-for="(label, idx) in s.labels"
                :key="idx"
                @click="viewArticleForLabel(label)"
              >
                {{ label }}
              </span>
            </StepItem>
          </template>
        </template>
      </Steps>
    </PageBox>
  </div>
</template>

<style lang="scss" scoped>
.article {
  .article-month-label {
    border-radius: 10px;
    background-color: #ffe1ff;
    padding: 2px 8px;
  }
}
</style>
