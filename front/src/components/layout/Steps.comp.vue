<script lang="ts" setup>
import {} from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  fontSize: {
    type: Number,
    default: 24
  },
  fontColor: {
    type: String,
    default: '#000'
  },
  iconSize: {
    type: Number,
    default: 20
  },
  iconColor: {
    type: String,
    default: 'grey'
  }
})

const categoryView = ({ year, month }: { year?: number; month?: number }) => {
  if (month) {
    router.push(`/article/${year}/${month}`)
  } else if (year) {
    router.push(`/article/${year}`)
  } else {
    router.push('/article')
  }
}
</script>

<template>
  <div class="comp-steps">
    <div class="steps-nav">
      <div class="steps-nav-line">
        <div class="line"></div>
        <div class="circle"></div>
      </div>
      <div class="steps-nav-content text-2xl">
        <span class="cursor-pointer" @click="categoryView({})">
          {{ route.params.year || route.params.month ? '首页' : '全部' }}
        </span>
        <span v-show="!route.params.year && !route.params.month" class="ml-2 text-lg text-gray-400">
          {{ '当前共有17篇博客' }}
        </span>
        <span v-show="route.params.year">
          <span class="ml-2 mr-2">{{ '>' }}</span>
          <span
            class="cursor-pointer"
            :style="{ color: route.params.month ? 'black' : '#9595ed' }"
            @click="categoryView({ year: Number(route.params.year) })"
          >
            {{ route.params.year + '年' }}
          </span>
        </span>
        <span v-show="route.params.month">
          <span class="ml-2 mr-2">{{ '>' }}</span>
          <span
            class="cursor-pointer"
            :style="{ color: '#9595ed' }"
            @click="categoryView({ year: Number(route.params.year), month: Number(route.params.month) })"
          >
            {{ route.params.month + '月' }}
          </span>
        </span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.comp-steps {
  width: 100%;
}
.steps-item {
  display: flex;
}
.steps-nav {
  display: flex;
  align-items: center;
  .steps-nav-line {
    position: relative;
    width: 40px;
    height: 80px;
    .line {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      width: 0.2rem;
      height: 50%;
      background-color: rgba($color: #dcd8d8, $alpha: 1);
    }
    .circle {
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 1rem;
      height: 1rem;
      border: 0.15rem solid orange;
      border-radius: 50%;
      background-color: red;
    }
  }
}
</style>
