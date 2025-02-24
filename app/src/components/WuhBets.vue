<template>
  <div
    class="card bg-[#36454f] border-[2px] border-[#C0C0C0] flex flex-col items-center justify-center text-center z-10 mx-auto"
    :key="auto"
  >
    <h2 :style="{ color: '#C0C0C0' }">{{ item.sport }}</h2>
    <p :style="{ color: '#C0C0C0' }">{{ item.bet }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { bets } from '../arrays/bets.js'
import { RouterLink } from 'vue-router'

defineProps({
  item: Object,
})
</script>

<style></style>
