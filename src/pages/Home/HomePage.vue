<template>
  <div class="page">
    <HeroSection
        :title="heroData.title"
        :subtitle="heroData.subtitle"
        :footnote="heroData.footnote"
        :buttonText="heroData.buttonText"
        :buttonLink="heroData.buttonLink"
    />
    <HomeStatsBlock/>
    <ServicesSection/>
    <CasesSection/>
    <TestimonialsSection/>
    <ContactSection />
  </div>
</template>

<script setup>

import HomeStatsBlock from "./sections/HomeStatsBlock.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import CasesSection from "./sections/CasesSection.vue";
import TestimonialsSection from "./sections/TestimonialsSection.vue";
import ContactSection from "./sections/ContactSection.vue";
import HeroSection from "../../components/ui/HeroSection.vue";
import {ref} from "vue";

const heroData = ref({
    title: 'Xenon — ваш партнёр в IT‑трансформации',
    subtitle: 'Мы создаём технологии, которые увеличивают прибыль, оптимизируют процессы и делают ваш бизнес сильнее.',
    footnote: 'Начните своё путешествие в мир инноваций с Xenon уже сегодня!',
    buttonText: 'Получить консультацию',
    buttonLink: '/contact'
  });
</script>

<style scoped>

</style>


