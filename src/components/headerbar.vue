<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="header" :class="{ 'scrolled': isScrolled, 'menu-open': isMenuOpen }">
    <h3 class="name">Влад Шубин</h3>

    <!-- Бургер-иконка -->
    <div class="burger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Навигация -->
    <nav class="navigate" :class="{ open: isMenuOpen }">
      <RouterLink to="/" @click="isMenuOpen = false">Обо мне</RouterLink>
      <RouterLink to="/links" @click="isMenuOpen = false">Ссылки</RouterLink>
      <RouterLink to="/portfolio" @click="isMenuOpen = false">Портфолио</RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  background-color: transparent;
  box-shadow: none;
  z-index: 1000;

  .name {
    margin-right: auto;
    font-weight: 500;
  }

  // Стили при прокрутке
  &.scrolled {
    background-color: #000011b4;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
}

// Бургер-иконка
.burger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 1001;

  span {
    width: 100%;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: 0.3s;
    border-radius: 2px;
  }
}

// Навигация
.navigate {
  display: flex;
  gap: 16px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s;

    &:hover {
      color: #409eff;
    }
  }
}



// === Адаптив: до 768px ===
@media (max-width: 768px) {
  .burger {
    display: flex;

    span {
      background-color: #fff;
    }
  }
  .name{
    font-size: 1em;
  }
  .navigate {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: #000011e6;
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    transition: right 0.3s ease;
    z-index: 999;

    a {
      color: #fff;
      font-size: 1.2rem;
      position: relative;

      &:hover {
        color: #409eff;
      }
    }

    &.open {
      right: 0;
    }
  }


  // Анимация бургера
  .header.menu-open .burger span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
  }

  .header.menu-open .burger span:nth-child(2) {
    opacity: 0;
  }

  .header.menu-open .burger span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
}
</style>
