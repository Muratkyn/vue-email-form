import { createRouter, createWebHistory } from "vue-router";
import EmailComponent from "@/components/EmailComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "email",
      component: EmailComponent,
    },
  ],
});

export default router;
