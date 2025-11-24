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
          <UiInput v-model="formData.name" placeholder="Ваше имя"/>
          <UiInput v-model="formData.email" type="email" placeholder="Email"/>
          <UiInput v-model="formData.phone" type="tel" placeholder="Телефон"/>
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

const formData = reactive({
  name: '',
  email: '',
  phone: ''
})


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
  align-items: center;
  gap: 40px;
  margin-top: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 880px;
}

.button {
  margin-top: 20px;
}

.contact-image {
  aspect-ratio: 880 / 335;
  width: 100%;
  max-width: 880px;
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
