<script setup>
defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="testimonial-card">
    <div class="card-icon blue-icon"></div>
    <p class="quote">Xenon внедрили облачное решение для нашей логистической платформы, что позволило сократить время обработки заказов на 25%. Их команда — это профессионалы, которые понимают бизнес!</p>
    <p class="author">Максим Ковалев, генеральный директор, ООО «ЛогистикСистем»</p>
  </div>
</template>

<style scoped>


.testimonial-card {
  width: 573px;
  height: 213px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  padding: 30px;
  color: white;
  overflow: hidden;
  background: var(--color-bg-primary);
}

.testimonial-card::before {
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

.testimonial-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 15px;
  /* По умолчанию скрыт */
  background: transparent;
  pointer-events: none;
  z-index: 5;
}

.card-icon {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.blue-icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  background-color: #00A3E0;
  border-radius: 10px;
  margin-bottom: 20px;
}

.quote {
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
}

.author {
  font-size: 14px;
  color: var(--color-text-secondary);
}

</style>