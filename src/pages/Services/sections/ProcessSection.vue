<script setup>
const steps = [
  { id: '1', title: 'Анализ', description: 'Изучаем ваш бизнес, цели и текущие процессы.' },
  { id: '2', title: 'Стратегия', description: 'Разрабатываем план внедрения IT-решений с учётом ваших задач.' },
  { id: '3', title: 'Реализация', description: 'Создаём, тестируем и внедряем технологии.' },
  { id: '4', title: 'Поддержка', description: 'Обеспечиваем сопровождение и оптимизацию 24/7.' },
];
</script>

<template>
  <section class="process-section">
    <div class="process-header">
      <h2 class="section-title h2">Как мы создаём решения</h2>
      <p class="section-subtitle">
        Чёткий и прозрачный процесс, чтобы вы получили результат в кратчайшие сроки.
      </p>
    </div>

    <div class="process-layout">
      <div class="process-content">
        <div class="process-cards">
          <div
              v-for="step in steps.slice(0, 2)"
              :key="step.id"
              class="process-step-card"
              :class="`card-${step.id}`"
          >
            <div class="step-content">
              <h3 class="step-title h3">{{ step.title }}</h3>
              <p class="step-description sm-text">{{ step.description }}</p>
            </div>
          </div>

          <div class="timeline-bar" style="grid-area: timeline;">
            <img
                src="../../../assets/images/timeline.png"
                alt="Этапы процесса"
                class="timeline-image"
            />
          </div>

          <div
              v-for="step in steps.slice(2, 4)"
              :key="step.id"
              class="process-step-card"
              :class="`card-${step.id}`"
          >
            <div class="step-content">
              <h3 class="step-title h3">{{ step.title }}</h3>
              <p class="step-description sm-text">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- Основной отступ секции --- */
.process-section {
  margin-bottom: var(--section-margin-bottom);
}

/* --- Заголовок секции --- */
.process-header {
  margin-bottom: 40px;
}

.section-title {
  margin-bottom: 16px;
}

.section-subtitle {
  max-width: 920px;
  color: var(--color-text-secondary);
  font-size: var(--subtitle-size);
  letter-spacing: var(--heading-letter-spacing);
  line-height: var(--h3-line);
}

/* --- Full-width обёртка --- */
.process-layout {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  position: relative;
}

/* --- Контейнер с фоном и содержимым --- */
.process-content {
  position: relative;
  min-height: 738px;
  background-image: url('../../../assets/images/bg-city.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center; /* Центрирует по вертикали */
  justify-content: center;
}

/* --- Лента процесса --- */
.timeline-bar {
  height: 140px;
  grid-area: timeline;
  align-self: center;
  z-index: 10;
}

.timeline-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

/* --- Карточки этапов (на основе Grid) --- */
.process-cards {
  position: relative;
  z-index: 20;
  display: grid;
  grid-template-areas:
    "card1 . card3 ."
    "timeline timeline timeline timeline"
    ". card2 . card4";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;
  row-gap: 40px;
  width: 100%;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  background: transparent;
}

.process-step-card {
  width: 100%;
  max-width: 368px;
  height: 150px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  padding: 30px;
  background: linear-gradient(
      155.51deg,
      rgba(249, 115, 22, 0.2) 16.52%,
      rgba(216, 121, 49, 0.2) 34.71%,
      rgba(71, 149, 167, 0.2) 68.82%,
      rgba(0, 163, 224, 0.2) 94.36%
  );
  backdrop-filter: blur(8px);
}

.step-content {
  flex: 1;
}

.step-title {
  margin-bottom: 8px;
}

/* Позиционирование карточек */
.card-1 {
  grid-area: card1;
  margin-left: 100px;
}

.card-2 {
  grid-area: card2;
  margin-left: 50px;
}

.card-3 {
  grid-area: card3;
}

.card-4 {
  grid-area: card4;
}


@media (max-width: 768px) {
  .process-cards {
    /* ... (ваши существующие стили для мобильных) ... */

    /* 🟢 ИСПРАВЛЕНИЕ ДЛЯ МОБИЛЬНЫХ: Grid-разметка */
    grid-template-areas:
      "card1"
      "card2"
      "card3"
      "card4"
      "timeline"; /* Лента может быть снизу или скрыта */
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto) auto; /* 4 строки для карточек, 1 для ленты */
    gap: 20px; /* Отступы между карточками */
  }

  /* 🟢 ИСПРАВЛЕНИЕ: Если timeline-bar должен быть скрыт на мобильных */
  .timeline-bar {
    display: none;
  }
}
</style>