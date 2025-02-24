<template>
  <div class="about bg-[#001f3f]">
    <HomociHomoci class="mt-5" />
    <div class="h-full w-[75vw] flex flex-wrap items-center justify-left">
      <WuhBets v-for="bet in displayedBets" :key="bet.name" :item="bet" class="mb-5 h-[17vh]">
        <button
          class="btn btn-primary bg-[#001f3f] hover:bg-[#00155f] mt-4 rounded-lg shadow-sm outline outline-2 outline-black text-[#C0C0C0]"
          @click="pickBet(bet, 'Over')"
        >
          Pick The Over
        </button>
        <button
          class="btn btn-primary bg-[#001f3f] hover:bg-[#00155f] mt-4 rounded-lg shadow-sm outline outline-2 outline-black text-[#C0C0C0]"
          @click="pickBet(bet, 'Under')"
        >
          Pick the Under
        </button>
      </WuhBets>
    </div>

    <div
      class="shop-header fixed right-0 top-0 h-[100vh] w-[25vw] border-black border-[2px] bg-orange-400 flex flex-col items-center text-center overflow-y-auto"
      ref="cartContainer"
    >
      <h2 class="text-2xl font-bold mt-5 mb-5">Chosen Bets:</h2>
      <FwehBets
        v-for="(bet, index) in choice"
        :key="index"
        :item="bet"
        :pbet="bet.choice"
        class="mb-5"
      >
        <div class="text-lg font-semibold">You picked: {{ bet.choice }}</div>
        <button
          class="btn btn-primary bg-red-600 hover:bg-red-700 mt-4 rounded-lg shadow-sm outline outline-2 outline-black"
          @click="removeFromCart(index)"
        >
          Remove
        </button>
      </FwehBets>
    </div>
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
import { ref } from 'vue'
import FwehBets from '@/components/FwehBets.vue'
import HomociHomoci from '@/components/HomociHomoci.vue'
import WuhBets from '@/components/WuhBets.vue'
import { bets } from '../arrays/bets.js'

const displayedBets = ref([...bets].sort(() => 0.5 - Math.random()).slice(0, 5))
const choice = ref([])

function pickBet(bet, type) {
  choice.value.push({ ...bet, choice: type })
  choice.value = [...choice.value]
}

function removeFromCart(index) {
  choice.value.splice(index, 1)
  choice.value = [...choice.value]
}
</script>
