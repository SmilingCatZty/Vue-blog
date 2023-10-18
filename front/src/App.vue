<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="app-wrapper">
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.app-wrapper {
  position: relative;
  min-height: 100vh;
}
</style>
