<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartContainer = ref(null)

const init = () => {
  // 初始化echarts实例
  const myChart = echarts.init(document.getElementById('lineChart'))
  // 指定图表的配置项和数据
  const option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
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
};
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  chart.value.dispose()
})
</script>

<template>
  <div :ref="chartContainer" id="lineChart"></div>
</template>

<style lang="scss" scoped></style>
