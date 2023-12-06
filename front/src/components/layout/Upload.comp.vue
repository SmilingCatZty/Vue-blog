<script lang="ts" setup>
import {} from 'vue'
import { showToast } from 'vant/lib/toast/function-call'
import { blogApi } from '@/api/modules/blog'

const upload = async() => {
  const res = await blogApi.uploadBlog()
}

const test = () => {
  upload()
}

// 返回布尔值
const beforeRead = (file: any) => {
  if (file.type !== 'image/jpeg') {
    showToast('请上传 jpg 格式图片')
    return false
  }
  return true
}

const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  console.log(file)
}
</script>

<template>
  <div>
    <van-uploader :before-read="beforeRead" :after-read="afterRead" />
    <van-button @click="test">TEST</van-button>
  </div>
</template>

<style lang="scss" scoped></style>
