<template>
  <button class="ui-button " type="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiButton'
};
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
}

.ui-button:hover {
  opacity: 0.9;
}

.ui-button:active {
  transform: translateY(1px);
}
</style>


