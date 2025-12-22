<template>
  <section class="py-20" style="background-color: #fff4f2">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header - More elegant -->
      <div class="flex items-center justify-center gap-6 md:gap-10 mb-16">
        <button
          class="text-black/60 hover:text-black text-sm md:text-base font-normal tracking-wide transition-colors duration-200 uppercase"
        >
          {{ translate("glPdCd") }}
        </button>
        <div class="relative">
          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight"
          >
            {{ translate("glNA") }}
          </h2>
          <div
            class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-black/30"
          ></div>
        </div>
        <button
          class="text-black/60 hover:text-black text-sm md:text-base font-normal tracking-wide transition-colors duration-200 uppercase"
        >
          {{ translate("glBS") }}
        </button>
      </div>

      <!-- Carousel - Improved spacing and cleaner cards -->
      <div class="relative px-4 sm:px-8 lg:px-20">
        <Splide :options="splideOptions" aria-label="New Arrivals Products">
          <SplideSlide
            v-for="product in productStore.products"
            :key="product.id"
          >
            <div class="flex flex-col items-center px-2 h-full">
              <!-- Clean product card -->
              <div class="group relative w-full max-w-xs mx-auto mb-6 md:mb-8">
                <!-- Image container with border -->
                <div
                  class="relative rounded-[2.5rem] md:rounded-[3rem] p-5 md:p-6 lg:p-8 aspect-square flex items-center justify-center overflow-hidden bg-[var(--color-pink-50)] border border-black shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <!-- Image with subtle hover zoom -->
                  <img
                    :src="getProductImageUrl(product.image)"
                    :alt="product.name"
                    class="w-auto h-auto max-w-[85%] max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <!-- Product info -->
                <div class="text-center space-y-3 md:space-y-4 mt-6">
                  <div>
                    <h3
                      class="text-lg md:text-xl font-medium tracking-wide mb-1 text-black"
                    >
                      {{ product.name }}
                    </h3>
                    <p class="text-base md:text-lg text-black/80">
                      ${{ product.price }}
                    </p>
                  </div>

                  <!-- Button -->
                  <button
                    class="inline-flex items-center justify-center bg-[var(--color-pink-50)] border border-black px-6 md:px-8 py-2.5 rounded-full text-sm md:text-base font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)] min-w-[140px]"
                  >
                    <span>{{ translate("welcome-shop") }}</span>
                  </button>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { useProductStore } from "../../features/products/productStore";
import { useLanguage } from "../../composables/useLanguage";
const { translate } = useLanguage();

const productStore = useProductStore();
const isMobile = ref(false);

const getProductImageUrl = (imagePath) => {
  return `/src/assets/images/products/${imagePath}`;
};

const splideOptions = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: "2.5rem",
  pagination: false,
  arrows: true,
  drag: false,
  speed: 600,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  breakpoints: {
    1280: {
      perPage: 3,
      gap: "2rem",
    },
    1024: {
      perPage: 2,
      arrows: false,
      drag: true,
      gap: "1.5rem",
    },
    640: {
      perPage: 1,
      arrows: false,
      drag: true,
      gap: "1rem",
    },
  },
};

// Responsive detection
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 640;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<style scoped>
/* Custom arrow styling for Splide */
:deep(.splide__arrow) {
  background: white;
  border: 1px solid black;
  width: 3.5rem;
  height: 3.5rem;
  opacity: 0.9;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-170%);
}

:deep(.splide__arrow:hover:not(:disabled)) {
  background: #f9f9f9;
  opacity: 1;
}

:deep(.splide__arrow svg) {
  fill: black;
  width: 1.4rem;
  height: 1.4rem;
}

:deep(.splide__arrow--prev) {
  left: -5rem;
}

:deep(.splide__arrow--next) {
  right: -5rem;
}

/* Mobile touch improvements */
@media (max-width: 1024px) {
  :deep(.splide__track) {
    cursor: grab;
    padding: 8px 0;
  }

  :deep(.splide__track:active) {
    cursor: grabbing;
  }
}

/* Smooth fade-in for images */
img {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
