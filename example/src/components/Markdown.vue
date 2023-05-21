<script setup>
import { markRaw, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const Render = ref(() => {})

async function fetchMd() {
  if (route.meta?.markdown) {
    const md = await import(`@/markdown/${route.name}.md`)
    Render.value = markRaw(md.default)
  }
}

onMounted(async () => fetchMd())
watch(() => route.name, async () => fetchMd())
</script>

<template>
  <div class="max-w-7xl rounded bg-white px-10 py-2 shadow">
    <article class="prose prose-truegray max-w-full text-base xl:text-xl">
      <component :is="Render" />
    </article>
  </div>
</template>
