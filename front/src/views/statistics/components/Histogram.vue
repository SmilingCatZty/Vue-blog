<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import { blogApi } from '@/api/modules/blog'

const chartContainer = ref<any>(null)
let myChart = ref<echarts.ECharts>()
let myChartOptions = ref<any>({
  // 指定图表的配置项和数据
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      center: ['50%', '50%'],
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]
})

// 图形初始化
const init = () => {
  // 初始化echarts实例
  myChart.value = echarts.init(document.getElementById('histogram'))
  // 使用刚指定的配置项和数据显示图表。
  myChart.value.setOption(myChartOptions.value)
}

// 获取文章发布数据
const getPublicationData = async () => {
  try {
    const { data, status } = await blogApi.getArticlePublication()
    if (status === 200 && data) {
      myChartOptions.value.series[0].data = data
    }
  } catch (error) {
    console.error('histogram', error)
  }
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  myChart.value?.dispose()
})
</script>

<template>
  <div :ref="chartContainer" id="histogram"></div>
</template>

<style lang="scss" scoped></style>
