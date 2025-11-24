<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="case-card">
    <div class="case-card__icon"></div>
    <div class="case-card__content">
      <h3 class="case-card__title h3">{{ title }}</h3>
      <p class="case-card__description">{{ description }}</p>
      <a href="/" class="case-card__link">Подробнее</a>
    </div>
  </div>
</template>

<style scoped>
.case-card {
  width: 880px;
  height: 292px;
  display: flex;
  flex-direction: row;
  gap: 20px;

  position: relative;
  border-radius: 15px;
  padding: 30px;
  background: var(--gradient-card);
}

.case-card__icon {
  width: 355px;
  height: 232px;
  flex-shrink: 0;
  background-color: #D9D9D9;
  border-radius: 15px;
}

.case-card__content {
  display: flex;
  flex-direction: column;
  gap: 35px;
  position: relative;
  flex-grow: 1;
}

.case-card__description {
  font-size: 20px;
  line-height: 1;
}

.case-card__link {
  display: inline-block;
  text-decoration: none;
  color: var(--color-btn-primary);
  margin-top: auto;
  position: absolute;
  bottom: 5px;
  left: 0;
}
</style>