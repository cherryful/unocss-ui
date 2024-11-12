<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'

withDefaults(defineProps<{
  title?: string
  snippets?: string | string[]
}>(), {
  title: '',
  snippet: () => [],
})

const { copy } = useClipboard()

const toastRef = ref<any>(null)
const snippetRef = ref<HTMLElement | null>(null)
const sampleRef = ref<HTMLElement | null>(null)
const dummyCodeRef = ref<HTMLElement | null>(null)
const expandButtonRef = ref<HTMLElement | null>(null)

const flux = reactive({
  collapsed: true,
  isSnippetCodeOverflow: false,
  codeSnippetMaxHeight: 0,
  mounted: false,

  toggleCollapse() {
    flux.collapsed = !flux.collapsed
    flux.resizeSnippetContent()
  },

  setSnippetContentHeight() {
    if (dummyCodeRef.value && snippetRef.value) {
      flux.codeSnippetMaxHeight = dummyCodeRef.value.offsetHeight
      flux.isSnippetCodeOverflow = snippetRef.value.offsetHeight > flux.codeSnippetMaxHeight
    }
  },

  resizeSnippetContent() {
    if (snippetRef.value && dummyCodeRef.value && expandButtonRef.value) {
      flux.collapsed
        ? flux.codeSnippetMaxHeight = dummyCodeRef.value.offsetHeight
        : flux.codeSnippetMaxHeight = snippetRef.value.offsetHeight + expandButtonRef.value.offsetHeight
    }
  },

  onCopy(val: string) {
    copy(val)
    toastRef.value?.success('copy code successfully!')
  },
})

onBeforeMount(() => {
  window.addEventListener('resize', flux.resizeSnippetContent)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', flux.resizeSnippetContent)
})

onMounted(() => {
  flux.setSnippetContentHeight()
  flux.resizeSnippetContent()
  setTimeout(() => flux.mounted = true, 100)
})
</script>

<template>
  <section class="w-full">
    <div
      class="border-x border-t border-gray-100 bg-white p-3 shadow sm:p-4"
      :class="snippets?.length ? 'rounded-t-lg' : 'rounded-lg border-b'"
    >
      <div class="mb-2 text-lg text-info-500">
        {{ title }}
      </div>
      <div class="flex items-center justify-center border-2 rounded-md border-dashed p-4 shadow-sm">
        <slot />
      </div>
    </div>

    <div
      v-if="snippets?.length"
      class="relative overflow-y-hidden rounded-b-lg bg-gray-800"
      :class="{ 'transition-all duration-500 ease-out': flux.mounted }"
      :style="[flux.isSnippetCodeOverflow ? { maxHeight: `${flux.codeSnippetMaxHeight}px` } : {}]"
    >
      <div ref="sampleRef" class="p-4">
        <div ref="dummyCodeRef" class="invisible absolute p-4">
          <code class="whitespace-pre-wrap text-sm">
            &#8203; &#8203; &#8203; &#8203;
          </code>
        </div>

        <div
          ref="snippetRef"
          class="overflow-x-auto py-2 space-y-5"
          :class="{ 'pb-4': flux.isSnippetCodeOverflow }"
        >
          <div
            v-for="(code, index) in snippets"
            :key="index"
            class="group relative"
          >
            <hljsVuePlugin.component language="xml" :code="code" />
            <button
              class="absolute right-0 top-0 inline-flex items-center text-white opacity-50 transition-opacity duration-100 ease-in-out group-hover:opacity-100"
              @click="flux.onCopy(code)"
            >
              <div class="i-mdi:content-copy" />
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="flux.isSnippetCodeOverflow"
        ref="expandButtonRef"
        class="absolute bottom-0 w-full from-gray-800 bg-gradient-to-t p-2 text-center"
      >
        <button
          class="rounded-full bg-gray-700 px-2 py-1 text-sm leading-tight text-gray-100 focus:outline-none"
          @click="flux.toggleCollapse()"
        >
          <template v-if="flux.collapsed">
            expand
          </template>
          <template v-else>
            collapse
          </template>
        </button>
      </div>
    </div>
  </section>
  <UToast ref="toastRef" position="top" align="right" />
</template>
