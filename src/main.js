import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // view router
import "./assets/main.css"; // style tailwind css file
import { registerPlugins } from "./plugins";
import "flowbite";
// Import Splide CSS globally
import "@splidejs/vue-splide/css";
const app = createApp(App);

// Register all plugins (Pinia)
registerPlugins(app);
app.use(router);
app.mount("#app");
