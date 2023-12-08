<script lang="ts" setup>
import { } from 'vue'
import UpLoad from './UploadFile.comp.vue'
</script>

<template>
  <div class="footer bg-amber-100">
    <!-- <UpLoad></UpLoad> -->
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: 20vh;

  .f {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .password {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
