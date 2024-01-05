<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { blogApi } from '@/api/modules/blog'
import * as echarts from 'echarts'

const chartContainer = ref<any>(null)
let myChart = ref<echarts.ECharts>()
let myChartOptions = ref<any>({
  series: [
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 30, name: 'rose 1' },
        { value: 28, name: 'rose 2' },
        { value: 26, name: 'rose 3' },
        { value: 24, name: 'rose 4' },
        { value: 22, name: 'rose 5' },
        { value: 20, name: 'rose 6' },
        { value: 18, name: 'rose 7' },
        { value: 16, name: 'rose 8' }
      ]
    }
  ]
})

// 图形初始化
const init = () => {
  // 初始化echarts实例
  myChart.value = echarts.init(document.getElementById('roseChart'))
  // 使用刚指定的配置项和数据显示图表。
  myChart.value.setOption(myChartOptions.value)
}

// 获取发布类型数据
const getArticleTypeData = async () => {
  try {
    const { data, status } = await blogApi.getArchive()
    if (status === 200 && data) {
      myChartOptions.value.series[0].data = data
    }
  } catch (error) {
    console.error('roseChart-error', error)
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
  <div :ref="chartContainer" id="roseChart" class="flex justify-center"></div>
</template>

<style lang="scss" scoped></style>
