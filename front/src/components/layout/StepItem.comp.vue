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
  <div class="comp-step_item">
    <div class="steps-item-line">
      <div class="line" />
      <div
        class="circle"
        :style="{
          width: `${props.iconSize}px`,
          height: `${props.iconSize}px`,
          backgroundColor: props.iconColor
        }"
      />
    </div>
    <div
      class="steps-item-step-content box-border flex-1"
      :style="{ fontSize: `${props.fontSize}px`, color: props.fontColor }"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comp-step_item {
  display: flex;
  width: 100%;
  .steps-item-line {
    position: relative;
    align-items: center;
    width: 40px;
    .line {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%);
      width: 0.2rem;
      height: 100%;
      background-color: rgba($color: #dcd8d8, $alpha: 1);
    }
    .circle {
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      // border: 0.15rem solid orange;
      border-radius: 50%;
      background-color: orange;
    }
  }
  .steps-item-step-content {
    padding: 5px;
  }
}
.comp-step_item:hover {
  .steps-item-line {
    .circle {
      background-color: rgb(149, 149, 244) !important;
    }
  }
  .steps-item-step-content {
    color: rgb(149, 149, 244) !important ;
  }
}
</style>
