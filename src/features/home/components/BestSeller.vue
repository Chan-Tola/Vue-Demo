<template>
  <section class="py-20 border border-black">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-12">
        <h2 class="text-4xl font-light mb-3 text-[#02CCFE] tracking-tight">
          {{ translate("bestSeller") }}
        </h2>
        <p class="text-sm opacity-60">{{ translate("hffur") }}</p>
      </div>

      <!-- Category Tabs -->
      <div class="border-b mb-12">
        <div class="flex gap-8 overflow-x-auto pb-1 scrollbar-hide">
          <button
            v-for="category in categories"
            :key="category"
            @click="setActiveCategory(category)"
            :class="[
              'pb-4 px-2 text-p text-sm transition-colors whitespace-nowrap',
              activeCategory === category
                ? 'opacity-100 text-[#02CCFE] border-b'
                : 'opacity-40 hover:opacity-60',
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Products Container with Horizontal Scroll -->
      <div class="relative">
        <!-- Scroll Container -->
        <div
          class="overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible"
        >
          <div
            class="flex lg:grid lg:grid-cols-3 gap-8 lg:gap-12 min-w-min lg:min-w-0"
          >
            <div
              v-for="product in topProducts"
              :key="product.id"
              class="cursor-pointer flex-shrink-0 w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-full"
              @click="goToProductDetail(product.id)"
            >
              <!-- Product Image -->
              <div class="mb-4 aspect-square overflow-hidden">
                <img
                  :src="`/src/assets/images/products/${product.image}`"
                  :alt="product.name"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Product Info -->
              <div class="space-y-4">
                <h3 class="text-lg">
                  {{ product.name }}
                </h3>
                <p class="text-sm opacity-60 line-clamp-2 leading-relaxed">
                  {{ product.description }}
                </p>

                <!-- Price and Button -->
                <div class="flex items-center justify-between pt-4">
                  <div class="text-lg font-medium">
                    ${{ product.price.toFixed(2) }}
                  </div>
                  <button
                    @click.stop="addToCart(product)"
                    class="border px-6 py-2 text-sm hover:bg-[#02CCFE] hover:text-white transition-all duration-300 rounded-lg border-black"
                  >
                    {{ translate("addtocd") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Optional: Scroll indicators for mobile/tablet -->
        <div class="lg:hidden flex items-center justify-center gap-2 mt-8">
          <div
            v-for="(product, index) in topProducts"
            :key="product.id"
            class="w-2 h-2 rounded-full bg-gray-300"
            :class="{ 'bg-gray-800': activeSlide === index }"
          ></div>
        </div>
      </div>

      <!-- View All -->
      <div class="mt-12 pt-6 border-t">
        <button @click="goToAllProducts" class="text-sm underline">
          View all {{ productStore.products.length }} products
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../../products/productStore";
import { useCartStore } from "../../carts/cartStore";
import { useLanguage } from "../../../composables/useLanguage";

const router = useRouter();
const productStore = useProductStore();
const cartStore = useCartStore();

const activeCategory = ref("Popular");
const activeSlide = ref(0); // For mobile indicators
const categories = ["Popular", "Serums", "Skincare", "Makeups", "Toner"];
const { translate } = useLanguage();

// Get top 3 products
const topProducts = computed(() => {
  let filtered = [...productStore.products];

  if (activeCategory.value !== "Popular") {
    filtered = filtered.filter(
      (product) =>
        product.category.toLowerCase() === activeCategory.value.toLowerCase()
    );
  }

  return filtered.slice(0, 3);
});

const setActiveCategory = (category) => {
  activeCategory.value = category;
};

const goToProductDetail = (productId) => {
  router.push(`/products/${productId}`);
};

const goToAllProducts = () => {
  router.push("/products");
};

const addToCart = (product) => {
  cartStore.addToCart(product);
};

// Optional: Handle scroll position for indicators
let scrollContainer;
const handleScroll = () => {
  if (!scrollContainer) return;
  const scrollLeft = scrollContainer.scrollLeft;
  const containerWidth = scrollContainer.clientWidth;
  const productWidth = scrollContainer.children[0].children[0].offsetWidth + 32; // width + gap
  const slideIndex = Math.round(scrollLeft / productWidth);
  activeSlide.value = Math.min(slideIndex, topProducts.value.length - 1);
};

onMounted(() => {
  scrollContainer = document.querySelector(".overflow-x-auto");
  if (scrollContainer) {
    scrollContainer.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (scrollContainer) {
    scrollContainer.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Mobile scroll snapping */
@media (max-width: 1023px) {
  .overflow-x-auto {
    scroll-snap-type: x mandatory;
  }

  .flex-shrink-0 {
    scroll-snap-align: center;
  }

  /* Gradient fade edges */
  .-mx-4 {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 20px,
      black calc(100% - 20px),
      transparent
    );
  }
}

/* Responsive widths for different devices */
/* 
  Mobile (default): w-[85vw] - shows mostly one product
  Small tablet (sm): w-[65vw] - shows partial second product
  Tablet (md): w-[45vw] - shows two products partially
  Desktop (lg): w-full - normal grid layout
*/
</style>
