<script setup lang="ts">
import Sidebar from './Sidebar.vue'

import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="flex bg-gray-100 h-screen">
    <Sidebar />
    <div class="flex flex-col flex-1 overflow-hidden">
      <Header />
      <main class="flex-1 bg-gray-100 overflow-y-auto overflow-x-hidden">
        <div class="px-4 py-6 sm:mt-3 mx-auto container">
          <RouterView v-slot="{ Component }">
            <component :is="Component" />
          </RouterView>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
