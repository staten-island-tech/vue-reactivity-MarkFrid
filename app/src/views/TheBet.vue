<template>
  <div class="about">
    <WuhBets v-for="item in items" :key="item.name" :item="item"
      ><button
        class="btn btn-primary bg-green-600 hover:bg-green-700 mt-4 rounded-lg shadow-sm outline outline-2 outline-black"
        @click="addtoBets(item)"
      >
        Add to Cart
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

<script>
import FwehBets from '@/components/FwehBets.vue'
import HomociHomoci from '@/components/HomociHomoci.vue'
import WuhBets from '@/components/WuhBets.vue'

export default {
  components: {
    FwehBets,
    HomociHomoci,
    WuhBets,
  },
  setup() {},
}
</script>
