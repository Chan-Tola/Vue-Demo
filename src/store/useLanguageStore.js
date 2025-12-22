import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Import JSON files
import enTranslations from "../locales/en.json";
import khTranslations from "../locales/kh.json";

export const useLanguageStore = defineStore("language", () => {
  // cn : 'en' or 'kh'
  const currentLanguage = ref("en");

  // Load translations from JSON files

  const translations = ref({
    en: enTranslations,
    kh: khTranslations,
  });

  // Get current translation
  const translate = (key) => {
    return translations.value[currentLanguage.value][key] || key;
  };

  //Switch Language
  const switchLanguage = (lang) => {
    currentLanguage.value = lang;
    // save to localStorage
    localStorage.setItem("language", lang);

    // Update HTML lang att
    document.documentElement.lang = lang;
  };

  // Initialize language from localStorage
  const initLanguage = () => {
    const savedLang = localStorage.getItem("language");
    // condition
    if (savedLang === "en" || savedLang === "kh") {
      switchLanguage(savedLang);
    }
  };

  // provide font class
  const fontClass = computed(() => {
    return currentLanguage.value === "kh" ? "font-khmer" : "font-english";
  });

  // Computed property for HTML lang attribute
  const htmlLang = computed(() => currentLanguage.value);

  // Add getter for available languages
  const availableLanguages = computed(() => [
    { code: "en", name: "English", nativeName: "English" },
    { code: "kh", name: "Khmer", nativeName: "ខ្មែរ" },
  ]);

  return {
    currentLanguage,
    translations,
    translate,
    switchLanguage,
    initLanguage,
    fontClass,
    htmlLang,
    availableLanguages,
  };
});
