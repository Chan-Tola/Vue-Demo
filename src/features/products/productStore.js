import { defineStore } from "pinia";
import { ref, computed } from "vue";
import productsData from "../../data/product.json"; // Import your JSON

export const useProductStore = defineStore("products", () => {
  // 1. Get products from JSON
  const allProducts = productsData.products;

  // 2. Simple sort state
  const sortBy = ref("recommended");

  // 3. Simple computed for sorted products
  const products = computed(() => {
    // Make a copy
    const sorted = [...allProducts];

    // Sort based on selection
    if (sortBy.value === "price-low") {
      return sorted.sort((a, b) => a.price - b.price);
    }
    if (sortBy.value === "price-high") {
      return sorted.sort((a, b) => b.price - a.price);
    }
    if (sortBy.value === "name") {
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Default return
    return sorted;
  });

  // 4. Simple function to change sort
  function updateSort(newSort) {
    sortBy.value = newSort;
  }

  // Return only what's needed
  return {
    products,
    sortBy,
    updateSort,
  };
});
