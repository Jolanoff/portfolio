import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import HomePage from './page/HomePage.vue'
import ContactMe from './components/ContactMe.vue'
const routes = [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/ContactMe",
      name: "Contact",
      component: ContactMe,
    }, 
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
createApp(App)
.use(router)
.mount('#app')
