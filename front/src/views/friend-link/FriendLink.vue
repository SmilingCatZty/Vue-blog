<script lang="ts" setup>
import { ref } from 'vue'
import PageBox from '@/components/layout/pageBox.comp.vue'
import CodeBlog from './components/CodeBlog.vue'

const friendBlogs = ref<any>({
  basics: [
    { name: 'Hexo', link: 'https://hexo.io/zh-cn/', avatar: '', descr: '快速、简洁且高效的博客框架' },
    {
      name: 'Butterfly',
      link: 'https://butterfly.js.org/',
      avatar: '',
      descr: 'A Simple and Card UI Design theme for Hexo'
    },
    {
      name: 'Vue-press',
      link: 'https://v2.vuepress.vuejs.org/zh/',
      avatar: '',
      descr: 'Vue 驱动的静态网站生成器,你也可以挑选一个社区主题，或者创建一个你自己的主题。'
    }
  ],
  recommend: [
    {
      name: '推荐1',
      link: '',
      avatar: '',
      descr:
        '丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间',
      screenImg: ''
    },
    {
      name: '推荐2',
      link: '',
      avatar: '',
      descr:
        '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发',
      screenImg: ''
    },
    {
      name: '推荐3',
      link: '',
      avatar: '',
      descr:
        '茅檐低小，溪上青青草。醉里吴音相媚好，白发谁家翁媪？大儿锄豆溪东，中儿正织鸡笼。最喜小儿亡赖，溪头卧剥莲蓬。',
      screenImg: ''
    },
    {
      name: '推荐4',
      link: '',
      avatar: '',
      descr:
        '东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。',
      screenImg: ''
    },
    {
      name: '推荐5',
      link: '',
      avatar: '',
      descr: '一曲新词酒一杯，去年天气旧亭台。夕阳西下几时回？无可奈何花落去，似曾相识燕归来。小园香径独徘徊。',
      screenImg: ''
    }
  ],
  friends: [
    { name: '朋友1', link: '', avatar: '', descr: '' },
    { name: '朋友2', link: '', avatar: '', descr: '' },
    { name: '朋友3', link: '', avatar: '', descr: '' },
    { name: '朋友4', link: '', avatar: '', descr: '' }
  ]
})

const codeMsg = ref<any>({
  name: 'Smilling Cat Blog',
  link: 'http://localhost:5173/friend-link',
  avatar: '123321',
  descr: '213321213321',
  screenImg: '3333333'
})

const isExpend = ref<boolean>(false)
</script>

<template>
  <PageBox title="友人账">
    <!-- 钓鱼台 -->
    <div class="font-type">
      <h2 class="text-indigo-300">钓鱼台</h2>
      <span class="text-xl">
        <span>{{ '从图书馆顶层的隐秘角落里发现了闪着金光的来自友链 ' }}</span>
        <a class="text-indigo-300" href="">{{ '小吉崽汁の窝' }}</a>
        <span>
          <span>{{ '的文章：' }}</span>
          <a class="text-indigo-300" href="">{{ 'Vuex' }}</a>
        </span>
      </span>
    </div>
    <!-- 开发基础 -->
    <div class="mt-4">
      <h2 class="font-type text-indigo-300">开发基础</h2>
      <span class="font-type text-xl">少了它们, 俺们的博客仿佛少了许多灵魂～</span>
      <div>
        <ul class="flex">
          <li class="basics-item flex w-1/4 items-center" v-for="(item, idx) in friendBlogs.basics" :key="idx">
            <div>
              <img class="basics-item-img" :src="item.avatar" alt="" />
            </div>
            <div class="flex flex-wrap ml-2">
              <span class="w-full text-xl line-clamp-1 text-ellipsis">{{ item.name }}</span>
              <span class="w-full text-sm line-clamp-2 text-ellipsis">{{ item.descr }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="mt-4">
      <h2 class="font-type text-indigo-300">推荐</h2>
      <div>
        <ul class="flex flex-wrap justify-start">
          <li
            class="recommend-item h-60 mr-2 mt-3 overflow-hidden"
            v-for="(item, idx) in friendBlogs.recommend"
            :key="idx"
          >
            <!-- <div class="w-full recommend-item-img"> -->
            <img class="recommend-item-img w-full h-4/6" :src="item.screenImg" alt="" />
            <!-- </div> -->
            <div class="w-full pl-2 pr-2">
              <span class="w-full text-xl line-clamp-1 text-ellipsis">{{ item.name }}</span>
              <span class="w-full text-base line-clamp-2 text-ellipsis">{{ item.descr }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 友人帐 -->
    <div class="mt-4">
      <h2 class="font-type text-indigo-300">猫猫的友人帐</h2>
      <div>
        <ul class="flex">
          <li class="basics-item flex w-1/4 items-center" v-for="(item, idx) in friendBlogs.friends" :key="idx">
            <div>
              <img class="basics-item-img" :src="item.avatar" alt="" />
            </div>
            <div class="flex flex-wrap ml-2">
              <span class="w-full text-xl line-clamp-1 text-ellipsis">{{ item.name }}</span>
              <span class="w-full text-sm line-clamp-2 text-ellipsis">{{ item.descr }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 申请友链 -->
    <div class="mt-4">
      <h2 class="font-type text-indigo-300">把你的名字交给我叭</h2>
      <h4 class="font-type">个人网站信息</h4>
      <div>
        <CodeBlog
          :name="codeMsg.name"
          :avatar="codeMsg.avatar"
          :descr="codeMsg.descr"
          :link="codeMsg.link"
          :screen-img="codeMsg.screenImg"
        />
        <h4 class="font-type mt-2">模版</h4>
        <CodeBlog />
      </div>
      <div class="friend-link-apply overflow-hidden mt-4">
        <div
          class="apply-title flex h-10 items-center pl-3 pr-3 text-xl text-white"
          :class="isExpend ? 'apply-active' : 'apply-static'"
          @click="isExpend = !isExpend"
        >
          <span>
            <van-icon v-show="!isExpend" name="play" />
            <van-icon v-show="isExpend" name="arrow-down" />
          </span>
          <span>{{ isExpend ? '友链申请须知' : '申请友链' }}</span>
        </div>
        <ul v-show="isExpend" class="bg-white p-4 text-lg">
          <li>
            <span class="mr-3">1</span>
            <span>贵站已添加本站友: Smilling Cat`s Blog</span>
          </li>
          <li>
            <span class="mr-3">2</span>
            <span>贵站域名主体为个人，网站类型为博客</span>
          </li>
          <li>
            <span class="mr-3">3</span>
            <span>贵站可在中国大陆正常访问</span>
          </li>
          <li>
            <span class="mr-3">4</span>
            <span>贵站已绑定自定义域名，非 *.github.io等不稳定链接</span>
          </li>
          <li>
            <span class="mr-3">5</span>
            <span>贵站承诺不发布或展示任何违反中国法律的内容</span>
          </li>
        </ul>
      </div>
    </div>
  </PageBox>
</template>

<style lang="scss" scoped>
.font-type {
  font-family: Yuzhou;
}
.basics-item {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  .basics-item-img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    background-color: #ccc;
  }
}
.basics-item + .basics-item {
  margin-left: 15px;
}

.recommend-item {
  width: 30%;
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  .recommend-item-img {
    width: 100%;
    background-color: #ccc;
  }
}
// 友链
.friend-link-apply {
  border: 1px solid #1989fa;
  border-radius: 0.8rem;
  .apply-active {
    background-color: #1989fa;
    color: 000;
  }
  .apply-static {
    background-color: 000;
    color: #1989fa;
  }
}
</style>
