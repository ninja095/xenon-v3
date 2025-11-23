<template>
  <section class="testimonials">
    <h2 class="testimonials-header h2">Что говорят наши клиенты</h2>

    <div class="slider-viewport">
      <div class="card-track" ref="cardTrackRef">
        <TestimonialsCard
            v-for="(testimonial, index) in infiniteTestimonials"
            :key="testimonial.id + '-' + index"
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
      >
        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 0.5L0.5 10.4338L10.5 20.5" stroke="#F5F7FA" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button
          class="nav-arrow next"
          @click="nextSlide"
      >
        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.499999 0.5L10.5 10.4338L0.499999 20.5" stroke="#F5F7FA" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue';
import TestimonialsCard from "../cards/TestimonialsCard.vue";

const CARD_WIDTH_DESKTOP = 574;
const CARD_WIDTH_MOBILE = 300;
const GAP = 20;

const CARDS_PER_VIEW = 3;
const CLONE_COUNT = CARDS_PER_VIEW


const cardTrackRef = ref(null);
const currentSlideIndex = ref(CLONE_COUNT);
const isAnimating = ref(false);

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

const infiniteTestimonials = computed(() => {
  const original = testimonials.value;

  const prefix = original.slice(-CLONE_COUNT);

  const suffix = original.slice(0, CLONE_COUNT);

  return [...prefix, ...original, ...suffix];
});

const getOffset = (index) => {
  return index * SLIDE_OFFSET.value;
};

const totalOriginalSlides = computed(() => testimonials.value.length);

const cardWidth = computed(() => {
  return window.innerWidth < 768 ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
});

const SLIDE_OFFSET = computed(() => cardWidth.value + GAP);


const centerIndex = computed(() => {
  return currentSlideIndex.value + Math.floor(CARDS_PER_VIEW / 2);
});

const isCardHighlighted = (cardIndex) => cardIndex === centerIndex.value;
const isLeftCard = (cardIndex) => cardIndex === currentSlideIndex.value;
const isRightCard = (cardIndex) => cardIndex === currentSlideIndex.value + CARDS_PER_VIEW - 1;

const moveTrack = (index, withTransition = true) => {
  if (!cardTrackRef.value) return;
  const offset = getOffset(index);
  if (withTransition) {
    cardTrackRef.value.style.transition = 'transform 0.4s ease-in-out';
  } else {
    cardTrackRef.value.style.transition = 'none';
  }
  cardTrackRef.value.style.transform = `translateX(-${offset}px)`;
};

const handleTransitionEnd = () => {
  if (!cardTrackRef.value) return;

  if (currentSlideIndex.value === 0) {
    currentSlideIndex.value = totalOriginalSlides.value;
    moveTrack(currentSlideIndex.value, false);
  } else if (currentSlideIndex.value === totalOriginalSlides.value + CLONE_COUNT) {
    currentSlideIndex.value = CLONE_COUNT;
    moveTrack(currentSlideIndex.value, false);
  }
  isAnimating.value = false;
};

const nextSlide = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentSlideIndex.value++;
  moveTrack(currentSlideIndex.value, true);
};

const prevSlide = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentSlideIndex.value--;
  moveTrack(currentSlideIndex.value, true);
};

onMounted(() => {
  moveTrack(CLONE_COUNT, false);
  cardTrackRef.value?.addEventListener('transitionend', handleTransitionEnd);
});

onUnmounted(() => {
  cardTrackRef.value?.removeEventListener('transitionend', handleTransitionEnd);
});
</script>

<style scoped>
.testimonials {
  padding: 60px 0;
  color: white;
  font-family: sans-serif;
  text-align: left;
}

.testimonials-header {
  margin-bottom: 40px;
}

.slider-viewport {
  overflow: hidden;
  margin: 0 auto;
  max-width: calc(574px * 3 + 30px * 2);
}

.card-track {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: nowrap;
}

@media (max-width: 768px) {
  .testimonial-card {
    max-width: 300px;
  }

  .slider-viewport {
    max-width: 340px;
  }

  .slider-nav {
    gap: 20px;
  }

  .nav-arrow {
    width: 48px;
    height: 48px;
  }
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
  border-color: #cf7b38;
}


.testimonial-card.is-highlighted {
  height: 263px;
  opacity: 1;
  filter: none;
  background: linear-gradient(
      179.51deg,
      rgba(249, 115, 22, 0.4) -38.71%,
      rgba(0, 163, 224, 0.4) 164.44%
  ),
  #2b2b2b;
}

.testimonial-card.is-left-fade {
  opacity: 0.5;
  filter: blur(2px);
  background: #2b2b2b;
}

.testimonial-card.is-right-fade {
  opacity: 0.5;
  filter: blur(2px);
  background: #2b2b2b;
}

.testimonial-card.is-highlighted :deep(.quote) {
  font-size: 20px;
  line-height: 1;
}

.testimonial-card.is-highlighted :deep(.author) {
  font-size: 15px;
}
</style>
