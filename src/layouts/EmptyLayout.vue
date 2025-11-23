<template>
  <div class="empty-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout'
};
</script>

<style scoped>
.empty-layout {
  min-height: 100vh;
  background-color: var(--color-bg-primary);
}
</style>


