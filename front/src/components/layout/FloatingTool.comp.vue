<script lang="ts" setup>
import { reactive, onMounted, ref } from 'vue'
import type { FormInstance } from 'vant/lib/form/types'
import { showNotify } from 'vant'
import UploadFile from '@/components/layout/UploadFile.comp.vue'
import { blogApi } from '@/api/modules/blog'
import Tag from '@/components/layout/Tag.vue'

type BlogInfoModel = {
  blog_title: string
  blog_type: string
  blog_labels: string[]
  blog_is_top: boolean
  blog_background: string
  blog_digest: string
  blog_content: string
  create_time: Date
}

const defaultBlogInfo: BlogInfoModel = {
  blog_title: '',
  blog_type: '',
  blog_labels: [],
  blog_is_top: false,
  blog_background: 'https://gitee.com/zkz0/image/raw/master/img/img(88).webp',
  blog_digest: '',
  blog_content: '',
  create_time: new Date()
}

const props = defineProps({
  left: {
    type: String,
    default: '30px'
  },
  bottom: {
    type: String,
    default: '40px'
  }
})

const showFloatingBtn = ref<boolean>(false) // 展示悬浮按钮
const showPopup = ref<boolean>(false) // 展示遮罩层
const showBlogType = ref<boolean>(false) // 展示博客类型选择
const curStep = ref<number>(0) // 当前步骤
const createBlogRef = ref<FormInstance>()
const blog_background = ref([])

// 博客详情
let blog_info = reactive<BlogInfoModel>(defaultBlogInfo)

const BlogTypeColumns = [
  // 博客类型列表
  { text: '框架', value: '框架' },
  { text: '实习', value: '实习' },
  { text: '工作', value: '工作' },
  { text: '问题记录', value: '问题记录' },
  { text: '学习', value: '学习' }
]

const BlogLabels = [
  // 博客标签列表
  { text: 'JavaScript', value: 'JavaScript' },
  { text: 'TypeScript', value: 'TypeScript' },
  { text: 'Css', value: 'Css' },
  { text: 'Vue', value: 'Vue' },
  { text: 'React', value: 'React' }
]

const onConfirm = ({ selectedOptions }: { selectedOptions: any }) => {
  blog_info.blog_type = selectedOptions[0]?.text
  showBlogType.value = false
}

const closePopup = () => {
  createBlogRef.value?.resetValidation()
  blog_info = defaultBlogInfo
  curStep.value = 0
}

// 提交
const submit = async () => {
  console.log(blog_info)
  try {
    const { status, data } = await blogApi.createBlog(blog_info)
    if (status === 201) {
      curStep.value++
    }
  } catch (error) {
    showNotify({ type: 'warning', message: '当前提交出了些问题哦～请稍后重试' })
  }
}
// 下一步
const nextStep = () => {
  createBlogRef.value
    ?.validate()
    .then(() => {
      curStep.value++
    })
    .catch((error: any) => {
      console.log(error)
    })
}
// 上一步
const lastStep = () => {
  if (curStep.value === 0) {
    showPopup.value = false
    blog_info.create_time = new Date()
    blog_info = defaultBlogInfo
  } else {
    createBlogRef.value?.resetValidation()
    curStep.value--
  }
}

// 点击使用该工具
const useTool = () => {
  showPopup.value = true
}

// 标签选择
const chooseTag = (v: { status: boolean; label: string }) => {
  if (v.status) {
    blog_info.blog_labels.push(v.label)
  } else {
    blog_info.blog_labels = blog_info.blog_labels.filter((i) => i !== v.label)
  }
}

// 文件上传
const uploadParsingSuccess = (file: any) => {
  blog_info.blog_content = file
}

