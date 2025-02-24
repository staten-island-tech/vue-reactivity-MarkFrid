<template>
  <div class="about bg-[#001f3f]">
    <HomociHomoci />
    <WuhBets v-for="bet in displayedBets" :key="bet.name" :item="bet"
      ><button
        class="btn btn-primary bg-[#001f3f] hover:bg-[#00155f] mt-4 rounded-lg shadow-sm outline outline-2 outline-black text-[#C0C0C0]"
        @click="Over(item)"
      >
        Pick The Over
      </button>
      <button
        class="btn btn-primary bg-[#001f3f] hover:bg-[#00155f] mt-4 rounded-lg shadow-sm outline outline-2 outline-black text-[#C0C0C0]"
        @click="Over(item)"
      >
        Pick the Under
      </button></WuhBets
    >
    <div
      class="shop-header fixed right-0 top-0 h-[100vh] w-[25vw] border-black border-[2px] bg-orange-400 flex flex-col items-center text-center overflow-y-auto"
      ref="cartContainer"
    >
      <h2 class="text-2xl font-bold mt-5 mb-5">Shopping Cart</h2>
      <ShoppingCart
        v-for="item in cartSorted"
        :key="item.name"
        :item="item"
        :number="quantityFinder(item)"
        class="mb-5"
        ><button
          class="btn btn-primary bg-red-600 hover:bg-red-700 mt-4 rounded-lg shadow-sm outline outline-2 outline-black"
          @click="removeFromCart(item)"
        >
          Remove
        </button></ShoppingCart
      >
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
import FwehBets from '@/components/FwehBets.vue'
import HomociHomoci from '@/components/HomociHomoci.vue'
import WuhBets from '@/components/WuhBets.vue'
import { ref } from 'vue'
import { bets } from '../arrays/bets.js'
const displayedBets = ref([...bets].sort(() => 0.5 - Math.random()).slice(0, 5))
const choice = ref([])

function Over(bet) {
  choice.value.push(bet)
  console.log(choice.value)
}
function Under(bet) {
  choice.value.splice(choice.value.indexOf(bet), 1)
}
</script>
