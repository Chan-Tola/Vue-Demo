<template>
  <section class="w-full">
    <!-- Main Content Section -->
    <!-- Main Content Section -->
    <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
      <div
        :class="[
          `py-20 border-black lg:py-32 border h-[700px]`,
          currentLanguage === 'kh' ? 'h-[800px]' : '',
        ]"
      >
        <div class="container mx-auto px-4 max-w-4xl">
          <p class="text-2xl mb-8 text-[#FFB7CE] uppercase tracking-wider">
            About Us
          </p>

          <h2 class="text-4xl lg:text-5xl mb-12">
            Radiant Skin Begins With Conscious Care
          </h2>

          <div class="space-y-4 opacity-70">
            <p>
              At ILLUME, we believe every woman deserves to feel confident in
              her own skin. Our journey began with a simple mission: to create
              clean, effective skincare that celebrates your natural beauty
              while respecting both your skin and the planet.
            </p>

            <p>
              We specialize in thoughtfully formulated essentials—from
              nourishing serums that target specific concerns to protective
              sunscreens that shield without compromise. Our collection includes
              gentle masks, clarifying clay masks, and daily essentials designed
              to work harmoniously with your skin's natural rhythm.
            </p>

            <p>
              Every product is crafted with integrity, using only clean
              ingredients that deliver real results. Because we believe skincare
              should be a ritual of self-care, not just a routine. It's about
              illuminating your natural glow from within.
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>

    <!-- Team photo - Now properly positioned -->
    <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
      <div class="-mt-32">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <img
              src="https://i.pinimg.com/1200x/9f/fa/2f/9ffa2ff65ef1b103210079e9881a0730.jpg"
              alt="Team members"
              class="w-full rounded-lg shadow-lg border-8 border-white"
            />
          </div>
        </div>
      </div>
    </ScrollAnimation>

    <!-- Image Grid Section -->
    <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
      <div class="bg-[var(--color-surface)] py-16 lg:py-24">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="max-w-6xl mx-auto">
            <!-- Asymmetric Grid Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <!-- Top row: Product Image (left) -->
              <ScrollAnimation
                animation-type="fadeUp"
                duration="1"
                delay="0.2"
                container-class="relative lg:pr-4"
              >
                <div
                  class="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src="https://i.pinimg.com/474x/a7/48/ad/a748ad782c7afc35fb51ad943b4c5e8d.jpg"
                    alt="Branded product pouch"
                    class="w-full h-[350px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <!-- Overlay with brand color -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent"
                  ></div>
                </div>
              </ScrollAnimation>

              <!-- Top row: Flower Image (right) -->
              <ScrollAnimation
                animation-type="fadeUp"
                duration="1"
                delay="0.2"
                container-class="relative lg:pl-4"
              >
                <div
                  class="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src="https://i.pinimg.com/1200x/ae/3d/33/ae3d33a697fba61bbfd3b9537581d583.jpg"
                    alt="Beautiful pink flowers"
                    class="w-full h-[350px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <!-- Overlay with accent color -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-[var(--color-pink-500)]/20 to-transparent"
                  ></div>
                </div>
              </ScrollAnimation>

              <!-- Bottom: Hand with Product -->
              <ScrollAnimation
                animation-type="fadeUp"
                duration="1"
                delay="0.2"
                container-class="lg:col-span-2 flex justify-center lg:-mt-24 mt-8"
              >
                <div class="w-full lg:w-2/3 max-w-2xl relative">
                  <div
                    class="relative overflow-hidden rounded-lg shadow-xl group"
                  >
                    <img
                      src="https://i.pinimg.com/736x/b0/ab/8c/b0ab8cb23b31857266d17d1498bb31de.jpg"
                      alt="Hand holding skincare product"
                      class="w-full h-[300px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <!-- Frame border -->
                    <div
                      class="absolute inset-0 border-4 border-[var(--color-cream)] rounded-lg pointer-events-none"
                    ></div>
                    <!-- Overlay gradient -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/10 to-transparent"
                    ></div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </section>
</template>

<script setup>
import ScrollAnimation from "../../../components/common/ScrollAnimation.vue";
import { useLanguage } from "../../../composables/useLanguage";
const { currentLanguage } = useLanguage();
</script>

<style scoped>
/* Custom animation for the team photo */
@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideInFromBottom 1s ease-out forwards;
}

/* Custom scroll animation styles using your colors */
:deep(.scroll-animation) {
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

:deep(.fadeUp) {
  opacity: 0;
  transform: translateY(30px);
}

:deep(.fadeUp.visible) {
  opacity: 1;
  transform: translateY(0);
}

/* Ensure images have consistent styling */
img {
  background-color: var(--color-cream);
}

/* Responsive image container styling */
.relative {
  background-color: var(--color-surface);
}

/* Enhanced shadow colors using your palette */
.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(var(--color-primary-rgb, 69, 40, 41), 0.1),
    0 8px 10px -6px rgba(var(--color-primary-rgb, 69, 40, 41), 0.1);
}

.shadow-xl {
  box-shadow: 0 20px 40px -10px rgba(var(--color-primary-rgb, 69, 40, 41), 0.15),
    0 10px 15px -8px rgba(var(--color-primary-rgb, 69, 40, 41), 0.1);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(var(--color-primary-rgb, 69, 40, 41), 0.25);
}

/* Optional: Add RGB values for your primary color to use in shadows */
:root {
  --color-primary-rgb: 69, 40, 41; /* RGB values for burgundy (#452829) */
}
</style>
