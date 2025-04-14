<template>
  <div class="app-container">
    <nav>
      <router-link to="/">Доступні ініціативи</router-link>
      <router-link to="/my">Мої ініціативи</router-link>
      <router-link to="/about">Про нас</router-link>
    </nav>

    <main class="content">
      <router-view />
    </main>

    <footer>
      <p>© 2025 Ініціативи Добра | Усі права захищені</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9fb;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  flex: 1;
}

nav {
  background: white;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
  border-radius: 10px;
}

nav a {
  text-decoration: none;
  color: #555;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  padding: 8px 0;
}

nav a::after {
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background: #4CAF50;
  transition: 0.3s ease;
  position: absolute;
  bottom: -4px;
  left: 0;
}

nav a:hover::after {
  width: 100%;
}

nav a.router-link-exact-active {
  color: #4CAF50;
}

.content {
  padding: 40px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;

}

footer {
  background: #f0f0f0;
  padding: 5px 10px;
  text-align: center;
  font-size: 0.9em;
  color: #888;
  border-top: 1px solid #ddd;
  margin-top: auto;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.03);
}
</style>
