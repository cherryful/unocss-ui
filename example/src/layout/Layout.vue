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
      <main class="flex-1 overflow-y-auto bg-gray-100 overflow-x-hidden bg-gradient-to-r to-violet-300 from-indigo-200">
        <div class="px-4 py-6 sm:mt-3 mx-10 ml-32">
          <RouterView v-slot="{ Component }">
            <component :is="Component" />
          </RouterView>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
