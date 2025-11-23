import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/Home/HomePage.vue';


const routes = [
  { path: '/', name: 'home', component: () => import('../pages/Home/HomePage.vue') },
  { path: '/about', name: 'about', component: () => import('../pages/AboutPage.vue')},
  { path: '/services', name: 'services', component: () => import('../pages/ServicesPage.vue') },
  { path: '/projects', name: 'projects', component: () => import('../pages/ProjectsPage.vue') },
  { path: '/careers', name: 'careers', component: () => import('../pages/CareersPage.vue') },
  { path: '/blog', name: 'blog', component: () => import('../pages/BlogPage.vue') },
  { path: '/contacts', name: 'contacts', component: () => import('../pages/ContactsPage.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../pages/NotFoundPage.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
