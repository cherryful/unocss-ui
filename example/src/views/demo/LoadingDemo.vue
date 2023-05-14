<script setup lang="ts">
import ULoading from '../../../../components/src/components/Loading.vue'
</script>

<template>
  <div class="space-y-5">
    <div class="mb-2">
      ULoading Type:
    </div>
    <div class="flex space-x-5">
      <ULoading type="primary" />
      <ULoading type="secondary" />
      <ULoading type="accent" />
      <ULoading type="success" />
      <ULoading type="info" />
      <ULoading type="warning" />
      <ULoading type="error" />
    </div>

    <div class="mb-2">
      Custom ULoading:
    </div>
    <div class="flex items-center space-x-5">
      <ULoading :thickness="4" />
      <ULoading :thickness="15" />
      <ULoading type="error" class="h-15 w-15" />
      <ULoading>
        <template #icon>
          <div class="i-mdi:ULoading h-8 w-8 text-blue-500 animate-spin" />
        </template>
      </ULoading>
      <ULoading class="h-10 w-10">
        <template #icon>
          <svg class="text-purple-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><rect width="7.33" height="7.33" x="1" y="1" fill="currentColor"><animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="1" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="1" y="15.66" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="15.66" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="15.66" fill="currentColor"><animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" /></rect></svg>
        </template>
      </ULoading>
      <ULoading>
        <template #icon>
          <div class="animate-pulse cursor-default">
            ULoading...
          </div>
        </template>
      </ULoading>
    </div>

    <div class="mb-2">
      Wrap Content:
      <div class="flex items-center space-x-5">
        <ULoading>
          <div class="block max-w-sm items-center border border-gray-100 rounded-lg bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </ULoading>
        <ULoading>
          <template #icon>
            <svg class="text-green-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><rect width="7.33" height="7.33" x="1" y="1" fill="currentColor"><animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="1" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="1" y="15.66" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="8.33" y="15.66" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33" /></rect><rect width="7.33" height="7.33" x="15.66" y="15.66" fill="currentColor"><animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66" /><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" /><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33" /></rect></svg>
          </template>
          <div class="block max-w-sm items-center border border-gray-100 rounded-lg bg-white p-6 shadow-md dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </ULoading>
      </div>
    </div>
  </div>
</template>
