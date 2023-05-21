<script setup>
import { ref } from 'vue'
import cherryfulImgUrl from '../assets/cherryful.png'
import { useSidebar } from '@/composables/useSidebar'

const { isOpen } = useSidebar()
const dropdownOpen = ref(false)
const notificationOpen = ref(false)
</script>

<template>
  <header
    class="border-primary-600 flex items-center justify-between border-b-4 bg-white px-6 py-2"
  >
    <div class="flex items-center">
      <button
        class="text-gray-500 lg:hidden focus:outline-none"
        @click="isOpen = true"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none"> <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg>
        </span>

        <input
          class="focus:ring-primary-500 focus:border-primary-600 w-32 border-gray-200 rounded-md py-2 pl-10 pr-4 text-gray-700 sm:w-64 focus:ring-2"
          type="text"
          placeholder="Search"
        >
      </div>
    </div>

    <div class="flex items-center">
      <div class="flex items-center">
        <a
          target="_blank"
          href="https://github.com/cherryful/unocss-ui"
          class="i-mdi:github h-6 w-6"
        />
      </div>
      <div class="flex items-center">
        <div class="relative">
          <button
            class="mx-4 flex text-gray-600 focus:outline-none"
            @click="notificationOpen = !notificationOpen"
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <div
            v-show="notificationOpen"
            class="fixed inset-0 z-10 h-full w-full"
            @click="notificationOpen = false"
          />

          <div
            v-show="notificationOpen"
            class="absolute right-0 z-10 mt-2 w-80 overflow-hidden rounded-lg bg-white shadow-xl"
            style="width: 20rem"
          >
            <a
              target="_blank"
              href="https://www.github.com/cherryful"
              class="hover:bg-primary-600 flex items-center px-4 py-3 text-gray-600 -mx-2 hover:text-white"
            >
              <img
                class="mx-1 h-8 w-8 rounded-full object-cover"
                :src="cherryfulImgUrl"
                alt="avatar"
              >
              <p class="mx-2 text-sm">
                <span class="font-bold" href="#">cherryful</span> produced
                <span class="text-primary-400 font-bold" href="#">new and interesting projects!</span>
                Welcome to view and star!
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="relative">
        <button
          class="relative z-10 block h-8 w-8 overflow-hidden rounded-full shadow focus:outline-none"
          @click="dropdownOpen = !dropdownOpen"
        >
          <img
            class="h-full w-full object-cover"
            src="https://avatars.githubusercontent.com/u/48195906?s=96&v=4"
            alt="Your avatar"
          >
        </button>

        <div
          v-show="dropdownOpen"
          class="fixed inset-0 z-10 h-full w-full"
          @click="dropdownOpen = false"
        />

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="absolute right-0 z-20 mt-2 w-48 rounded-lg bg-white py-1 shadow-xl"
          >
            <a
              href="https://github.com/szluyu99"
              target="_blank"
              class="hover:bg-primary-600 flex rounded-md px-4 py-2 text-sm text-gray-700 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </a>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
