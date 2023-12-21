<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    default: 5
  },
  total: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits<{
  pageHandle: [page: number] // 具名元组语法
}>()

const curPage = ref<number>(1) // 当前的页码

const getNumberRange = (n: number) => {
  return Array.from({ length: n }, (_, index) => index + 1)
}

const pageHandle = (page: number) => {
  curPage.value = page
  emit('pageHandle', page)
}
</script>

<template>
  <div class="blog-pagination">
    <ul class="flex w-full justify-center">
      <li class="flex" v-for="num in getNumberRange(props.total)" :key="num">
        <span
          v-if="num === curPage - 2"
          class="w-8 h-8 ml-1 mr-1 flex justify-center items-center cursor-pointer"
          @click="pageHandle(num)"
        >
          ...
        </span>
        <span
          v-show="(curPage < 3 ? num <= 3 : num < curPage + 2 && num > curPage - 2) || num === props.total"
          class="w-8 h-8 ml-1 mr-1 flex justify-center items-center cursor-pointer"
          :class="num === curPage ? 'pagination-li-active' : ''"
          @click="pageHandle(num)"
        >
          {{ num }}
        </span>
        <span
          v-if="num === curPage + 2 && num !== props.total && num !== props.total - 1"
          class="w-8 h-8 ml-1 mr-1 flex justify-center items-center cursor-pointer"
          @click="pageHandle(num)"
        >
          ...
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.pagination-li-active {
  background-color: rgba($color: #f4baba, $alpha: .7);
}
</style>
