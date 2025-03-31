<template>
  <div id="app">
    <header>
      <h1>Платформа для ініціатив</h1>
    </header>
    <nav>
      <router-link to="/available-initiatives">Доступні ініціативи</router-link>
      <router-link to="/my-initiatives">Мої ініціативи</router-link>
      <router-link to="/about-us">Про нас</router-link>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default {};
</script>

<style>
header {
  text-align: center;
  background-color: #81af84;
  color: white;
  padding: 15px;
}
nav {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
nav a {
  margin: 0 10px;
  color: #557c55;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>