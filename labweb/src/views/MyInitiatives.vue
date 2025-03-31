<template>
  <div>
    <h2>Мої ініціативи</h2>
    <div v-if="initiatives.length > 0">
      <ul>
        <li v-for="initiative in initiatives" :key="initiative.id">
          {{ initiative.name }} ({{ initiative.date }} - {{ initiative.location }})
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Наразі ви не приєдналися до жодної ініціативи.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInitiatives",
  props: {
    initiatives: Array,
  },
};
</script>

<style>
h2 {
  font-size: 1.5em;
  color: #4caf50;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1em;
  background: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px;
}
</style>