<template>
  <section class="py-16 md:py-20 bg-[var(--color-surface)]">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Heading -->
      <div class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4"
        >
          {{ translate("tblb") }}
        </h2>
        <p
          class="text-[var(--color-secondary)] max-w-2xl mx-auto text-sm md:text-base"
        >
          {{ translate("tblbd") }}
        </p>
      </div>

      <!-- Brand Logos - Better tablet responsive design -->
      <div class="relative">
        <!-- Gradient fade effects for mobile scrolling -->
        <div
          class="absolute left-0 top-0 bottom-0 w-12 md:w-20 lg:w-24 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10 pointer-events-none"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-12 md:w-20 lg:w-24 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10 pointer-events-none"
        ></div>

        <!-- Logo container with better responsive design -->
        <div class="overflow-x-auto lg:overflow-visible scrollbar-hide">
          <div
            class="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 min-w-max md:min-w-0 px-4 md:px-0"
          >
            <div
              v-for="brand in brands"
              :key="brand.name"
              class="flex-shrink-0 group relative"
            >
              <!-- Logo with hover effect -->
              <div class="relative p-2">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-[var(--color-peach)]/0 via-[var(--color-cream)]/0 to-[var(--color-peach)]/0 rounded-xl transition-all duration-500 group-hover:from-[var(--color-peach)]/10 group-hover:via-[var(--color-cream)]/5 group-hover:to-[var(--color-peach)]/10 group-hover:scale-110"
                ></div>

                <img
                  :src="brand.logo"
                  :alt="brand.name"
                  class="h-10 md:h-14 lg:h-16 xl:h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 relative z-10"
                />

                <!-- Tooltip on hover - hide on touch devices -->
                <div
                  class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden lg:block"
                >
                  <span
                    class="text-[var(--color-secondary)] text-xs font-medium bg-[var(--color-surface)] px-2 py-1 rounded-md shadow-sm border border-[var(--color-neutral-200)]"
                  >
                    {{ brand.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tablet-optimized layout (768px-1024px) -->
      <div class="hidden md:block lg:hidden mt-6 text-center">
        <p class="text-[var(--color-secondary)]/70 text-sm">
          Scroll horizontally to view all brands
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useLanguage } from "../../../composables/useLanguage";
const { translate } = useLanguage();
const brands = ref([
  {
    name: "Alibaba",
    logo: "https://i.pinimg.com/736x/14/fe/ff/14feffe3f5b1d760b9ce272212870551.jpg",
  },
  {
    name: "Amazon",
    logo: "https://i.pinimg.com/736x/09/ac/64/09ac6418962ad0d21280f9e3321e0d01.jpg",
  },
  {
    name: "Shopify",
    logo: "https://i.pinimg.com/1200x/a6/f8/e8/a6f8e8b23027c3978573164c7dfc3b9f.jpg",
  },
  {
    name: "Azure DevOps",
    logo: "https://i.pinimg.com/1200x/dd/61/bd/dd61bd49eefe53101ac5d6ad1ba0f628.jpg",
  },
  {
    name: "Slack",
    logo: "https://i.pinimg.com/1200x/f1/57/c3/f157c38971fcd94f7de18422215f9509.jpg",
  },
]);
</script>

<style scoped>
/* Hide scrollbar for mobile scrolling */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* Smooth transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Better responsive sizing */
@media (max-width: 639px) {
  .gap-6 {
    gap: 1.5rem;
  }

  .h-10 {
    height: 2.5rem;
  }

  .w-12 {
    width: 3rem;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .gap-6 {
    gap: 2rem;
  }

  .h-10 {
    height: 2.75rem;
  }
}

/* Tablet-specific optimizations (768px-1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .gap-8 {
    gap: 2rem;
  }

  .h-14 {
    height: 3.5rem;
  }

  .overflow-x-auto {
    padding-bottom: 1rem;
    margin-bottom: -1rem;
  }

  .min-w-max {
    min-width: max-content;
  }

  /* Better gradient fade for tablet */
  .bg-gradient-to-r {
    width: 4rem !important;
  }

  .bg-gradient-to-l {
    width: 4rem !important;
  }
}

/* Desktop optimizations */
@media (min-width: 1024px) and (max-width: 1279px) {
  .gap-12 {
    gap: 3rem;
  }

  .h-16 {
    height: 4rem;
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .gap-16 {
    gap: 4rem;
  }

  .h-20 {
    height: 5rem;
  }
}

/* Enhance hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Disable hover effects on touch devices */
@media (hover: none) and (pointer: coarse) {
  .group:hover .group-hover\:scale-105 {
    transform: none;
  }

  .group:hover .group-hover\:scale-110 {
    transform: none;
  }

  .group:hover .group-hover\:grayscale-0 {
    filter: grayscale(1);
  }

  .group:hover .group-hover\:opacity-100 {
    opacity: 0.6;
  }
}

/* Gradient fade optimization */
.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--color-surface) 0%, transparent 100%);
}

.bg-gradient-to-l {
  background: linear-gradient(
    270deg,
    var(--color-surface) 0%,
    transparent 100%
  );
}

/* Subtle shadow for tooltip */
.shadow-sm {
  box-shadow: 0 2px 8px rgba(var(--color-primary-rgb, 69, 40, 41), 0.08);
}
</style>