const handleScroll = () => {
  showFloatingBtn.value = window.pageYOffset >= 200 ? true : false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    v-show="showFloatingBtn"
    class="floating-tool z-20 fixed w-10 h-10 bottom-52 bg-red-300 cursor-pointer ani"
    :class="showFloatingBtn ? 'float-tool--active' : 'floating-tool'"
    :style="{ left: props.left, bottom: props.bottom }"
    @click="useTool"
  >
    <div class="w-full h-full flex justify-center items-center">
      <van-icon name="description-o" color="white" size="24" />
    </div>
  </div>
  <van-popup v-model:show="showPopup" round :style="{ padding: '20px' }" @closed="closePopup()">
    <div :style="{ width: '100vh', height: '80vh' }">
      <van-steps :active="curStep">
        <van-step>发布文章</van-step>
        <van-step>上传文件</van-step>
        <van-step>发布成功</van-step>
      </van-steps>

      <div v-if="curStep === 0">
        <van-form ref="createBlogRef">
          <van-cell-group inset>
            <!-- 标题 -->
            <van-field
              v-model="blog_info.blog_title"
              label="标题"
              name="blog_title"
              placeholder="文章标题"
              :rules="[{ required: true, message: '请填文章标题' }]"
            />
            <!-- 分类 -->
            <van-field
              v-model="blog_info.blog_type"
              is-link
              readonly
              name="blog_type"
              label="分类"
              placeholder="点击选择文章类型"
              :rules="[{ required: true, message: '请选择文章类型' }]"
              @click="showBlogType = true"
            />
            <van-popup v-model:show="showBlogType" position="bottom">
              <van-picker :columns="BlogTypeColumns" @confirm="onConfirm" @cancel="showBlogType = false" />
            </van-popup>
            <!-- 标签 -->
            <van-field name="blog_labels" label="标签">
              <template #input>
                <div class="flex justify-around">
                  <Tag
                    v-for="(item, i) in BlogLabels"
                    class="mr-2"
                    type="dashed"
                    color="orange"
                    border="orange"
                    :key="i"
                    :label="item.text"
                    :editable="true"
                    @tag-control="chooseTag"
                  />
                </div>
              </template>
            </van-field>
            <!-- 置顶文章 -->
            <van-field name="switch" label="是否置顶">
              <template #input>
                <van-switch v-model="blog_info.blog_is_top" />
              </template>
            </van-field>
            <!-- 文章封面图片 -->
            <van-field name="blog_background" label="文章封面">
              <template #input>
                <van-uploader v-model="blog_background" />
              </template>
            </van-field>
            <!-- 摘要 -->
            <van-field
              class="blog_digest"
              v-model="blog_info.blog_digest"
              rows="2"
              autosize
              label="摘要"
              name="blog_digest"
              type="textarea"
              maxlength="50"
              placeholder="请输入文章摘要"
              show-word-limit
              :rules="[{ required: true, message: '请填写文章摘要' }]"
              :border="true"
            />
          </van-cell-group>
          <div class="bottom-5 absolute left-1/2 -translate-x-1/2 flex">
            <van-button round block type="default" :style="{ width: '140px' }" @click="lastStep()">取消</van-button>
            <van-button round block type="primary" :style="{ width: '140px', marginLeft: '20px' }" @click="nextStep()">
              下一步
            </van-button>
          </div>
        </van-form>
      </div>

      <div v-if="curStep === 1" :style="{ height: '60vh' }">
        <UploadFile v-if="!blog_info.blog_content.length" @parsingSuccess="uploadParsingSuccess" />
        <v-md-editor
          v-if="blog_info.blog_content.length"
          v-model="blog_info.blog_content"
          mode="preview"
          height="63vh"
        ></v-md-editor>
        <div class="bottom-5 absolute left-1/2 -translate-x-1/2 flex">
          <van-button round block type="default" :style="{ width: '140px' }" @click="lastStep()">上一步</van-button>
          <van-button round block type="primary" :style="{ width: '140px', marginLeft: '20px' }" @click="submit()">
            提交
          </van-button>
        </div>
      </div>

      <div v-if="curStep === 2">
        {{ '上传成功' }}
        <van-button round block type="primary" :style="{ width: '140px' }" @click="showPopup = false">确定</van-button>
      </div>
    </div>
  </van-popup>
</template>

<style lang="scss" scoped>
.floating-tool {
  transition: cubic-bezier(0.25, 0.8, 0.5, 1);
}
.float-tool--active {
  transform: scale(1);
}
.blog_digest :deep(.van-cell__value) {
  border: 1px solid rgba($color: #dfdada, $alpha: 1);
  padding: 10px;
}
</style>
