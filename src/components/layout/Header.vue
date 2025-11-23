<template>
  <header class="header">
    <div class="header__inner">
      <nav class="header__nav">
        <RouterLink to="/" class="header__link">Главная</RouterLink>
        <RouterLink to="/about" class="header__link">О компании</RouterLink>
        <RouterLink to="/services" class="header__link">Услуги</RouterLink>
      </nav>

      <RouterLink to="/" class="header__logo h1">
        <span class="header__logo-x">Xenon</span>
      </RouterLink>

      <nav class="header__nav">
        <RouterLink to="/projects" class="header__link">Кейсы</RouterLink>
        <RouterLink to="/blog" class="header__link">Блог</RouterLink>
        <RouterLink to="/contacts" class="header__link">Контакты</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Header',
  components: {
    RouterLink
  }
};
</script>

<style scoped>
.header {
  background-color: var(--color-header-footer-bg);
  height: 94px;
  display: flex;
  align-items: center;
}

.header__inner {
  width: 100%;
  padding-inline: var(--layout-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  text-decoration: none;
  color: var(--color-heading-text);
}

.header__logo-x {
  font-family: 'Actay Wide', sans-serif;
  background-image: var(--gradient-xenon);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.header__nav {
  font-family: 'Merriweather Sans', sans-serif;
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__link {
  font-size: 20px;
  letter-spacing: 1px;
  color: var(--color-text-secondary);
  text-decoration: none;
}

.header__link.router-link-active {
  color: var(--color-heading-text);
}

@media (max-width: 900px) {
  .header__inner {
    padding-inline: 24px;
  }

  .header__left {
    gap: 32px;
  }

  .header__nav {
    display: none;
  }
}
</style>


