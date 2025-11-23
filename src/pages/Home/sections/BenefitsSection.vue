<template>
  <section class="benefits-section">
    <Container>
      <SectionTitle>Почему выбирают нас</SectionTitle>
      <SectionSubtitle>
        Мы предоставляем полный цикл разработки с гарантией качества
      </SectionSubtitle>

      <div class="benefits-grid">
        <BenefitCard
          v-for="benefit in benefits"
          :key="benefit.id"
          :title="benefit.title"
          :description="benefit.description"
          :icon="benefit.icon"
        />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from '@/components/ui/Container.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import SectionSubtitle from '@/components/ui/SectionSubtitle.vue'
import BenefitCard from '@/components/cards/BenefitCard.vue'

const benefits = ref([
  {
    id: 1,
    title: 'Опытная команда',
    description: 'Более 50 реализованных проектов для бизнеса разного масштаба',
    icon: 'team'
  },
  {
    id: 2,
    title: 'Современные технологии',
    description: 'Используем актуальный стек технологий и лучшие практики',
    icon: 'tech'
  },
  {
    id: 3,
    title: 'Прозрачная работа',
    description: 'Регулярная отчётность и вовлечение клиента на всех этапах',
    icon: 'transparent'
  },
  {
    id: 4,
    title: 'Поддержка 24/7',
    description: 'Техническая поддержка и консультации после запуска проекта',
    icon: 'support'
  }
])
</script>

<style scoped>
.benefits-section {
  padding: 6rem 0;
  background: var(--color-bg-primary);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .benefits-section {
    padding: 4rem 0;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
