<template>
  <nav
    class="fixed w-full z-50 top-0 start-0 bg-[var(--color-surface)] border-b border-[var(--color-neutral-200)]"
  >
    <div class="container mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-16">
        <!-- Logo Section -->
        <router-link
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span
            class="self-center text-xl text-[var(--color-primary)] font-semibold whitespace-nowrap hover:text-[var(--color-pink-500)] transition-colors duration-200"
          >
            TECHEY
          </span>
        </router-link>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <router-link
            v-for="navItem in navItems"
            :key="navItem.name"
            :to="navItem.path"
            :class="[
              'text-sm font-medium transition-colors duration-200 ',
              isActive(navItem.path)
                ? 'text-[#FFB7CE]'
                : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]',
            ]"
          >
            {{ navItem.name }}
          </router-link>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <!-- Language Toggle Button -->
          <button
            @click="toggleLanguage"
            type="button"
            class="flex items-center justify-center w-8 h-8 text-[var(--color-secondary)] hover:text-[var(--color-pink-500)] rounded-full transition-colors duration-200"
            :title="
              currentLanguage === 'en' ? 'Switch to Khmer' : 'Switch to English'
            "
          >
            <span class="text-sm font-medium">
              {{ currentLanguage === "en" ? "KH" : "EN" }}
            </span>
          </button>

          <!-- Shopping Cart Icon -->
          <button
            type="button"
            @click="goToCart"
            class="relative flex items-center justify-center w-8 h-8 text-[var(--color-secondary)] hover:text-[var(--color-pink-500)] transition-colors duration-200"
            title="Shopping Cart"
          >
            <Handbag class="w-5 h-5" />
            <!-- Cart Badge -->
            <span
              v-if="cartStore.cartCount > 0"
              class="absolute -top-1 -right-1 bg-[var(--color-pink-500)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartStore.cartCount }}
            </span>
          </button>

          <!-- User Profile Icon -->
          <button
            type="button"
            class="flex items-center justify-center w-8 h-8 text-[var(--color-secondary)] hover:text-[var(--color-pink-500)] transition-colors duration-200"
            title="User Profile"
          >
            <UserRound class="w-5 h-5" />
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-[var(--color-secondary)] rounded-lg md:hidden hover:text-[var(--color-pink-500)] transition-colors"
            aria-controls="navbar-sticky"
            :aria-expanded="isMobileMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger Icon -->
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <!-- Close Icon -->
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          id="navbar-sticky"
          class="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-neutral-200)]"
        >
          <div class="py-2">
            <router-link
              v-for="navItem in navItems"
              :key="navItem.name"
              :to="navItem.path"
              @click="closeMobileMenu"
              :class="[
                'block px-4 py-3 text-sm font-medium transition-colors duration-200 ',
                isActive(navItem.path)
                  ? 'text-[var(--color-pink-500)] bg-[var(--color-pink-50)]'
                  : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-100)]',
              ]"
            >
              {{ navItem.name }}
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useLanguage } from "../../composables/useLanguage";
import { useRoute, useRouter } from "vue-router";
// icons
import { UserRound } from "lucide-vue-next";
import { Handbag } from "lucide-vue-next";
import { Menu } from "lucide-vue-next";
import { X } from "lucide-vue-next";
import { useCartStore } from "../../features/carts/cartStore";

const {
  currentLanguage,
  translate,
  switchToKhmer,
  switchToEnglish,
  initLanguage,
} = useLanguage();

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();
const isMobileMenuOpen = ref(false);

// Initialize language when app starts
onMounted(() => {
  initLanguage();
});

// Navigation items
const navItems = computed(() => [
  {
    name: translate("home"),
    path: "/",
  },
  {
    name: translate("products"),
    path: "/products",
  },
  {
    name: translate("about us"),
    path: "/abouts",
  },
  {
    name: translate("FQAs"),
    path: "/faqs",
  },
  {
    name: translate("contact"),
    path: "/contacts",
  },
]);

// Toggle language
const toggleLanguage = () => {
  if (currentLanguage.value === "en") {
    switchToKhmer();
  } else {
    switchToEnglish();
  }
};

// Check if current route matches navigation item
const isActive = (path) => {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
};

const goToCart = () => router.push("/cart");

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

// Close on escape key
onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  });

  // Close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  });
});
</script>

<style scoped>
/* Clean, minimal styles */
a,
button {
  outline: none;
}

/* Smooth transitions */
.transition-all,
.transition-colors {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile menu styling */
#navbar-sticky {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Remove default button styles */
button {
  background: none;
  border: none;
  cursor: pointer;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .h-16 {
    height: 4rem;
  }

  .space-x-3 > * + * {
    margin-left: 0.75rem;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
}

/* Ensure proper spacing on desktop */
@media (min-width: 768px) {
  .space-x-8 > * + * {
    margin-left: 2rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-colors {
    transition-duration: 0.01ms !important;
  }
}

/* Focus styles for keyboard navigation */
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-pink-500);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .hover\:text-\[\:hover\]:active {
    color: var(--color-pink-500) !important;
  }

  .hover\:bg-\[\:hover\]:active {
    background-color: var(--color-neutral-100) !important;
  }
}

/* Print styles */
@media print {
  nav {
    position: relative !important;
    border-bottom: 1px solid var(--color-neutral-300) !important;
  }

  button {
    display: none !important;
  }

  .md\:hidden {
    display: none !important;
  }
}
</style>
