<template>
  <section class="contact-section">
    <Container>
      <GradientCard>
        <div class="contact-content">
          <div class="contact-text">
            <h2 class="contact-title">Готовы начать проект?</h2>
            <p class="contact-description">
              Свяжитесь с нами и мы обсудим детали вашего проекта
            </p>
          </div>
          <div class="contact-form">
            <Input v-model="formData.name" placeholder="Ваше имя" />
            <Input v-model="formData.email" type="email" placeholder="Email" />
            <Input v-model="formData.phone" type="tel" placeholder="Телефон" />
            <Button variant="primary" size="large" @click="handleSubmit">
              Отправить заявку
            </Button>
          </div>
        </div>
      </GradientCard>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Container from '@/components/ui/Container.vue'
import GradientCard from '@/components/ui/GradientCard.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/UiButton.vue'

const formData = reactive({
  name: '',
  email: '',
  phone: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData)
  // TODO: Implement form submission
}
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
  background: var(--color-bg-primary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.contact-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-title {
    font-size: 2rem;
  }
}
</style>
