<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex space-x-4">
          <ModeButton class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" />
          <RouterLink
            to="/HomeView"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >Home</RouterLink
          >
          <RouterLink
            to="/TheBet"
            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >Did it hit?</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
