<script lang="ts" setup>
import { ref } from 'vue'

// 用户信息
const userInfo = ref<any>({
  userName: 'zty',
  avatar: 'https://i0.hdslb.com/bfs/face/5b7c5ee50f5a2fe2f76d7ed8090048e720a73753.jpg@120w_120h_1c.avif'
})

// 日志
const blogs = ref<any>({
  article: 15,
  icon: 8,
  said: 1
})
</script>

<template>
  <div class="right-contain-box">
    <div class="right-user bg-blue-100 card shadow-lg p-4">
      <div class="user-avatar">
        <img src="/src/assets/image/smilingSun.jpeg" alt="" />
      </div>
      <div class="user-name mt-2">{{ userInfo.userName }}</div>
      <div class="user-content mt-2">
        <div class="content-article">
          <div>{{ blogs.article }}</div>
          <div>文章</div>
        </div>
        <div class="content-icon">
          <div>{{ blogs.icon }}</div>
          <div>标签</div>
        </div>
        <div class="content-said">
          <div>{{ blogs.said }}</div>
          <div>说说</div>
        </div>
      </div>
    </div>
    <div class="right-notice bg-blue-100 card shadow-lg mt-3 p-4">
      <div class="notice-title">公告</div>
      <div class="notice-content mt-2">
        <span>后端基于Nest开发,前端基于Vue3+Ts+daisyUI+ElementPlus开发</span>
      </div>
    </div>
    <div class="right-chat bg-blue-100 card shadow-lg"></div>
    <div class="right-website bg-blue-100 card shadow-lg mt-3 p-4">
      <div class="website-title">网站咨询</div>
      <div class="website-online website-item mt-2">
        <span>在线人数</span>
        <span>1</span>
      </div>
      <div class="website-viewer website-item mt-2">
        <span>访问量</span>
        <span>11</span>
      </div>
      <div class="website-time website-item mt-2">
        <span>运行时常</span>
        <span>111</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-user {
  width: 100%;
  .user-avatar {
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
      border: 1px solid blue;
      border-radius: 50%;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }
  .user-name {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .user-content {
    display: flex;
    text-align: center;
    .content-article {
      flex: 1;
    }
    .content-icon {
      flex: 1;
    }
    .content-said {
      flex: 1;
    }
  }
}
.right-notice {
  width: 100%;
  .notice-title {
    font-size: 20px;
    font-weight: 500;
  }
  .notice-content {
    font-size: 16px;
    overflow: hidden;
  }
}
.right-chat {
}
.right-website {
  width: 100%;

  .website-title {
    font-size: 20px;
    font-weight: 500;
  }

  .website-item {
    display: flex;
    justify-content: space-between;
  }
}
</style>
