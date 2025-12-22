<template>
  <section class="py-16 mt-7">
    <div class="container mx-auto px-4 h-[600px] max-w-2xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl mb-2">FAQ</h2>
        <p class="opacity-50">Common questions</p>
      </div>

      <div class="space-y-1">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b">
          <button
            @click="toggleFaq(index)"
            class="w-full py-5 flex justify-between items-center text-left hover:opacity-80 transition-opacity"
          >
            <span class="font-medium">{{ faq.question }}</span>
            <span
              class="text-lg transition-transform duration-300"
              :class="{
                'rotate-45': openIndex === index,
                'rotate-0': openIndex !== index,
              }"
            >
              +
            </span>
          </button>

          <transition
            name="faq"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
          >
            <div v-show="openIndex === index" class="overflow-hidden">
              <div class="pb-5 opacity-70">
                {{ faq.answer }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const faqs = ref([
  { question: "Shipping time?", answer: "3-5 business days." },
  { question: "Return policy?", answer: "30 days for unused items." },
  { question: "Cruelty-free?", answer: "Yes, all products." },
  { question: "Product storage?", answer: "Cool, dry place." },
  { question: "Multiple serums?", answer: "Yes, thin to thick." },
]);

// Custom transition methods for smooth animation
const enter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";

  requestAnimationFrame(() => {
    el.style.transition = "height 0.3s ease, opacity 0.3s ease";
    el.style.height = el.scrollHeight + "px";
    el.style.opacity = "1";
  });
};

const afterEnter = (el) => {
  el.style.height = "auto";
};

const leave = (el) => {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";

  requestAnimationFrame(() => {
    el.style.transition = "height 0.3s ease, opacity 0.3s ease";
    el.style.height = "0";
    el.style.opacity = "0";
  });
};
</script>

<style scoped>
/* Custom transition classes for smoother animations */
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
