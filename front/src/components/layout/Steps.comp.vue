<script lang="ts" setup>
import {} from 'vue'

const props = defineProps({
  fontSize: {
    type: Number,
    default: 24
  },
  fontColor: {
    type: String,
    default: '#000'
  },
  iconSize: {
    type: Number,
    default: 20
  },
  iconColor: {
    type: String,
    default: 'grey'
  }
})
</script>

<template>
  <div class="comp-steps">
    <div class="steps-nav">
      <div class="steps-nav-line">
        <div class="line"></div>
        <div class="circle"></div>
      </div>
      <div class="steps-nav-content text-2xl"></div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.comp-steps {
  width: 100%;
}
.steps-item {
  display: flex;
}
.steps-nav {
  display: flex;
  align-items: center;
  .steps-nav-line {
    position: relative;
    width: 40px;
    height: 80px;
    .line {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      width: 0.2rem;
      height: 50%;
      background-color: rgba($color: #dcd8d8, $alpha: 1);
    }
    .circle {
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 1rem;
      height: 1rem;
      border: 0.15rem solid orange;
      border-radius: 50%;
      background-color: red;
    }
  }
}
</style>
