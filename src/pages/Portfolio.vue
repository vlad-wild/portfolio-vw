<script setup lang="ts">
// Страница-заглушка для портфолио
</script>

<template>
  <div class="portfolio-container">
    <h1>Портфолио</h1>
    <p class="subtitle">В разработке...</p>
    <div class="wip-message">
      <span class="wip-icon">🛠️</span>
      <p>Здесь будет моё портфолио. Ведутся работы — заходите позже!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #474747;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #8d8d8d;
    margin-bottom: 2rem;
  }

  .wip-message {
    font-size: 1.1rem;
    color: #8d8d8d;

    .wip-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      display: block;
    }
  }
}
</style>
