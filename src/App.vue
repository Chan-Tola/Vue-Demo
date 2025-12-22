<template>
  <div
    :class="currentLanguage === 'kh' ? 'font-khmer' : 'font-english'"
    class="min-h-screen"
  >
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useLanguage } from "./composables/useLanguage";

const { currentLanguage, initLanguage } = useLanguage();

// Ensure language is loaded from localStorage on startup
onMounted(() => {
  initLanguage();
});
</script>
