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
    <p class="quote">{{ quote }}</p>
    <p class="author">{{ author }}</p>
  </div>
</template>

<style scoped>


.testimonial-card {
  width: 100%;
  max-width: 550px;
  min-height: 213px;
  height: auto;
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
  opacity: 1;
  filter: none;
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
}

.quote {
  font-size: 15px;
  line-height: var(--h3-line);
  letter-spacing: var(--heading-letter-spacing);
  margin-bottom: 10px;
}

.author {
  font-size: 12px;
  line-height: var(--h3-line);
  letter-spacing: var(--heading-letter-spacing);
  color: var(--color-text-secondary);
}

</style>