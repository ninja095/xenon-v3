<template>
  <section class="contact-section">
    <div class="contact-content">
      <div class="contact-text">
        <h2 class="contact-title h2">Готовы масштабировать бизнес с помощью IT?</h2>
        <p class="text-description">
          Оставьте заявку, и мы предложим решение, которое подойдёт именно вам.
        </p>
      </div>
      <div class="contact-form__block">
        <div class="contact-form">
          <UiInput
              v-for="field in props.fields"
              :key="field.name"
              v-model="formData[field.name]"
              :type="field.type"
              :placeholder="field.placeholder"
          />
          <UiButton class="button">
            Отправить заявку
          </UiButton>
        </div>
        <div class="contact-image">
          <img src="../../../assets/images/contact_section.png" alt="Contact">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import UiButton from "../../../components/ui/UiButton.vue";
import UiInput from "../../../components/ui/UiInput.vue";


const props = defineProps({
  fields: {
    type: Array,
    default: () => ([
      { name: 'name', placeholder: 'Ваше имя', type: 'text' },
      { name: 'email', placeholder: 'Email', type: 'email' },
      { name: 'phone', placeholder: 'Телефон', type: 'tel' }
    ])
  }
});

const formData = reactive(Object.fromEntries(
    props.fields.map(f => [f.name, ''])
));
</script>

<style scoped>
.contact-section {
  margin-bottom: var(--section-margin-bottom);
}
.contact-title {
  margin-bottom: 20px;
}
.contact-form__block {
  display: flex;
  align-items: stretch;
  gap: 40px;
  margin-top: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
}

.button {
  margin-top: 20px;
}

.contact-image {
  height: 100%;
  flex-grow: 1; /* Позволяем изображению занимать оставшееся место */
  overflow: hidden;
  border-radius: var(--card-radius);
}

.contact-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
