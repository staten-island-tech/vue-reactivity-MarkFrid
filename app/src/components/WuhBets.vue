<template>
  <div class="card">
    <h2>{{ item.sport }}</h2>
    <p>{{ item.bet }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { bets } from '../arrays/bets.js'
import { RouterLink } from 'vue-router'

defineProps({
  item: {
    type: Object,
    required: true,
  },
  number: {
    type: Number,
    required: true,
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
</style>
