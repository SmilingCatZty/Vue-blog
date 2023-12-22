<script lang="ts" setup>
</script>

<template>
  <div class="footer bg-amber-100">
    <div id="jsi-flying-fish-container" class="container" style="background-color: #fff"></div>
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

#sidebar_search_box input[type='text'] {
  max-width: none;
}
#jsi-flying-fish-container {
  opacity: 1.0;
  z-index: 20;
  width: 100%;
  bottom: 0;
}
@media (min-width: 1024px) {
  .container {
    max-width: none;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: none;
  }
}
@media (min-width: 640px) {
  .container {
    max-width: none;
  }
}
</style>
