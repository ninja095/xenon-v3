<template>
  <div class="page">
    <HeroSection/>
    <HomeStatsBlock/>
    <ServicesSection/>
    <CasesSection/>
    <TestimonialsSection/>
    <ContactSection/>
  </div>
</template>

<script>

import HomeStatsBlock from "./sections/HomeStatsBlock.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import CasesSection from "./sections/CasesSection.vue";
import TestimonialsSection from "./sections/TestimonialsSection.vue";
import ContactSection from "./sections/ContactSection.vue";
import HeroSection from "./sections/HeroSection.vue";

export default {
  name: 'HomePage',
  components: {HeroSection, ContactSection, TestimonialsSection, CasesSection, ServicesSection, HomeStatsBlock }
};
</script>

<style scoped>

</style>


