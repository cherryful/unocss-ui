<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="h-screen flex bg-gray-100">
    <Sidebar />
    <div class="flex flex-1 flex-col overflow-hidden">
      <Header />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="mx-auto px-4 py-6 container sm:mt-3">
          <RouterView v-slot="{ Component }">
            <component :is="Component" />
          </RouterView>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
