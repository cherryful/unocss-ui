<script setup>
import { ref } from 'vue'
import UProgress from '../../../../packages/components/src/components/Progress.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const state = ref({
  type: 'primary',
  variant: 'bar',
  scoreLength: 10,
})

const snippets = {
  type: [],
  variant: [],
}

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const variants = ['bar', 'score', 'circle']
const scoreLengths = [5, 10, 15, 20]

const percentage = ref(0)
setInterval(() => {
  percentage.value <= 100
    ? percentage.value += 1
    : percentage.value = 0
}, 1000)
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <div class="w-full" :class="state.variant === 'circle' ? 'max-w-32' : 'max-w-96' ">
          <UProgress
            :type="state.type"
            :variant="state.variant"
            :percentage="percentage"
            :score-length="state.scoreLength"
          />
        </div>
      </template>
      <template #props>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-30">
            type
          </div>
          <URadio v-for="item in types" :key="item" v-model="state.type" :type="item" :value="item">
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-30">
            variant
          </div>
          <URadio v-for="item in variants" :key="item" v-model="state.variant" :type="item" :value="item">
            {{ item }}
          </URadio>
        </div>
        <div v-if="state.variant === 'score'" class="flex flex-wrap items-center gap-2">
          <div class="w-30">
            score-length
          </div>
          <URadio v-for="item in scoreLengths" :key="item" v-model="state.scoreLength" :value="item">
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-30">
            percentage
          </div>
          <div class="flex gap-5">
            <UButton type="warning" @click="percentage = 0">
              reset
            </UButton>
            <UButton type="success" @click="percentage = 100">
              finish
            </UButton>
            <UButton
              type="primary" @click="() => {
                percentage <= 90 ? (percentage += 10) : percentage = 100
              }"
            >
              plus 10
            </UButton>
            <UButton
              type="primary" @click="() => {
                percentage >= 10 ? (percentage -= 10) : percentage = 0
              }"
            >
              minus 10
            </UButton>
          </div>
        </div>
      </template>
    </Playground>
    <Sample title="type" :snippets="snippets.type">
      <div class="max-w-96 w-full space-y-6">
        <UProgress type="primary" :percentage="percentage" />
        <UProgress type="secondary" :percentage="percentage" />
        <UProgress type="accent" :percentage="percentage" />
        <UProgress type="success" :percentage="percentage" />
        <UProgress type="info" :percentage="percentage" />
        <UProgress type="warning" :percentage="percentage" />
        <UProgress type="error" :percentage="percentage" />
      </div>
    </Sample>
    <Sample title="variant" :snippets="snippets.variant">
      <div class="max-w-96 w-full space-y-6">
        <UProgress :percentage="percentage" />
        <UProgress :percentage="percentage" variant="score" :score-length="15" />
        <UProgress :percentage="percentage" variant="circle" class="w-25" />
      </div>
    </Sample>
  </DocWrap>
</template>
