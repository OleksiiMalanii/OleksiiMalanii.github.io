<template>
  <div class="initiative-list">
    <div class="filters">
      <select v-model="filters.type">
        <option value="">Вибрати тип активності</option>
        <option value="ecology">Екологія</option>
        <option value="animals">Допомога тваринам</option>
        <option value="social">Соціальна підтримка</option>
      </select>

      <input v-model="filters.date" type="date" />
      <input v-model="filters.location" type="text" placeholder="Місце" />
    </div>

    <div class="cards">
      <InitiativeCard
          v-for="initiative in filteredInitiatives"
          :key="initiative.id"
          :initiative="initiative"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InitiativeCard from './InitiativeCard.vue';

export default {
  components: {
    InitiativeCard
  },
  data() {
    return {
      filters: {
        type: '',
        date: '',
        location: ''
      }
    };
  },
  computed: {
    ...mapGetters(['initiatives']),

    filteredInitiatives() {
      return this.initiatives.filter((initiative) => {
        return (
            (!this.filters.type || initiative.type === this.filters.type) &&
            (!this.filters.date || initiative.date === this.filters.date) &&
            (!this.filters.location ||
                initiative.location
                    ?.toLowerCase()
                    .includes(this.filters.location.toLowerCase()))
        );
      });
    }
  }
};
</script>

<style scoped>
.filters {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.filters select,
.filters input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>