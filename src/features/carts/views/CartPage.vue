<template>
  <div class="min-h-screen mt-[50px] bg-white py-6 md:py-8 lg:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
        <!-- My Cart Section -->
        <div class="lg:col-span-2">
          <h1 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">My Cart</h1>

          <!-- Cart Items Section -->
          <div class="rounded-lg p-4 md:p-6 bg-white mb-6">
            <!-- Section Header -->
            <div class="border-b border-black pb-3 mb-4">
              <h2 class="text-lg font-medium">Cart Items</h2>
            </div>

            <!-- Cart Items List -->
            <div class="space-y-4">
              <!-- Dynamic Cart Items -->
              <div
                v-for="item in cartStore.cartItems"
                :key="item.id"
                class="flex flex-col sm:flex-row items-start gap-3 md:gap-4 p-3 md:p-4 border border-gray-200 rounded-lg hover:border-black transition-colors"
              >
                <!-- Product Image -->
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border border-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center p-2"
                >
                  <img
                    :src="getProductImageUrl(item.image)"
                    :alt="item.name"
                    class="w-full h-full object-contain"
                  />
                </div>

                <!-- Product Info and Controls -->
                <div class="flex-1 w-full">
                  <!-- Product Name and Price -->
                  <div class="mb-2 sm:mb-1">
                    <h3 class="text-sm sm:text-base font-medium line-clamp-2">
                      {{ item.name }}
                    </h3>
                    <p class="text-xs sm:text-sm text-[var(--color-mint)] mt-1">
                      ${{ item.price.toFixed(2) }}
                    </p>
                  </div>

                  <!-- Quantity Controls and Actions -->
                  <div
                    class="flex flex-wrap items-center justify-between gap-2 sm:gap-3"
                  >
                    <!-- Quantity Controls -->
                    <div
                      class="flex items-center border border-black rounded overflow-hidden"
                    >
                      <button
                        @click="decrementQuantity(item.id)"
                        :disabled="item.quantity <= 1"
                        :class="[
                          'px-2 sm:px-3 py-1 transition-colors text-sm ',
                          item.quantity <= 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-black hover:bg-gray-50',
                        ]"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span
                        class="px-2 sm:px-4 py-1 border-x border-black text-sm bg-white font-medium"
                      >
                        {{ item.quantity }}
                      </span>
                      <button
                        @click="incrementQuantity(item.id)"
                        class="px-2 sm:px-3 py-1 bg-white text-black hover:bg-gray-50 transition-colors text-sm"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <!-- Item Total and Remove -->
                    <div class="flex items-center gap-2 sm:gap-3">
                      <!-- Item Total -->
                      <div class="text-right">
                        <p
                          class="font-medium text-sm sm:text-base text-[var(--color-mint)]"
                        >
                          ${{ (item.price * item.quantity).toFixed(2) }}
                        </p>
                      </div>

                      <!-- Remove Button -->
                      <button
                        @click="removeItem(item.id)"
                        class="p-1 sm:p-2 text-gray-500 hover:rounded-full hover:text-black hover:bg-gray-100 rounded transition-colors"
                        aria-label="Remove item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-4 h-4 sm:w-5 sm:h-5"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empty Cart Message -->
              <div
                v-if="cartStore.cartItems.length === 0"
                class="text-center py-8 md:py-12"
              >
                <div class="mb-4">
                  <span class="text-2xl">🛒</span>
                </div>
                <p class="text-gray-500 text-lg mb-4">Your cart is empty</p>
              </div>
            </div>
          </div>

          <!-- Promo Code and Note Section -->
          <div class="rounded-lg p-4 md:p-6 bg-white">
            <div class="space-y-4">
              <button
                class="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors group w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-4 h-4 group-hover:scale-110 transition-transform"
                >
                  <path
                    d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                  />
                </svg>
                <span class="text-xs sm:text-sm">Enter a promo code</span>
              </button>

              <button
                class="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors group w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-4 h-4 group-hover:scale-110 transition-transform"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span class="text-xs sm:text-sm">Add a note</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Order Summary Section -->
        <div class="lg:col-span-1">
          <div
            class="border border-black rounded-lg p-4 md:p-6 bg-white sticky top-24 self-start"
          >
            <!-- Section Header -->
            <div class="border-b border-black pb-3 mb-4">
              <h2 class="text-lg font-medium">Order Summary</h2>
            </div>

            <div class="space-y-4">
              <!-- Subtotal -->
              <div class="flex justify-between text-sm md:text-base">
                <span class="text-gray-500">Subtotal</span>
                <span class="font-medium text-[var(--color-mint)]"
                  >${{ cartStore.subtotal.toFixed(2) }}</span
                >
              </div>

              <!-- Delivery -->
              <div class="flex justify-between text-sm md:text-base">
                <span class="text-gray-500">Delivery</span>
                <span class="font-medium">-</span>
              </div>

              <!-- Tax -->
              <div class="flex justify-between text-sm md:text-base">
                <span class="text-gray-500">Tax</span>
                <span class="font-medium">-</span>
              </div>

              <!-- Total -->
              <div
                class="flex justify-between text-base md:text-xl font-bold pt-3 md:pt-4 border-t border-black"
              >
                <span>Total</span>
                <span class="text-[var(--color-mint)]"
                  >${{ cartStore.subtotal.toFixed(2) }}</span
                >
              </div>

              <!-- Checkout Button -->
              <button
                @click="checkout"
                :disabled="cartStore.cartItems.length === 0"
                :class="[
                  'w-full py-3 md:py-4 transition-all duration-300 text-sm md:text-base rounded-lg mt-4 ',
                  cartStore.cartItems.length === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'border border-black text-black hover:bg-[var(--color-pink-50)] hover:text-white hover:scale-[1.02] active:scale-[0.98]',
                ]"
              >
                Checkout
              </button>

              <!-- Secure Checkout -->
              <div
                class="flex items-center justify-center gap-2 text-xs md:text-sm pt-2 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-3 h-3 md:w-4 md:h-4"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Secure Checkout</span>
              </div>

              <!-- Continue Shopping Link -->
              <div class="pt-3 md:pt-4 border-t border-gray-200">
                <router-link
                  to="/products"
                  class="block text-center border border-black py-3 rounded-lg hover:bg-[var(--color-pink-50)] hover:text-white transition-colors text-sm"
                >
                  Continue Shopping
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../../carts/cartStore";
import { getProductImageUrl } from "../../../utils/productImages";

const cartStore = useCartStore();

const incrementQuantity = (productId) => {
  const item = cartStore.cartItems.find((item) => item.id === productId);
  if (item) {
    cartStore.updateQuantity(productId, item.quantity + 1);
  }
};

const decrementQuantity = (productId) => {
  const item = cartStore.cartItems.find((item) => item.id === productId);
  if (item && item.quantity > 1) {
    cartStore.updateQuantity(productId, item.quantity - 1);
  } else if (item && item.quantity === 1) {
    cartStore.removeFromCart(productId);
  }
};

const removeItem = (productId) => {
  cartStore.removeFromCart(productId);
};

const checkout = () => {
  if (cartStore.cartItems.length > 0) {
    console.log("Proceeding to checkout...");
    alert(
      `Proceeding to checkout with $${cartStore.subtotal.toFixed(2)} total`
    );
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-all,
.transition-colors {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 640px) {
  .mt-\[50px\] {
    margin-top: 3rem;
  }
}

@media (max-width: 768px) {
  .sticky {
    position: relative;
    top: 0;
  }
}

@media (min-width: 1025px) {
  .lg\:sticky {
    position: sticky;
    top: 6rem;
  }
}
</style>
