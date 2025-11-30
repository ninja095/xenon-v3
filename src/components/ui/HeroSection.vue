<template>
  <section class="hero-section">
    <div class="hero__header">
      <h1 class="h1 hero__title">{{ title }}</h1>

      <p v-if="subtitle" class="hero__subtitle md-text">
        {{ subtitle }}
      </p>
    </div>

    <div class="hero__footer">
      <p v-if="footnote" class="hero__footnote sm-text">
        {{ footnote }}
      </p>

      <UiButton v-if="buttonText" :to="buttonLink">
        {{ buttonText }}
      </UiButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiButton from "./UiButton.vue";

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  footnote: { type: String, default: "" },
  buttonText: { type: String, default: "" },
  buttonLink: { type: String, default: "" }
});

</script>

<style scoped>
.hero-section {
  margin-bottom: var(--section-margin-bottom);
}
.hero__header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 400px;
}

.hero__title {
  width: 880px;
}

.hero__subtitle {
  color: var(--color-text-secondary);
  width: 736px;
}

.hero__title {
  color: var(--color-heading-text);
  margin-bottom: 30px;
}

.hero__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
}

.hero__footnote {
  width: 626px;
  color: var(--color-text-secondary);
}
</style>
