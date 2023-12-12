<script lang="ts" setup>
import {} from 'vue'
import { showToast } from 'vant/lib/toast/function-call'
import { blogApi } from '@/api/modules/blog'
import type { UploaderAfterRead, UploaderBeforeRead } from 'vant/lib/uploader/types'

const emit = defineEmits(['parsingSuccess'])

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
    emit('parsingSuccess', reader.result)
  }
}
</script>

<template>
  <div class="w-full h-full">
    <van-uploader class="blog-upload w-full h-full" :before-read="beforeRead" :after-read="afterRead">
      <div class="w-full h-full bg-red-300"></div>
    </van-uploader>
  </div>
</template>

<style lang="scss" scoped>
.blog-upload :deep(.van-uploader__wrapper) {
  width: 100%;
  height: 100%;
  .van-uploader__input-wrapper {
    width: 100%;
    height: 100%;
  }
}
</style>
@/modules/blog