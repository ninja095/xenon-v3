<template>
  <div class="hero__header">
    <h1 class="h1 hero__title">
      Комплексные IT‑решения для роста прибыли
    </h1>
    <p class="hero__subtitle md-text">
      От стратегии до внедрения — мы создаём технологии, которые увеличивают прибыль и повышают эффективность.
    </p>
  </div>

  <div class="hero__footer">
    <p class="hero__footnote sm-text">
      Xenon помогает бизнесу достигать целей с помощью инновационных IT-решений, адаптированных под ваши задачи.
    </p>
    <UiButton>Получить консультацию</UiButton>
  </div>
</template>

<script>
import UiUiButton from "../../../components/ui/UiButton.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: { UiButton: UiUiButton }
})

</script>

<style scoped>
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
