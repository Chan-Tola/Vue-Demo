<template>
  <section
    class="border border-black py-16 lg:py-24 bg-[var(--color-surface)] relative overflow-hidden"
  >
    <!-- Decorative Stars -->
    <div class="absolute top-12 right-12 lg:top-16 lg:right-24 z-20">
      <svg
        class="w-12 h-12 lg:w-16 lg:h-16 text-[var(--color-pink-500)]"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M32 0 L36 28 L64 32 L36 36 L32 64 L28 36 L0 32 L28 28 Z" />
      </svg>
    </div>
    <div class="absolute bottom-12 left-12 lg:bottom-16 lg:left-24 z-20">
      <svg
        class="w-8 h-8 lg:w-12 lg:h-12 text-[var(--color-pink-500)]"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <path d="M32 0 L36 28 L64 32 L36 36 L32 64 L28 36 L0 32 L28 28 Z" />
      </svg>
    </div>

    <!-- Additional decorative elements -->
    <div class="absolute top-24 left-8 lg:top-32 lg:left-20 opacity-10">
      <div
        class="w-24 h-24 rounded-full bg-[var(--color-peach)] blur-2xl"
      ></div>
    </div>
    <div class="absolute bottom-24 right-8 lg:bottom-32 lg:right-20 opacity-10">
      <div
        class="w-16 h-16 rounded-full bg-[var(--color-pink-500)] blur-2xl"
      ></div>
    </div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div
        class="bg-gradient-to-br from-[var(--color-cream)] to-[var(--color-pink-50)] rounded-3xl overflow-hidden grid lg:grid-cols-2 items-center shadow-xl border border-[var(--color-cream)]"
      >
        <!-- Left Side - Image -->
        <div class="h-full relative overflow-hidden">
          <img
            :src="girlWithProduct"
            alt="Woman applying skincare"
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <!-- Image overlay gradient -->
          <div class="absolute inset-0"></div>
        </div>

        <!-- Right Side - Newsletter Form -->
        <div class="p-8 lg:p-16 space-y-6 lg:space-y-8">
          <div class="space-y-3 lg:space-y-4">
            <h2
              class="text-3xl lg:text-4xl font-bold text-[var(--color-primary)]"
            >
              Stay Glowing with
              <span class="text-[var(--color-pink-500)]">ILLUME</span>
            </h2>
            <p
              class="text-[var(--color-secondary)] text-sm lg:text-base max-w-lg"
            >
              Sign up for exclusive offers, skincare tips, and the latest
              updates.
            </p>
          </div>

          <form
            @submit.prevent="handleSubscribe"
            class="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <div class="flex-1 relative">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                required
                class="w-full px-6 py-4 rounded-lg border border-[var(--color-neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-500)] focus:border-transparent text-[var(--color-primary)] placeholder-[var(--color-secondary)]/60 bg-[var(--color-surface)] shadow-sm transition-all duration-200 focus:shadow-md"
              />
              <div
                class="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none transition-all duration-200"
                :class="{ 'border-[var(--color-pink-500)]': email }"
              ></div>
            </div>
            <button
              type="submit"
              class="bg-gradient-to-r from-[var(--color-pink-500)] to-[var(--color-pink-600)] hover:from-[var(--color-pink-600)] hover:to-[var(--color-pink-500)] text-[var(--color-surface)] px-8 py-4 rounded-lg font-medium transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg active:scale-95"
            >
              Subscribe
            </button>
          </form>

          <p v-if="submitted" class="text-sm text-green-600 animate-fade-in">
            Thank you for subscribing! Check your email for confirmation.
          </p>

          <!-- Privacy note -->
          <p class="text-xs text-[var(--color-secondary)]/60 mt-2">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import girlWithProduct from "../../../assets/images/products/360_F_431342717_rMANZFt7jkUucFIZX4hMOGjHgZcIcJ0J-removebg-preview.png";

const email = ref("");
const submitted = ref(false);

const handleSubscribe = () => {
  if (email.value) {
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email.value);
    submitted.value = true;
    email.value = "";
    setTimeout(() => {
      submitted.value = false;
    }, 3000);
  }
};
</script>

<style scoped>
/* Custom animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

/* Enhanced hover effects */
img:hover {
  transform: scale(1.05);
}

/* Input focus effects */
input:focus {
  box-shadow: 0 0 0 3px rgba(var(--color-pink-500-rgb, 236, 72, 153), 0.1);
}

/* Button hover effects */
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(var(--color-pink-500-rgb, 236, 72, 153), 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .p-8 {
    padding: 2rem;
  }

  .text-3xl {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

@media (max-width: 640px) {
  .flex-col {
    gap: 1rem;
  }

  button {
    width: 100%;
  }

  .p-8 {
    padding: 1.5rem;
  }
}

/* Optional: Add RGB values for shadow effects */
:root {
  --color-pink-500-rgb: 236, 72, 153;
}

/* Gradient overlay for image */
.bg-gradient-to-r {
  background: linear-gradient(90deg, var(--color-cream) 0%, transparent 100%);
}
</style>
