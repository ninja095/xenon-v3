<template>
  <section class="cases-section">
    <h2 class="case-title h2">Результаты, которые вдохновляют</h2>
    <p class="case-subtitle">Посмотрите, как мы помогли бизнесу расти и становиться эффективнее.</p>
      <div class="cases-grid">
        <CaseCard
          v-for="caseItem in cases"
          :key="caseItem.id"
          :title="caseItem.title"
          :description="caseItem.description"
        />
      </div>

      <div class="cases-actions">
        <UiUiButton variant="outline" @click="goToCases">Посмотреть все проекты</UiUiButton>
      </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'


import CaseCard from "../cards/CaseCard.vue";
import UiUiButton from "../../../components/ui/UiButton.vue";

const router = useRouter()

const cases = ref([
  {
    id: 1,
    title: 'Ритейл: Ускорение продаж',
    description: 'Внедрили CRM-систему, увеличив выручку на 30% за 6 месяцев.',

  },
  {
    id: 2,
    title: 'Финансы: Защита данных',
    description: 'Настроили систему кибербезопасности, снизив риски на 95%.',

  },
  {
    id: 3,
    title: 'Производство: Оптимизация процессов',
    description: 'Интегрировали ERP, сократив расходы на 20%.',
  },
  {
    id: 4,
    title: 'Логистика: увеличение скорости доставки',
    description: 'Внедрила систему управления маршрутами с ИИ-аналитикой.',
  }
])

const goToCases = () => {
  router.push({ name: 'cases' })
}
</script>

<style scoped>
.cases-section {
  margin-bottom: var(--section-margin-bottom);
}

.case-title {
  margin-bottom: 20px;
}

.case-subtitle {
  font-size: var(--subtitle-size);
  letter-spacing: var(--heading-letter-spacing);
  line-height: var(--h3-line);
  margin-bottom: 40px;
}
.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 880px);
  grid-template-rows: repeat(2, 292px);
  gap: 40px;
  overflow-x: auto;
  overflow-y: hidden;
}

.cases-actions {
  display: flex;
  justify-content: start;
  margin-top: 40px;
}
</style>
