<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartContainer = ref(null)

const init = () => {
  // 初始化echarts实例
  const myChart = echarts.init(document.getElementById('histogram'))
  // 指定图表的配置项和数据
  const option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
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
  <div :ref="chartContainer" id="histogram"></div>
</template>

<style lang="scss" scoped></style>
