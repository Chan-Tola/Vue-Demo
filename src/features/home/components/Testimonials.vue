<template>
  <section class="bg-[var(--color-surface)] py-16 lg:py-24">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="text-center mb-12 lg:mb-16">
        <h2
          class="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-4"
        >
          {{ translate("wocs") }}
        </h2>
        <p
          class="text-[var(--color-secondary)] text-sm lg:text-base max-w-2xl mx-auto"
        >
          {{ translate("wocsd") }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <!-- Testimonial 1 -->
        <div
          class="bg-[var(--color-pink-50)] rounded-2xl p-6 lg:p-8 relative border border-[var(--color-pink-50)] hover:border-[var(--color-pink-200)] transition-colors duration-300 group"
        >
          <!-- Quote Icon -->
          <div
            class="absolute top-6 right-6 text-[var(--color-pink-300)] text-4xl lg:text-5xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
          >
            "
          </div>

          <!-- Profile -->
          <div class="flex items-center gap-3 mb-4">
            <img
              src="https://i.pinimg.com/1200x/1a/11/3f/1a113fdc5c054cf6038cc08f5882db3d.jpg"
              alt="Sarah Fate"
              class="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-cream)]"
            />
            <div>
              <h3 class="font-semibold text-[var(--color-primary)]">
                Sarah Fate
              </h3>
              <p class="text-sm text-[var(--color-secondary)]/70">Designer</p>
            </div>
          </div>

          <!-- Testimonial Text -->
          <p
            class="text-[var(--color-secondary)] text-sm lg:text-base leading-relaxed mb-6"
          >
            ILLUME's Radiance Serum is magic in a bottle. My skin is brighter,
            smoother, and I feel more confident every day.
          </p>

          <!-- Stars -->
          <div class="flex gap-1">
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div
          class="bg-[var(--color-pink-50)] rounded-2xl p-6 lg:p-8 relative border border-[var(--color-pink-50)] hover:border-[var(--color-pink-200)] transition-colors duration-300 group"
        >
          <!-- Quote Icon -->
          <div
            class="absolute top-6 right-6 text-[var(--color-pink-300)] text-4xl lg:text-5xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
          >
            "
          </div>

          <!-- Profile -->
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-peach)] to-[var(--color-pink-300)] flex items-center justify-center"
            >
              <span class="text-[var(--color-surface)] font-bold text-lg"
                >DR</span
              >
            </div>
            <div>
              <h3 class="font-semibold text-[var(--color-primary)]">
                David R.
              </h3>
              <p class="text-sm text-[var(--color-secondary)]/70">Designer</p>
            </div>
          </div>

          <!-- Testimonial Text -->
          <p
            class="text-[var(--color-secondary)] text-sm lg:text-base leading-relaxed mb-6"
          >
            The AquaRenew Hydration Serum saved my dry skin. Highly recommended
            ILLUME.
          </p>

          <!-- Stars -->
          <div class="flex gap-1">
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div
          class="bg-[var(--color-pink-50)] rounded-2xl p-6 lg:p-8 relative border border-[var(--color-pink-50)] hover:border-[var(--color-pink-200)] transition-colors duration-300 group"
        >
          <!-- Quote Icon -->
          <div
            class="absolute top-6 right-6 text-[var(--color-pink-300)] text-4xl lg:text-5xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"
          >
            "
          </div>

          <!-- Profile -->
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-peach)] to-[var(--color-pink-300)] flex items-center justify-center"
            >
              <span class="text-[var(--color-surface)] font-bold text-lg"
                >JL</span
              >
            </div>
            <div>
              <h3 class="font-semibold text-[var(--color-primary)]">
                Jessica L.
              </h3>
              <p class="text-sm text-[var(--color-secondary)]/70">Designer</p>
            </div>
          </div>

          <!-- Testimonial Text -->
          <p
            class="text-[var(--color-secondary)] text-sm lg:text-base leading-relaxed mb-6"
          >
            The Revive Repair Serum is a game changer. My skin looks younger,
            and I've received so many compliments.
          </p>

          <!-- Stars -->
          <div class="flex gap-1">
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
            <span class="text-[var(--color-pink-500)] text-lg">★</span>
          </div>
        </div>
      </div>

      <!-- Carousel Dots -->
      <!-- <div class="flex justify-center gap-2 mt-8 lg:mt-12">
        <button
          class="w-2 h-2 rounded-full bg-[var(--color-pink-500)]"
        ></button>
        <button
          class="w-2 h-2 rounded-full bg-[var(--color-neutral-200)] hover:bg-[var(--color-pink-300)] transition-colors duration-200"
        ></button>
        <button
          class="w-2 h-2 rounded-full bg-[var(--color-neutral-200)] hover:bg-[var(--color-pink-300)] transition-colors duration-200"
        ></button>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from "../../../composables/useLanguage";

const { translate } = useLanguage();
</script>

<style scoped>
/* Enhanced hover effects */
.group:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 8px 30px rgba(var(--color-pink-500-rgb, 236, 72, 153), 0.08);
}

/* Smooth transitions */
.transition-colors,
.transition-opacity,
.transition-transform {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Profile avatar fallback styling */
.w-12.h-12.rounded-full {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-english);
  font-weight: 600;
}

/* Star rating enhancement */
.flex.gap-1 span {
  transition: transform 0.2s ease;
}

.flex.gap-1 span:hover {
  transform: scale(1.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .p-6 {
    padding: 1.5rem;
  }

  .text-lg {
    font-size: 1.25rem;
  }
}

@media (max-width: 640px) {
  .gap-6 {
    gap: 1rem;
  }

  .p-6 {
    padding: 1.25rem;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
</style>
