import { computed } from "vue";
import { useLanguageStore } from "../store/useLanguageStore";

export const useLanguage = () => {
  const languageStore = useLanguageStore();

  const translate = (key) => {
    return languageStore.translate(key);
  };
  const reactiveTranslate = computed(
    () => (key) => languageStore.translate(key)
  );

  return {
    // Current language
    currentLanguage: computed(() => languageStore.currentLanguage),

    // Translation functions
    translate,
    reactiveTranslate,

    // Language switching
    switchLanguage: languageStore.switchLanguage,
    switchToEnglish: () => languageStore.switchLanguage("en"),
    switchToKhmer: () => languageStore.switchLanguage("kh"),

    // Font and classes
    fontClass: computed(() => languageStore.fontClass),
    isEnglish: computed(() => languageStore.currentLanguage === "en"),
    isKhmer: computed(() => languageStore.currentLanguage === "kh"),

    // Available languages
    availableLanguages: computed(() => languageStore.availableLanguages),

    // Initialize
    initLanguage: languageStore.initLanguage,
  };
};
