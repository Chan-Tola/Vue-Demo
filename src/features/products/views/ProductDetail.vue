<template>
  <section class="py-8 mt-10 md:py-12 lg:py-16 bg-[var(--color-surface)]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-12">
      <!-- Back Button - Mobile First -->
      <div class="mb-6 md:hidden">
        <router-link
          to="/products"
          class="inline-flex items-center gap-2 transition-colors font-medium"
        >
          <svg
            class="w-4 h-4 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Back to Products
        </router-link>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <!-- Left Column - Product Image -->
        <div class="flex items-center justify-center">
          <div
            class="from-[var(--color-cream)] to-[var(--color-pink-50)] rounded-2xl p-4 sm:p-8 lg:p-12 w-full max-w-2xl border border-[var(--color-cream)] shadow-lg"
          >
            <img
              :src="getProductImageUrl(product.image)"
              :alt="product.name"
              class="w-full h-auto object-contain max-h-[500px]"
            />
          </div>
        </div>

        <!-- Right Column - Product Details -->
        <div class="space-y-6 lg:space-y-8">
          <!-- Header with Back Button (Desktop) -->
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <!-- Category Badge -->
              <div v-if="product.category" class="mb-3">
                <span
                  class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-pink-50)] border border-[var(--color-primary)] text-[var(--color-primary)]"
                >
                  {{ product.category }}
                </span>
              </div>

              <!-- Product Name -->
              <h1
                class="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] leading-tight"
              >
                {{ product.name }}
              </h1>
            </div>

            <!-- Back Button (Desktop) -->
            <router-link
              to="/products"
              class="hidden md:inline-flex items-center gap-2 transition-colors font-medium whitespace-nowrap"
            >
              <svg
                class="w-4 h-4 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Back
            </router-link>
          </div>

          <!-- Price -->
          <div
            class="text-2xl sm:text-3xl font-semibold text-[var(--color-mint)]"
          >
            ${{ product.price ? product.price.toFixed(2) : "0.00" }}
          </div>

          <!-- Quantity Selector -->
          <div class="space-y-3">
            <label
              class="block text-sm font-semibold text-[var(--color-primary)]"
            >
              Quantity
            </label>
            <div class="flex items-center w-full sm:w-48">
              <button
                @click="decreaseQuantity"
                :disabled="quantity <= 1"
                :class="[
                  'flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-l-lg transition-all duration-200',
                  quantity <= 1
                    ? 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-400)] cursor-not-allowed'
                    : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-400)]',
                ]"
              >
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>

              <div class="relative flex-1">
                <input
                  v-model.number="quantity"
                  type="number"
                  min="1"
                  class="w-full h-10x sm:h-12 text-center text-[var(--color-primary)] font-medium bg-[var(--color-surface)] border-y border-[var(--color-neutral-200)] focus:outline-none focus:border-[var(--color-pink-500)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  readonly
                />
              </div>

              <button
                @click="increaseQuantity"
                class="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-r-lg bg-[var(--color-neutral-100)] text-[var(--color-neutral-400)]"
              >
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Add to Cart Button -->
          <button
            @click="addToCart"
            class="w-full bg-[var(--color-pink-50)] py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            {{ translate("welcome-shop") }}
          </button>

          <!-- Product Description -->
          <div class="pt-6 lg:pt-8">
            <h3 class="text-lg font-semibold text-[var(--color-primary)] mb-3">
              Product Details
            </h3>
            <p
              class="text-[var(--color-secondary)] leading-relaxed text-base sm:text-lg"
            >
              {{ product.description }}
            </p>
          </div>

          <!-- Additional Info -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[var(--color-neutral-200)]"
          >
            <div class="space-y-2">
              <h4 class="text-sm font-semibold text-[var(--color-primary)]">
                Key Benefits
              </h4>
              <ul class="space-y-1">
                <li
                  class="flex items-start gap-2 text-[var(--color-secondary)] text-sm"
                >
                  <span class="text-[var(--color-pink-500)] mt-1">•</span>
                  Improves skin texture
                </li>
                <li
                  class="flex items-start gap-2 text-[var(--color-secondary)] text-sm"
                >
                  <span class="text-[var(--color-pink-500)] mt-1">•</span>
                  Hydrates and nourishes
                </li>
                <li
                  class="flex items-start gap-2 text-[var(--color-secondary)] text-sm"
                >
                  <span class="text-[var(--color-pink-500)] mt-1">•</span>
                  Suitable for all skin types
                </li>
              </ul>
            </div>
            <div class="space-y-2">
              <h4 class="text-sm font-semibold text-[var(--color-primary)]">
                Ingredients
              </h4>
              <ul class="space-y-1">
                <li
                  class="flex items-start gap-2 text-[var(--color-secondary)] text-sm"
                >
                  <span class="text-[var(--color-pink-500)] mt-1">•</span>
                  Natural botanicals
                </li>
                <li
                  class="flex items-start gap-2 text-[var(--color-secondary)] text-sm"
                >
                  <span class="text-[var(--color-pink-500)] mt-1">•</span>
                  Vitamin-rich extracts
                </li>
                <li
                  class="flex items-start gap-2 text-[var(--color-secondary)] text-sm"
                >
                  <span class="text-[var(--color-pink-500)] mt-1">•</span>
                  Cruelty-free formula
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../../products/productStore";
import { useCartStore } from "../../carts/cartStore";
import { useLanguage } from "../../../composables/useLanguage";
import { getProductImageUrl } from "../../../utils/productImages";

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();
const quantity = ref(1);
const { translate } = useLanguage();

// Get product from store by ID
const product = computed(() => {
  const productId = parseInt(route.params.id);
  return productStore.products.find((p) => p.id === productId) || {};
});

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  if (product.value && product.value.id) {
    cartStore.addToCart(product.value, quantity.value);
    console.log(`Added ${quantity.value} ${product.value.name} to cart`);

    // Optional: Reset quantity after adding
    quantity.value = 1;
  }
};
</script>

<style scoped>
/* Custom styles for better UX */

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Smooth transitions */
.transition-all,
.transition-colors {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .max-h-\[500px\] {
    max-height: 300px;
  }

  .p-4 {
    padding: 1rem;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@media (max-width: 768px) {
  .grid-cols-1 {
    gap: 2rem;
  }

  .space-y-6 {
    gap: 1.5rem;
  }

  .rounded-2xl {
    border-radius: 1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .gap-8 {
    gap: 2rem;
  }

  .max-w-2xl {
    max-width: 100%;
  }

  .p-8 {
    padding: 2rem;
  }
}

/* Enhance hover effects */
button:hover:not(:disabled) {
  transform: translateY(-1px);
}

/* Gradient optimization */
.bg-gradient-to-r {
  background-size: 200% 100%;
  background-position: left center;
  transition: background-position 0.3s ease;
}

button:hover .bg-gradient-to-r {
  background-position: right center;
}

/* Image container shadow */
.shadow-lg {
  box-shadow: 0 10px 25px rgba(var(--color-primary-rgb, 69, 40, 41), 0.1);
}
</style>
