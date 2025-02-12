<template>
  <div>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex space-x-4">
            <RouterLink
              to="/HomeView"
              class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              >Home</RouterLink
            >
            <RouterLink
              to="/TheBet"
              class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              >Did it hit?</RouterLink
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="cards-container">
      <div class="card" v-for="(bet, index) in bets" :key="index">
        <h2>{{ bet.sport }}</h2>
        <p>{{ bet.bet }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { bets } from '@/arrays/bets.js'

export default defineComponent({
  name: 'BetCards',
  setup() {
    const betList = ref(bets)

    const randomBets = ref(betList.value.sort(() => 0.5 - Math.random()).slice(0, 5))

    const selectOver = (bet) => {
      bet.picked = 'over'
    }

    const selectUnder = (bet) => {
      bet.picked = 'under'
    }

    return {
      bets: randomBets,
      selectOver,
      selectUnder,
    }
  },
  components: {
    RouterLink,
  },
})
</script>

<style>
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.over,
.under {
  background-color: #42b983;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
}

nav {
  margin-bottom: 16px;
}
</style>
