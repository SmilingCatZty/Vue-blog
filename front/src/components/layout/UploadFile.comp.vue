<script lang="ts" setup>
import {} from 'vue'
import { showToast } from 'vant/lib/toast/function-call'
import { blogApi } from '@/api/modules/blog'
import type { UploaderAfterRead, UploaderBeforeRead } from 'vant/lib/uploader/types'

const upload = async () => {
  // const res = await blogApi.uploadBlog()
}

const emit = defineEmits(['ParsingSuccess'])

const test = () => {
  upload()
}

// 返回布尔值
const beforeRead: UploaderBeforeRead = (file: any) => {
  if (file.type !== '') {
    showToast('请上传 .md 类型的文档')
    return false
  }
  return true
}

const afterRead: UploaderAfterRead = async (file: any) => {
  // 此时可以自行将文件上传至服务器
  const reader = new FileReader()
  reader.readAsText(file.file) // 以文本格式读取文件内容
  reader.onload = () => {
    console.log(reader) // 输出文件内容
    emit('ParsingSuccess', reader.result)
  }
}
</script>

<template>
  <div>
    <van-uploader :before-read="beforeRead" :after-read="afterRead" />
    <van-button @click="test">TEST</van-button>
  </div>
</template>

<style lang="scss" scoped></style>
