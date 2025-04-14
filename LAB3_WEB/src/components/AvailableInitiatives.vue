<template>
  <div class="container">
    <h1>Доступні ініціативи</h1>
    <div v-for="initiative in availableInitiatives" :key="initiative.id" class="initiative-card">
      <h2>{{ initiative.name }}</h2>
      <p>{{ initiative.description }}</p>
      <p>Потрібно волонтерів: {{ initiative.volunteersNeeded }}</p>
      <p>Кінцевий термін: {{ initiative.endDate }}</p>
      <button
          @click="joinInitiative(initiative.id)"
          :disabled="initiative.joined || initiative.volunteersNeeded === 0"
      >
        {{ initiative.joined ? 'Ви приєдналися' : 'Приєднатися' }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AvailableInitiatives',
  computed: {
    ...mapGetters(['availableInitiatives'])
  },
  methods: {
    ...mapActions(['joinInitiative'])
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  color: #333;
  text-align: center;
}

.initiative-card {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  color: #444;
}

p {
  color: #555;
  margin: 5px 0;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover:enabled {
  background-color: #45a049;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>