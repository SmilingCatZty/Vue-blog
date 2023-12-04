<script lang="ts" setup>
import {} from 'vue'
</script>

<template>
  <div class="footer bg-amber-100">
    <div class="f">
      <text class="password">密码</text>
      <text class="code">dsadsadsadsa</text>
    </div>
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
