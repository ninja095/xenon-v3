<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue';

export default {
  name: 'App',
  components: { DefaultLayout }
};
</script>

<style>
body {
  background-color: var(--color-bg-primary);
}
</style>


