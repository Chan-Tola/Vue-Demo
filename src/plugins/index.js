import { setupPinia } from "./pinia";

export function registerPlugins(app) {
  // Setup Pinia
  const pinia = setupPinia();
  app.use(pinia);

  return { pinia };
}
