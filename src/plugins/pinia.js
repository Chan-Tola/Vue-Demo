// src/plugins/pinia.js
import { createPinia } from "pinia"

export function setupPinia() {
  const pinia = createPinia()
  
  // You can add Pinia plugins here if needed
  // For now, just return the basic pinia instance
  return pinia
}