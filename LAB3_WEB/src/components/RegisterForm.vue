<template>
  <div class="register-form">
    <h2>Реєстрація на ініціативу</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Ім'я</label>
      <input v-model="form.name" id="name" type="text" required />

      <label for="email">Електронна пошта</label>
      <input v-model="form.email" id="email" type="email" required />

      <button type="submit">Зареєструватися</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        initiativeId: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch('registerInitiative', this.form.initiativeId);
      console.log('User registered:', this.form);
      this.$router.push('/my');
    }
  }
};
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9fb;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
.register-form label {
  display: block;
  margin-bottom: 5px;
}
.register-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.register-form button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.register-form button:hover {
  background-color: #45a049;
}
</style>
