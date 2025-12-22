<template>
  <div>
    <WelcomeCard
      :description="translate('welcome-des')"
      :cta-text="translate('welcome-shop')"
      :product-image="productImage"
      :background-image="backProductImage"
    />
    <!-- overlay-text="Radiant Skin Starts Here" -->
  </div>

  <!-- title="Discover Natural Beauty With Our Premium Skincare Collection" -->
  <!-- GlobalProductCard with Fade Up Animation -->
  <ScrollAnimation
    class="pt-2"
    animation-type="fadeUp"
    duration="1"
    delay="0.2"
  >
    <GlobalProductCard />
  </ScrollAnimation>

  <!-- WhyChoose with Stagger Animation -->
  <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
    <WhyChoose />
  </ScrollAnimation>

  <!-- TrustBrand with Scale Animation -->
  <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
    <TrustBrand />
  </ScrollAnimation>

  <!-- BestSeller with Fade Up and Stagger -->
  <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
    <BestSeller />
  </ScrollAnimation>

  <!-- Testimonials with Slide Right -->
  <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
    <Testimonials />
  </ScrollAnimation>

  <!-- NewSletter with Fade In -->
  <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
    <NewSletter />
  </ScrollAnimation>
</template>

<script setup>
import { onMounted } from "vue";
import { useLanguage } from "../../../composables/useLanguage";
import WelcomeCard from "../components/WelcomeCard.vue";
import productImage from "../../../assets/images/products/935bb0509e4321c5021552f0e6af6681-removebg-preview.png";
import backProductImage from "../../../assets/images/products/a2b260b0c00c424f56deb7f46ca6355e.jpg";
import GlobalProductCard from "../../../components/common/GlobalProductCard.vue";
import WhyChoose from "../components/WhyChoose.vue";
import TrustBrand from "../components/TrustBrand.vue";
import BestSeller from "../components/BestSeller.vue";
import Testimonials from "../components/Testimonials.vue";
import NewSletter from "../components/NewSletter.vue";
import ScrollAnimation from "../../../components/common/ScrollAnimation.vue";
const { initLanguage, translate } = useLanguage();

onMounted(() => {
  initLanguage();
});
</script>
