<template>
  <div class="my-initiatives">
    <h2>Мої ініціативи</h2>
    <div v-if="myInitiatives.length">
      <ul>
        <li
            v-for="initiative in myInitiatives"
            :key="initiative.id"
            class="initiative-item"
        >
          <div class="initiative-details">
            <h3>{{ initiative.title }}</h3>
            <p>
              <strong>Місце:</strong> {{ initiative.location }} <br>
              <strong>Дата:</strong> {{ initiative.date }} <br>
              <strong>Тип:</strong> {{ initiative.type }} <br>
              <strong>Опис:</strong> {{ initiative.description }}
            </p>
            <p class="volunteers">
              <strong>Волонтерів потрібно:</strong> {{ initiative.volunteersNeeded }}
            </p>

            <div v-if="initiative.registeredName && initiative.registeredEmail" class="registered-info">
              <p><strong>Зареєстровано як:</strong> {{ initiative.registeredName }}</p>
              <p><strong>Email:</strong> {{ initiative.registeredEmail }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Поки що немає зареєстрованих ініціатив.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyInitiatives',
  computed: {
    ...mapGetters(['initiatives']),
    myInitiatives() {
      return this.initiatives.filter((item) => item.joined);
    }
  }
};
</script>

<style scoped>
.my-initiatives {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

.initiative-item {
  margin: 10px 0;
  background: #f7f7f7;
  border-radius: 6px;
  padding: 15px;
  transition: box-shadow 0.3s;
}

.initiative-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.initiative-details h3 {
  margin-bottom: 8px;
}

.volunteers {
  margin-top: 8px;
}

.registered-info {
  margin-top: 10px;
  background: #e0ffe0;
  padding: 10px;
  border-radius: 6px;
}
</style>