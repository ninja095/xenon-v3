<template>
  <div class="page">
    <HeroSection
        :title="heroData.title"
        :subtitle="heroData.subtitle"
        :footnote="heroData.footnote"
        :buttonText="heroData.buttonText"
        :buttonLink="heroData.buttonLink"
    />
    <ServicesSection/>

    <ProcessSection/>

    <ContactSection :fields="[
        { name: 'name', placeholder: 'Имя', type: 'text' },
        { name: 'email', placeholder: 'Email', type: 'email' },
        { name: 'phone', placeholder: 'Телефон', type: 'tel' },
        { name: 'message', placeholder: 'Сообщение', type: 'text' }
      ]"
    />
  </div>
</template>

<script setup>
import HeroSection from "../../components/ui/HeroSection.vue";

import {ref} from "vue";
import ContactSection from "../Home/sections/ContactSection.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import ProcessSection from "./sections/ProcessSection.vue";

const heroData = ref({
  title: 'IT-решения, которые работают на ваш бизнес',
  subtitle: 'Мы создаём технологии, которые увеличивают прибыль, оптимизируют процессы и делают ваш бизнес устойчивее к вызовам.',
  footnote: 'Xenon предлагает комплексные IT-услуги — от стратегического консалтинга до внедрения и поддержки. Наши решения адаптированы под ваши задачи и ориентированы на результат.',
  buttonText: 'Связаться с нами',
  buttonLink: '/contact'
});
</script>

<style scoped>

</style>


