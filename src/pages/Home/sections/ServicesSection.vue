<template>
  <section class="services-section">
    <div class="service-content">
      <h2 class="services-title h2">
        Наши решения для вашего успеха
      </h2>
      <p class="services-subtitle subtitle">
        Мы предлагаем полный спектр IT-услуг, чтобы ваш бизнес работал быстрее, умнее и эффективнее.
      </p>
    </div>

    <div class="services-card__wrapper">
      <ServiceCard
          v-for="service in services"
          :key="service.id"
          :title="service.title"
          :description="service.description"
          :link="service.link"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ServiceCard from '../cards/ServiceCard.vue'

const services = ref([
  {
    id: 1,
    title: 'IT-консалтинг',
    description: 'Разрабатываем стратегии, которые превращают ваши цели в измеримые результаты',
    icon: 'web',
    link: '/services#web'
  },
  {
    id: 2,
    title: 'Разработка ПО',
    description: 'Индивидуальные решения — от CRM до мобильных приложений — для оптимизации процессов.',
    icon: 'mobile',
    link: '/services#mobile'
  },
  {
    id: 3,
    title: 'Кибербезопасность',
    description: 'Защищаем ваши данные и бизнес от угроз с помощью передовых технологий.',
    icon: 'design',
    link: '/services#design'
  },
  {
    id: 4,
    title: 'Облачные решения',
    description: 'Миграция в облако и управление данными для масштабирования бизнеса.',
    icon: 'branding',
    link: '/services#branding'
  }
])
</script>

<style scoped>
.services-section {
  margin-bottom: 150px;
}

.service-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.services-card__wrapper {
  display: flex;
  flex-direction: row;
  gap: 40px;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
