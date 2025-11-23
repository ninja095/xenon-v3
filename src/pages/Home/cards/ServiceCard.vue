<template>
  <div class="service-card">

    <div class="service-card__title-wrapper">
      <div class="service-card-icon"></div>
      <h3 class="h3 service-card__title">{{ title }}</h3>
    </div>

    <p class="service-card-description">{{ description }}</p>
    <a :href="link" class="service-card-link">Подробнее</a>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string
  description: string
  link: string
}>()
</script>

<script lang="ts">
export default {
  name: 'ServiceCard'
}
</script>

<style scoped>
.service-card {
  min-width: 420px;
  height: 243px;
  position: relative;
  background-color: var(--color-bg-primary);
  border-radius: 15px;
  padding: 30px;
}
.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
      179.51deg,
      #F97316 -38.71%,
      #00A3E0 164.44%
  );
  /* Магия — вырезаем середину */
  mask-image: linear-gradient(#fff, #fff),
  linear-gradient(#fff, #fff);
  mask-clip: content-box, border-box;
  mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}


.service-card-icon {
  width: 50px;
  height: 50px;
  background-color: #00A3E0;
  border-radius: 10px;
  flex-shrink: 0;
}

.service-card__title-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 1rem;
}

.service-card-description {
  font-size: 20px;
  line-height: 1;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.service-card__title {
  font-size: 25px;
}

.service-card-link {
  display: inline-block;
  text-decoration: none;
  color: var(--color-btn-primary);
  margin-top: auto;
  position: absolute;
  bottom: 30px;
  left: 30px;
}
</style>
