<template>
  <component :is="tag" class="ui-headline">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UiHeadline',
  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  }
};
</script>

<style scoped>
.ui-headline {
  color: var(--color-heading-text);
}
</style>


