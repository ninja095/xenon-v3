<template>
  <component
      :is="to ? 'RouterLink' : 'button'"
      class="ui-button"
      :to="to"
      type="button"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    default: null
  }
});
</script>

<style scoped>
.ui-button {
  padding: 20px;
  border-radius: var(--btn-radius);
  border: none;
  background-color: var(--color-btn-primary);
  color: #ffffff;
  font-family: var(--font-heading), sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  letter-spacing: var(--heading-letter-spacing);
  text-decoration: none;
}

.ui-button:hover {
  opacity: 0.9;
}

.ui-button:active {
  transform: translateY(1px);
}
</style>


