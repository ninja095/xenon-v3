<template>
  <div class="page">
    <section class="hero-section">
      <HeroSection />
    </section>

    <HomeStatsBlock/>

    <ServicesSection/>

    <CasesSection/>

    <TestimonialsSection/>
  </div>



</template>

<script>
import HeroSection from "./sections/HeroSection.vue";
import HomeStatsBlock from "./sections/HomeStatsBlock.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import CasesSection from "./sections/CasesSection.vue";
import TestimonialsSection from "./sections/TestimonialsSection.vue";

export default {
  name: 'HomePage',
  components: {TestimonialsSection, CasesSection, ServicesSection, HomeStatsBlock, HeroSection }
};
</script>

<style scoped>

</style>


