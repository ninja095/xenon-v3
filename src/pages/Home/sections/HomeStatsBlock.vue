<script setup>
import {ref} from "vue";

const stats = ref([
  {
    id: 1,
    title: '20 лет опыта',
    description: 'Реализовали сотни проектов для бизнеса любого масштаба.',
  },
  {
    id: 2,
    title: '100+ успешных кейсов',
    description: 'Достигаем результатов, которые говорят сами за себя.',
  },
  {
    id: 3,
    title: '24/7 поддержка',
    description: 'Всегда на связи, <br/> чтобы ваш бизнес работал без остановок.',
  },
  {
    id: 4,
    title: 'Индивидуальный подход',
    description: 'Решения, созданные под ваши уникальные задачи.',
  }
])
</script>

<template>
  <div class="stats-block">
    <div
        class="stats-card"
        v-for="stat in stats"
        :key="stat.id">
      <h3 class="stat-title h3">{{ stat.title}}</h3>
      <p
          class="stats-card__subtitle"
          v-html="stat.description"
      ></p>
    </div>
  </div>
</template>

<style scoped>
.stats-block {
  display: flex;
  flex-direction: row;
  gap: 40px;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 150px;
}

.stats-card {
  min-width: 420px;
  height: 193px;
  position: relative;
  padding: 30px;
  border-radius: 15px;
  color: white;
  overflow: hidden;

  background: linear-gradient(
      179.51deg,
      rgba(249, 115, 22, 0.3) -38.71%,
      rgba(0, 163, 224, 0.3) 164.44%
  );
}

.stats-card::before {
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
  mask-clip: content-box,
  border-box;
  mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.stats-card__subtitle {
  margin-top: 13px;
  color: var(--color-text-secondary);
  font-size: 20px;
  line-height: 1;
  letter-spacing: var(--heading-letter-spacing);
}
</style>