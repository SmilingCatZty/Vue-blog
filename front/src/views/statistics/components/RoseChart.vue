<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartContainer = ref(null)

const init = () => {
  // 初始化echarts实例
  const myChart = echarts.init(document.getElementById('roseChart'))
  // 指定图表的配置项和数据
  const option = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 100,
            name: 'A'
          },
          {
            value: 200,
            name: 'B'
          },
          {
            value: 300,
            name: 'C'
          },
          {
            value: 400,
            name: 'D'
          },
          {
            value: 500,
            name: 'E'
          }
        ],
        roseType: 'area'
      }
    ]
  }
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
  <div :ref="chartContainer" id="roseChart"></div>
</template>

<style lang="scss" scoped></style>
