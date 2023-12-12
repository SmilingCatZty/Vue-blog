<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '@/components/layout/Header.comp.vue'
import Footer from '@/components/layout/Footer.comp.vue'
import { BackTop } from 'vant'
import FloatingTool from '@/components/layout/FloatingTool.comp.vue'

const route = useRoute()
</script>

<template>
  <div class="app-wrapper">
    <Header v-show="route.path !== '/404'"></Header>
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </router-view>
      <FloatingTool bottom="28vh" />
      <BackTop bottom="20vh" />
    </main>
    <Footer />
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
