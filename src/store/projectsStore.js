import { defineStore } from 'pinia';
import { getProjects } from '@/services/projectsService';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    items: [],
    isLoading: false
  }),
  actions: {
    async fetchProjects() {
      this.isLoading = true;
      try {
        this.items = await getProjects();
      } finally {
        this.isLoading = false;
      }
    }
  }
});


