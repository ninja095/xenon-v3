<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__left">
        <div class="footer__logo">Xenon</div>
        <p class="footer__copy">© 2025 Xenon. Все права защищены.</p>
      </div>
      <div class="footer__nav">
        <RouterLink to="/" class="footer__link">Главная</RouterLink>
        <RouterLink to="/projects" class="footer__link">Кейсы</RouterLink>
        <RouterLink to="/services" class="footer__link">Услуги</RouterLink>
        <RouterLink to="/about" class="footer__link">О компании</RouterLink>
        <RouterLink to="/contacts" class="footer__link">Контакты</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Footer',
  components: {
    RouterLink
  }
};
</script>

<style scoped>
.footer {
  background-color: var(--color-header-footer-bg);
  padding-block: 32px;
}

.footer__inner {
  padding-inline: var(--layout-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.footer__logo {
  font-family: var(--font-heading);
  font-size: 32px;
  background-image: var(--gradient-xenon);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer__copy {
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 8px;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
}

.footer__link {
  font-size: 14px;
  color: var(--color-text-secondary);
  text-decoration: none;
}

@media (max-width: 900px) {
  .footer__inner {
    padding-inline: 24px;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .footer {
    padding-block: 24px;
  }

  .footer__inner {
    padding-inline: 16px;
  }
}
</style>


