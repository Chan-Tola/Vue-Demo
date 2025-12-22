import { createRouter, createWebHistory } from "vue-router";
import {
  HomePage,
  ProductPage,
  AboutPage,
  ContactPage,
  FAQsPage,
  ProductDetail,
  CartPage
} from "../features/index"; // feature file
import DefaultLayout from "../components/layout/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", name: "HomePage", component: HomePage },
      { path: "/products", name: "ProductPage", component: ProductPage },
      {
        path: "/products/:id",
        name: "ProductDetail",
        component: ProductDetail,
      },
      { path: "/abouts", name: "AboutPage", component: AboutPage },
      { path: "/contacts", name: "ContactPage", component: ContactPage },
      { path: "/faqs", name: "FAQsPage", component: FAQsPage },
      { path: "/cart", name: "CartPage", component: CartPage },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
