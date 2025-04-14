<template>
  <div class="initiative-card">
    <h3>{{ initiative.title }}</h3>
    <p>{{ initiative.description }}</p>
    <p><strong>Місце:</strong> {{ initiative.location }}</p>
    <p><strong>Дата:</strong> {{ initiative.date }}</p>
    <p><strong>Тип активності:</strong> {{ initiative.type }}</p>
    <button @click="register">Зареєструватися</button>
  </div>
</template>

<script>
export default {
  props: {
    initiative: Object
  },
  methods: {
    register() {
      this.$router.push(`/register/${this.initiative.id}`);
    }
  }
}
</script>

<style scoped>
.initiative-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
.initiative-card h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}
.initiative-card button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.initiative-card button:hover {
  background-color: #45a049;
}
</style>
