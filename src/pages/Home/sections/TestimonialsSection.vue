<template>
  <section class="testimonials">
    <h2>Что говорят наши клиенты</h2>

    <div class="slider-viewport">
      <div class="card-track" ref="cardTrackRef">
        <TestimonialsCard
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            :quote="testimonial.quote"
            :author="testimonial.author"
            :class="{
                'is-highlighted': isCardHighlighted(index),
                'is-left-fade': isLeftCard(index),
                'is-right-fade': isRightCard(index)
            }"
        />
      </div>
    </div>

    <div class="slider-nav">
      <button
          class="nav-arrow prev"
          @click="prevSlide"
          :disabled="currentSlideIndex <= MIN_SLIDE_INDEX"
      ><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 0.5L0.5 10.4338L10.5 20.5" stroke="#F5F7FA" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </button>
      <button
          class="nav-arrow next"
          @click="nextSlide"
          :disabled="currentSlideIndex >= maxSlideIndex"
      ><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.499999 0.5L10.5 10.4338L0.499999 20.5" stroke="#F5F7FA" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import TestimonialsCard from "../cards/TestimonialsCard.vue";

const CARD_WIDTH = 574;
const GAP = 20;
const SLIDE_OFFSET = CARD_WIDTH + GAP;
const CARDS_PER_VIEW = 3;
const MIN_SLIDE_INDEX = -(Math.floor(CARDS_PER_VIEW / 2));


const cardTrackRef = ref(null);
const currentSlideIndex = ref(0);
const testimonials = ref([
  {
    id: 1,
    quote: 'Xenon внедрили облачное решение для нашей логистической платформы, что позволило сократить время обработки заказов на 25%. Их команда — это профессионалы, которые понимают бизнес!',
    author: 'Михаил Ковалёв, генеральный директор, ООО «ЛогистикСистем»',
  },
  {
    id: 2,
    quote: 'Xenon помогли нам внедрить облачное решение, которое ускорило процессы на 40%. Настоящие профессионалы!',
    author: 'Иван Петров, директор по информационным технологиям, ООО «ТехноПрогресс»',
  },
  {
    id: 3,
    quote: 'Благодаря новой CRM от Xenon наши продажи выросли на треть. Рекомендуем!',
    author: 'Анна Смирнова, коммерческий директор, «РитейлГрупп»',
  },
  {
    id: 4,
    quote: 'Xenon обеспечили надежную защиту наших данных. Теперь мы спим спокойно!',
    author: 'Ольга Иванова, руководитель отдела безопасности, «ФинансПлюс»',
  },
  {
    id: 5,
    quote: 'После миграции в облако с помощью Xenon наша команда стала работать эффективнее на 50%.',
    author: 'Сергей Кузнецов, ИТ-директор, «ПроизводствоСервис»',
  }
]);

const totalSlides = computed(() => testimonials.value.length);
const maxSlideIndex = computed(() => totalSlides.value - CARDS_PER_VIEW + Math.floor(CARDS_PER_VIEW / 2));

const centerIndex = computed(() => {
  return currentSlideIndex.value + Math.floor(CARDS_PER_VIEW / 2);
});
const isCardHighlighted = (cardIndex) => {
  return cardIndex === centerIndex.value;
};
const moveTrack = (index) => {
  if (cardTrackRef.value) {
    const offset = index * SLIDE_OFFSET;
    cardTrackRef.value.style.transform = `translateX(-${offset}px)`;
  }
};

const isLeftCard = (cardIndex) => {
  return cardIndex === currentSlideIndex.value;
};

const isRightCard = (cardIndex) => {
  return cardIndex === currentSlideIndex.value + CARDS_PER_VIEW - 1;
};
const nextSlide = () => {
  if (currentSlideIndex.value < maxSlideIndex.value) {
    currentSlideIndex.value++;
    moveTrack(currentSlideIndex.value);
  }
};

const prevSlide = () => {
  if (currentSlideIndex.value > MIN_SLIDE_INDEX) {
    currentSlideIndex.value--;
    moveTrack(currentSlideIndex.value);
  }
};
</script>

<style scoped>
.testimonials {
  padding: 60px 0;
  color: white;
  font-family: sans-serif;
  text-align: left;
}

.testimonials h2 {
  font-size: 32px;
  margin-bottom: 40px;
}

.slider-viewport {
  overflow: hidden;
}

.card-track {
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  transition: transform 0.3s ease-in-out;
}

/*.is-highlighted {
  width: 574px;
  height: 263px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  padding: 30px;
  color: white;
  overflow: hidden;

  background: linear-gradient(
      179.51deg,
      rgba(249, 115, 22, 0.3) -38.71%,
      rgba(0, 163, 224, 0.3) 164.44%
  );
} */

.testimonial-card.is-highlighted {
  height: 263px; /* УВЕЛИЧЕННАЯ ВЫСОТА */
  background: linear-gradient(
      179.51deg,
      rgba(249, 115, 22, 0.4) -38.71%,
      rgba(0, 163, 224, 0.4) 164.44%
  ),
  #2b2b2b;
}

.testimonial-card.is-highlighted::before {
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

.testimonial-card.is-left-fade::after {
  /* Создаем маску, которая плавно переходит от черного (непрозрачного) к прозрачному */
  background: linear-gradient(
      90deg, /* Слева направо */
      rgba(0, 0, 0, 0.5) 0%, /* Непрозрачный темный на краю */
      rgba(0, 0, 0, 0.0) 40% /* Полностью прозрачный ближе к центру */
  );
}

.testimonial-card.is-right-fade::after {
  /* Создаем маску, которая плавно переходит от прозрачного к черному */
  background: linear-gradient(
      270deg, /* Справа налево */
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.0) 40%
  );
}

.slider-nav {
  display: flex;
  gap: 40px;
  margin-top: 30px;
  justify-content: center;
}

.nav-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 60px;
  color: var(--color-heading-text);
  border: 1px solid var(--color-btn-primary);
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
}

.nav-arrow:hover {
  border-color: #888;
}
</style>
