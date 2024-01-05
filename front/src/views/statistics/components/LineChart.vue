<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { blogApi } from '@/api/modules/blog'
import * as echarts from 'echarts'

const chartContainer = ref<any>(null)
let myChart = ref<echarts.ECharts>()
let myChartOptions = ref<any>({
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      center: ['50%', '50%'],
      data: [10, 22, 28, 23, 19],
      type: 'line',
      areaStyle: {}
    },
    {
      data: [25, 14, 23, 35, 10],
      type: 'line',
      areaStyle: {
        color: '#ff0',
        opacity: 0.5
      }
    }
  ]
})

// 图形初始化
const init = () => {
  // 初始化echarts实例
  myChart.value = echarts.init(document.getElementById('lineChart'))
  // 指定图表的配置项和数据
  // 使用刚指定的配置项和数据显示图表。
  myChart.value.setOption(myChartOptions.value)
}

// 获取文章发布数据
const getArticleTagData = async () => {
  try {
    const { data, status } = await blogApi.getArticleForTag()
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
  <div :ref="chartContainer" id="lineChart"></div>
</template>

<style lang="scss" scoped></style>
