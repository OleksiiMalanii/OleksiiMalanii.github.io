<template>
  <div>
    <h2>Мої ініціативи</h2>
    <ul v-if="initiatives.length">
      <li v-for="(initiative, index) in initiatives" :key="index">
        <strong>{{ initiative.name }}</strong>, {{ initiative.date }} - {{ initiative.location }}
      </li>
    </ul>
    <p v-else>Ви ще не приєдналися до жодної ініціативи.</p>
  </div>
</template>

<script>
export default {
  props: {
    initiatives: Array, // Список ініціатив
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>