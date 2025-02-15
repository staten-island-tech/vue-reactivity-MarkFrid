<template>
  <div class="about bg-green-500">
    <HomociHomoci />
    <WuhBets v-for="bet in displayedBets" :key="bet.name" :item="bet"
      ><button
        class="btn btn-primary bg-green-600 hover:bg-green-700 mt-4 rounded-lg shadow-sm outline outline-2 outline-black"
        @click="Over(item)"
      >
        Pick The Over
      </button>
      <button
        class="btn btn-primary bg-green-600 hover:bg-green-700 mt-4 rounded-lg shadow-sm outline outline-2 outline-black"
        @click="Under(item)"
      >
        Pick the Under
      </button></WuhBets
    >
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import FwehBets from '@/components/FwehBets.vue'
import HomociHomoci from '@/components/HomociHomoci.vue'
import WuhBets from '@/components/WuhBets.vue'
import { ref } from 'vue'
import { bets } from '../arrays/bets.js'
const displayedBets = ref([...bets].sort(() => 0.5 - Math.random()).slice(0, 5))
</script>
