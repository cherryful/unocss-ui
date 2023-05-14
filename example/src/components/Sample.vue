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
  <section>
    <div
      class="p-3 sm:p-4 shadow border-t bg-white border-gray-100 border-r border-l"
      :class="snippets?.length ? 'rounded-t-lg' : 'rounded-lg border-b'"
    >
      <div class="text-lg mb-2 text-info">
        {{ title }}
      </div>
      <div class="p-3 flex justify-center border-2 border-dashed">
        <slot />
      </div>
    </div>

    <div
      v-if="snippets?.length"
      class="relative bg-gray-800 rounded-b-lg overflow-y-hidden"
      :class="{ 'transition-all duration-500 ease-out': flux.mounted }"
      :style="[flux.isSnippetCodeOverflow ? { maxHeight: `${flux.codeSnippetMaxHeight}px` } : {}]"
    >
      <div ref="sampleRef" class="p-4">
        <div ref="dummyCodeRef" class="p-4 invisible absolute">
          <code class="text-sm whitespace-pre-wrap">
            &#8203; &#8203; &#8203; &#8203;
          </code>
        </div>

        <div
          ref="snippetRef"
          class="space-y-5 py-2 overflow-x-auto"
          :class="{ 'pb-4': flux.isSnippetCodeOverflow }"
        >
          <div
            v-for="(code, index) in snippets"
            :key="index"
            class="relative group"
          >
            <hljsVuePlugin.component language="xml" :code="code" />
            <button
              class="absolute items-center text-white top-0 right-0 transition-opacity ease-in-out inline-flex opacity-50 group-hover:opacity-100 duration-100"
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
        class="absolute w-full p-2 text-center bottom-0 bg-gradient-to-t from-gray-800"
      >
        <button
          class="text-sm rounded-full px-2 py-1 focus:outline-none bg-gray-700 text-gray-100 leading-tight"
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

    <UToast ref="toastRef" position="top" align="right" />
  </section>
</template>
