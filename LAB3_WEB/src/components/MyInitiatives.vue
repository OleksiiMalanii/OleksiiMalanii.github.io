<template>
  <div class="my-initiatives-container">
    <h1>Мої ініціативи</h1>
    <div v-for="initiative in myInitiatives" :key="initiative.id" class="initiative-card">
      <h2>{{ initiative.name }}</h2>
      <p>{{ initiative.description }}</p>
      <p>Потрібно волонтерів: {{ initiative.volunteersNeeded }}</p>
      <p>Кінцевий термін: {{ initiative.endDate }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyInitiatives',
  computed: {
    myInitiatives() {
      return this.$store.getters.initiatives.filter(i => i.joined);
    }
  }
}
</script>

<style scoped>
.my-initiatives-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.initiative-card {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #444;
  font-size: 1.5em;
  margin-bottom: 10px;
}

p {
  color: #555;
  font-size: 1em;
  margin: 5px 0;
}

.initiative-card:hover {
  background-color: #f1f1f1;
  border-color: #ccc;
}
</style>