<script lang="ts" setup>
import { ref } from 'vue'
import { SvgIcons } from '@/libs/svg-icon.map'

// 用户信息
const userInfo = ref<any>({
  userName: 'Smiling Cat',
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
    <a href=""></a>
    <!-- 用户 -->
    <div class="right-user right-shadow card p-4">
      <div class="user-avatar">
        <img src="/src/assets/image/smilingSun.jpeg" alt="" />
      </div>
      <div class="user-name mt-2">{{ userInfo.userName }}</div>
      <div class="user-link mt-2">
        <a href="https://github.com/SmilingCatZty/Vue-blog" target="_blank" class="cursor-pointer">
          <img :src="SvgIcons.get('github')?.icon" alt="" :style="{ width: '20px' }" />
        </a>
        <a href="https://www.qq.com" target="_blank" class="cursor-pointer ml-3 mr-3">
          <img :src="SvgIcons.get('qq')?.icon" alt="" :style="{ width: '20px' }" />
        </a>
        <a href="https://juejin.cn/" target="_blank" class="cursor-pointer">
          <img :src="SvgIcons.get('juejin')?.icon" alt="" :style="{ width: '20px' }" />
        </a>
      </div>
      <div class="user-content mt-4">
        <div class="content-article cursor-pointer">
          <div>{{ blogs.article }}</div>
          <div>文章</div>
        </div>
        <div class="content-icon cursor-pointer">
          <div>{{ blogs.icon }}</div>
          <div>标签</div>
        </div>
        <div class="content-said cursor-pointer">
          <div>{{ blogs.said }}</div>
          <div>说说</div>
        </div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="right-notice right-shadow card mt-3 p-4">
      <div class="notice-title">公告</div>
      <div class="notice-content mt-2">
        <span>后端基于Nest开发,前端基于Vue3+Ts+daisyUI+ElementPlus开发</span>
      </div>
    </div>
    <!-- 最新回复 -->
    <div class="right-chat right-shadow card"></div>
    <!-- 网站统计 -->
    <div class="right-website right-shadow card mt-3 p-4">
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
@font-face {
  font-family: 'Rainbow-Party-2';
  src: url('@/assets/font/Rainbow-Party-2.ttf');
  font-weight: normal;
  font-style: normal;
}
.right-user {
  width: 100%;
  .user-avatar {
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
      border-radius: 50%;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }
  .user-name {
    font-family: Rainbow-Party-2;
    font-size: 24px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .user-link {
    display: flex;
    justify-content: center;
  }
  .user-content {
    display: flex;
    text-align: center;
    .content-article {
      flex: 1;
    }
    .content-icon {
      flex: 1;
      border-left: 1px solid rgba($color: #bcb8b8, $alpha: 0.8);
      border-right: 1px solid rgba($color: #bcb8b8, $alpha: 0.8);
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
.right-shadow {
  box-shadow: 0 0 1rem rgba($color: #e6e2e2, $alpha: 1);
}
</style>
