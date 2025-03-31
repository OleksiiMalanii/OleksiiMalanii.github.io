<template>
  <div>
    <h2>Доступні ініціативи</h2>

    <div class="filters">
      <label>
        Місто:
        <input type="text" v-model="filters.location" placeholder="Введіть місто" />
      </label>
      <label>
        Тип:
        <select v-model="filters.type">
          <option value="">Всі</option>
          <option value="екологія">Екологія</option>
          <option value="допомога тваринам">Допомога тваринам</option>
          <option value="соціальна підтримка">Соціальна підтримка</option>
        </select>
      </label>
    </div>

    <div>
      <InitiativeCard
          v-for="initiative in filteredInitiatives"
          :key="initiative.id"
          :initiative="initiative"
          @joined="joinInitiative"
      />
    </div>
  </div>
</template>

<script>
import InitiativeCard from "../components/InitiativeCard.vue";

export default {
  name: "AvailableInitiatives",
  components: { InitiativeCard },
  data() {
    return {
      initiatives: [
        { id: 1, name: "Прибирання парку", type: "екологія", location: "Київ", date: "2023-12-01", description: "Опис ініціативи.", joined: false },
        { id: 2, name: "Допомога притулку", type: "допомога тваринам", location: "Львів", date: "2023-11-30", description: "Опис ініціативи.", joined: false },
        { id: 3, name: "Соціальний похід", type: "соціальна підтримка", location: "Одеса", date: "2023-12-10", description: "Опис ініціативи.", joined: false },
      ],
      filters: {
        location: "",
        type: "",
      },
    };
  },
  computed: {
    filteredInitiatives() {
      return this.initiatives.filter((initiative) => {
        const byLocation =
            !this.filters.location || initiative.location.toLowerCase().includes(this.filters.location.toLowerCase());
        const byType = !this.filters.type || initiative.type === this.filters.type;
        return byLocation && byType;
      });
    },
  },
  methods: {
    joinInitiative(initiative) {
      initiative.joined = true;
    },
  },
};
</script>

<style>
.filters {
  margin-bottom: 15px;
}
.filters label {
  margin-right: 10px;
}
</style>