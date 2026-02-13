<template>
  <section
    class="container mx-auto px-6 py-16 lg:px-12 bg-[var(--color-surface)]"
  >
    <!-- Header -->
    <div class="mb-8">
      <h2 class="text-4xl font-bold text-[var(--color-primary)] mb-4">
        All Products
      </h2>
      <p class="text-[var(--color-secondary)] max-w-2xl leading-relaxed">
        Premium skincare collection for your daily routine.
      </p>
    </div>

    <!-- Products Count and Sort -->
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0"
    >
      <p class="text-[var(--color-secondary)]">
        {{ productStore.products.length }} products
      </p>
      <div class="flex items-center gap-2">
        <label for="sort" class="text-[var(--color-secondary)]">
          Sort by:
        </label>
        <select
          id="sort"
          v-model="productStore.sortBy"
          @change="productStore.updateSort(productStore.sortBy)"
          class="border border-[var(--color-neutral-200)] rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-500)] bg-[var(--color-surface)] text-[var(--color-primary)] min-w-[160px]"
        >
          <option value="recommended">Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
    </div>

    <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
      <!-- Products Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="product in productStore.products"
          :key="product.id"
          @click="goToProductDetail(product.id)"
          class="border border-[var(--color-neutral-200)] p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-[var(--color-surface)] hover:border-[var(--color-pink-200)] rounded-lg"
        >
          <!-- Badge -->
          <div v-if="product.badge" class="mb-2">
            <span
              class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-pink-50)] text-[var(--color-pink-black)] border border-black/20"
            >
              {{ product.badge }}
            </span>
          </div>

          <!-- Product Image -->
          <div
            class="aspect-square mb-4 flex items-center justify-center bg-gradient-to-br rounded-lg overflow-hidden"
          >
            <img
              :src="getProductImageUrl(product.image)"
              :alt="product.name"
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
            />
          </div>

          <!-- Product Info -->
          <div class="space-y-2">
            <h3
              class="text-[var(--color-primary)] font-medium text-lg leading-tight group-hover:text-[var(--color-pink-500)] transition-colors"
            >
              {{ product.name }}
            </h3>
            <p class="text-[var(--color-secondary)] text-sm line-clamp-2">
              {{ product.description }}
            </p>
            <div class="flex justify-between items-center pt-2">
              <p class="text-[var(--color-primary)] font-semibold">
                ${{ product.price.toFixed(2) }}
              </p>
              <span
                class="text-xs text-[var(--color-secondary)] bg-[var(--color-cream)] px-2 py-1 rounded"
              >
                {{ product.category }}
              </span>
            </div>
          </div>

          <!-- Quick Add to Cart Button -->
          <button
            @click.stop="addToCart(product)"
            class="w-full mt-4 py-2 border border-black text-black rounded-md font-medium hover:bg-[var(--color-pink-50)] transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
          >
            {{ translate("welcome-shop") }}
          </button>
        </div>
      </div>
    </ScrollAnimation>

    <ScrollAnimation animation-type="fadeUp" duration="1" delay="0.2">
      <!-- Empty State -->
      <div v-if="productStore.products.length === 0" class="text-center py-12">
        <div class="mb-4">
          <div
            class="w-16 h-16 mx-auto rounded-full bg-[var(--color-cream)] flex items-center justify-center"
          >
            <span class="text-[var(--color-pink-500)] text-2xl">✨</span>
          </div>
        </div>
        <h3 class="text-[var(--color-primary)] text-xl font-semibold mb-2">
          No products found
        </h3>
        <p class="text-[var(--color-secondary)] max-w-md mx-auto">
          Check back soon for our latest skincare collection.
        </p>
      </div>
    </ScrollAnimation>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useProductStore } from "../../products/productStore";
import { useCartStore } from "../../carts/cartStore";
import ScrollAnimation from "../../../components/common/ScrollAnimation.vue";
import { useLanguage } from "../../../composables/useLanguage";
import { getProductImageUrl } from "../../../utils/productImages";

const productStore = useProductStore();
const cartStore = useCartStore();
const router = useRouter();
const { translate } = useLanguage();

const goToProductDetail = (productId) => {
  router.push(`/products/${productId}`);
};

const addToCart = (product) => {
  cartStore.addToCart(product);
  // Optional: Show success message
  console.log(`${product.name} added to cart`);
};
</script>

<style scoped>
/* Custom styles for better UX */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions */
.transition-all,
.transition-colors,
.transition-transform {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Select styling */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23452829' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Card hover effects */
.group:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(var(--color-pink-500-rgb, 236, 72, 153), 0.08);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  .p-6 {
    padding: 1.25rem;
  }

  .grid-cols-1 {
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .flex-col {
    align-items: stretch;
  }

  select {
    width: 100%;
  }

  .text-lg {
    font-size: 1rem;
  }

  .py-16 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

/* Optional: Add RGB values for shadow effects */
:root {
  --color-pink-500-rgb: 236, 72, 153;
}
</style>
