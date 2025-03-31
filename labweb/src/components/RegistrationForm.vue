<template>
  <form @submit.prevent="submitForm">
    <h2>Реєстрація на ініціативу</h2>
    <label for="name">Ваше ім'я:</label>
    <input type="text" id="name" v-model="form.name" required />
    <label for="email">Електронна пошта:</label>
    <input type="email" id="email" v-model="form.email" required />
    <button type="submit">Зареєструватися</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Реєстрація успішна!\nІм'я: ${this.form.name}\nE-mail: ${this.form.email}`);
      this.form.name = "";
      this.form.email = "";
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
form label {
  font-size: 14px;
}
form button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>