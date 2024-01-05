<script lang="ts" setup>
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  descr: {
    type: String,
    default: ''
  },
  screenImg: {
    type: String,
    default: ''
  }
})

const codeMsgList = ref(
  new Map([
    ['name', props.name],
    ['link', props.link],
    ['avatar', props.avatar],
    ['descr', props.descr],
    ['screenImg', props.screenImg]
  ])
)

onMounted(() => {})
</script>

<template>
  <div class="code-blog bg-gray-200 shadow-xl pl-1 pr-1">
    <header class="flex justify-between h-9 pl-3 pr-3">
      <div class="flex items-center">
        <div class="round w-3 h-3 bg-red-400"></div>
        <div class="round w-3 h-3 bg-yellow-400"></div>
        <div class="round w-3 h-3 bg-green-400"></div>
        <div class="text-xl font-medium text-gray-400">YAML</div>
      </div>
      <div class="flex items-center">
        <van-icon class="cursor-pointer" name="coupon-o" />
        <van-icon class="ml-2" name="arrow-down" />
      </div>
    </header>
    <main class="code-blog-main flex-row bg-slate-50 pb-5 pt-3">
      <ul class="w-5 text-zinc-300">
        <li class="text-lg ml-3" v-for="i in codeMsgList.size" :key="i">{{ i }}</li>
      </ul>
      <ul class="ml-4 text-zinc-400">
        <li class="text-lg" v-for="(item, i) in codeMsgList" :key="i">
          <span>{{ item[0] + ':' + ' ' }}</span>
          <span class="text-lime-400">{{ item[1] }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.code-blog {
  overflow: hidden;
  border-radius: 0.8rem;
  .code-blog-main {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
}
.round {
  border-radius: 50%;
  margin-right: 0.5rem;
}
</style>
