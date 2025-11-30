<script setup>
const services = [
  { id: 1, title: 'IT-консалтинг и стратегия', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam incidunt illo beatae aperiam, praesentium natus recusandae alias, provident voluptates fuga saepe eos adipisci laboriosam  fugiat voluptatum inventore qui ut sequi.' },
  { id: 2, title: 'Разработка программного обеспечения', content: '\'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam incidunt illo beatae aperiam, praesentium natus recusandae alias, provident voluptates fuga saepe eos adipisci laboriosam  fugiat voluptatum inventore qui ut sequi.' },
  { id: 3, title: 'Кибербезопасность', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam incidunt illo beatae aperiam, praesentium natus recusandae alias, provident voluptates fuga saepe eos adipisci laboriosam  fugiat voluptatum inventore qui ut sequi.' },
  { id: 4, title: 'Облачные решения', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam incidunt illo beatae aperiam, praesentium natus recusandae alias, provident voluptates fuga saepe eos adipisci laboriosam  fugiat voluptatum inventore qui ut sequi.' },
  { id: 5, title: 'Интеграция систем', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam incidunt illo beatae aperiam, praesentium natus recusandae alias, provident voluptates fuga saepe eos adipisci laboriosam  fugiat voluptatum inventore qui ut sequi.' },
  { id: 6, title: 'Техническая поддержка', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam incidunt illo beatae aperiam, praesentium natus recusandae alias, provident voluptates fuga saepe eos adipisci laboriosam  fugiat voluptatum inventore qui ut sequi.' },
];
</script>

<template>
  <section class="services-section">
    <div class="content-wrapper">
      <h2 class="section-title h2">Наши услуги</h2>
      <p class="section-subtitle">
        Полный цикл IT-решений для роста и эффективности вашего бизнеса.
      </p>
      <div class="services-layout">
        <div class="image-block">
        </div>
        <div class="accordion-wrapper">
            <details name='faq'
                     v-for="item in services"
                     :key="item.id"
                     class="accordion-item"
            >
              <summary>
                <div class="rect-icon"></div>
                <div class="question">{{ item.title }}</div>
                <svg
                    class="arrow-icon"
                    width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0.499999L10.4338 10.5L20.5 0.499999" stroke="var(--rect-color, #00A3E0)" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </summary>
              <p class="text-answer">{{ item.content }}</p>
            </details>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.services-section {
  margin-bottom: var(--section-margin-bottom);
  color: var(--color-text-secondary, #F5F7FA);
  background: var(--color-bg-primary, #2b2b2b);
}

.section-title {
  color: #F5F7FA;
  letter-spacing: var(--heading-letter-spacing);
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: var(--subtitle-size);
  letter-spacing: var(--heading-letter-spacing);
  line-height: var(--h3-line);
  margin-bottom: 40px;
}

.services-layout {
  display: flex;
  gap: 40px;
}

.image-block {
  width: 880px;
  height: 710px;
  border-radius: var(--card-radius);
  background-color: white;
  flex-shrink: 0;
}

/* ----------------------------------- */
/* 2. АККОРДЕОН */
/* ----------------------------------- */
.accordion-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rect-icon {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 10px;
  background: #00A3E0;
  flex-shrink: 0;
  margin-right: 20px;
}

.accordion-item {
  min-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: linear-gradient(
      179.51deg,
      rgba(249, 115, 22, 0.3) -38.71%,
      rgba(0, 163, 224, 0.3) 164.44%
  );
  border-radius: var(--card-radius);
}

.accordion-item[open] {
  background: none;
}

.accordion-item::before {
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
  mask-image: linear-gradient(#fff, #fff),
  linear-gradient(#fff, #fff);
  mask-clip: content-box,
  border-box;
  mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.question {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: 'Actay Wide', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: var(--heading-letter-spacing);}

.text-answer {
  font-family: Kedebideri, sans-serif;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.05em;
  color: #fff;
  padding: 30px;
}

summary {
  width: 100%;
  font-size: 26px;
  line-height: 130%;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: color 200ms;
  padding: 30px;
  display: flex;
  align-items: center;
}

summary::marker {
  content: '';
}


details[open] summary {
  color: #f26765;
}

.rect-icon {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 10px;
  background: #00A3E0;
  flex-shrink: 0;
}

.arrow-icon::before {
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

details[open] summary .arrow-icon {
  transform: rotate(180deg);
}
</style>