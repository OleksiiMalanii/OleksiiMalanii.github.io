<template>
  <div class="card">
    <h3>{{ initiative.name }}</h3>
    <p><strong>Дата:</strong> {{ initiative.date }}</p>
    <p><strong>Місце:</strong> {{ initiative.location }}</p>
    <p><strong>Тип активності:</strong> {{ initiative.type }}</p>
    <p>{{ initiative.description }}</p>
    <button :disabled="initiative.joined" @click="onJoin">
      {{ initiative.joined ? "Ви приєдналися" : "Приєднатися" }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    initiative: Object, // Отримує дані про ініціативу
  },
  methods: {
    onJoin() {
      if (!this.initiative.joined) {
        this.$emit("joined", this.initiative); // Сповіщаємо батьківський компонент
      }
    },
  },
};
</script>

<style>
.card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-bottom: 15px;
}
.card button {
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.card button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>