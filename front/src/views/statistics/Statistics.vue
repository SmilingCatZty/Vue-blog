<script lang="ts" setup>
import {} from 'vue'
import PageBox from '@/components/layout/pageBox.comp.vue'
import Histogram from './components/Histogram.vue'
import LineChart from './components/LineChart.vue'
import RoseChart from './components/RoseChart.vue'
</script>

<template>
  <div class="statistics">
    <PageBox title="统计页面">
      <!-- 历程 -->
      <div>
        <h2 class="text-center">实现历程</h2>
        <img class="w-full h-28" src="https://ghchart.rshah.org/SmilingCatZty" alt="2016rshah's Github chart" />
      </div>
      <!-- 文章发布统计 -->
      <div>
        <h2 class="text-center">文章发布统计图</h2>
        <Histogram :style="{width:'100%',height:'400px'}"></Histogram>
      </div>
      <!-- 标签统计 -->
      <div>
        <h2 class="text-center">Top10 标签统计图</h2>
        <LineChart :style="{width:'100%',height:'400px'}"></LineChart>
      </div>
      <!-- 文章分类统计图 -->
      <div>
        <h2 class="text-center">文章分类统计图</h2>
        <RoseChart :style="{width:'100%',height:'400px'}"></RoseChart>
      </div>
    </PageBox>
  </div>
</template>

<style lang="scss" scoped>
.statistics {
  // height: 100vh;
}
</style>
