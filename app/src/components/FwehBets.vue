<template>
  <div
    class="card w-64 bg-white shadow-xl p-4 rounded-xl hover:shadow-2xl transition-shadow mt-3vh"
  >
    <div class="card-body text-center">
      <h2 class="card-title text-lg font-bold text-gray-800">{{ item.sport }}</h2>
      <p class="text-gray-600 text-sm">{{ item.bet }}</p>
      <p class="text-lg font-semibold text-green-600 mt-2">You picked: {{ pbet }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
  pbet: String,
})
</script>

<style scoped></style>
