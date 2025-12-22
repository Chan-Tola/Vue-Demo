<template>
  <div class="relative w-full overflow-hidden">
    <!-- Full Screen Background Image -->
    <div class="absolute inset-0">
      <img
        :src="backgroundImage"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <!-- Overlay for better text readability -->
      <div
        class="absolute inset-0 bg-[var(--color-cream)]/10 backdrop-blur-[1px]"
      ></div>
    </div>

    <!-- Content Container - CHANGED: Removed min-h-screen from container -->
    <div
      class="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 lg:px-12"
    >
      <div
        class="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-0"
      >
        <!-- Product Image -->
        <div
          class="w-full lg:w-1/2 flex items-center justify-center order-1 md:order-1 lg:order-2 px-2"
        >
          <div
            class="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[700px] xl:max-w-[800px]"
          >
            <!-- Enhanced Glow Effect -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] xl:w-[750px] xl:h-[750px] bg-gradient-to-br from-[var(--color-pink-500)]/20 via-[var(--color-peach)]/30 to-[var(--color-pink-500)]/20 rounded-full blur-2xl lg:blur-3xl"
              ></div>
            </div>

            <!-- Larger Product Image -->
            <img
              :src="productImage"
              alt="ANUA Peach 70 Niacin Serum"
              class="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)] md:drop-shadow-[0_35px_70px_rgba(0,0,0,0.35)] lg:drop-shadow-[0_45px_90px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        <!-- Text Content -->
        <div
          class="w-full lg:w-1/2 space-y-4 md:space-y-6 order-2 md:order-2 lg:order-1 mt-6 md:mt-8 lg:mt-0 lg:pl-8 xl:pl-12"
        >
          <!-- Header -->
          <div class="space-y-2 md:space-y-3 max-w-xl mx-auto lg:mx-0">
            <p
              class="text-[var(--color-primary)] text-sm md:text-base font-medium tracking-wide text-center lg:text-left"
            >
              Personal Skincare
            </p>
            <h1 class="space-y-1 md:space-y-2">
              <span
                :class="[
                  'block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-mint)] text-center lg:text-left',
                  currentLanguage === 'kh' ? 'py-4' : '',
                ]"
              >
                {{ translate("welcome-tf") }}
              </span>
              <span
                :class="[
                  'block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-mint)] text-center lg:text-left',
                  currentLanguage === 'kh' ? 'py-4' : '',
                ]"
              >
                {{ translate("welcome-sk") }}
              </span>
            </h1>
            <p
              class="text-[var(--color-secondary)] text-base md:text-lg lg:text-xl max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0"
            >
              {{ description }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div
            class="flex items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2 md:pt-4"
          >
            <button
              class="bg-[var(--color-mint)] text-white border-2 border-[var(--color-mint)] px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-lg font-medium transition-all duration-300 hover:bg-transparent hover:text-[var(--color-mint)] active:scale-95 shadow-lg hover:shadow-xl w-full max-w-[300px] sm:max-w-none sm:w-auto text-sm md:text-base"
            >
              {{ ctaText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useLanguage } from "../../../composables/useLanguage";

const { translate, currentLanguage } = useLanguage();

// onMounted(() => {
//   initLanguage();
// });
defineProps({
  title: {
    type: String,
    required: true,
  },
  overlayText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default:
      "Our scientifically advanced formulas combine nature's best ingredients with modern technology for visible results.",
  },
  ctaText: {
    type: String,
    default: "Discover Collection",
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* REMOVED: All the min-h-screen and height related CSS */
/* Keep only essential image scaling and transitions */

/* Ensure image scaling */
img {
  max-width: 100%;
  height: auto;
  transform: scale(1.05);
}

@media (max-width: 1023px) {
  img {
    transform: scale(1.08);
  }
}

/* Smooth transitions */
button {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Gradient animation */
.bg-gradient-to-r {
  background-size: 200% 100%;
  background-position: left center;
}

button:hover .bg-gradient-to-r {
  background-position: right center;
}

/* Responsive padding adjustments */
@media (max-width: 640px) {
  .py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .max-w-\[320px\] {
    max-width: 300px;
  }

  .text-4xl {
    font-size: 2rem;
    line-height: 2.25rem;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .max-w-\[450px\] {
    max-width: 420px;
  }

  .text-5xl {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
}

@media (min-width: 769px) and (max-width: 1023px) {
  .py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .max-w-\[550px\] {
    max-width: 500px;
  }
}
</style>
