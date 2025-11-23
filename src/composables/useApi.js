import { ref } from 'vue';

export function useApi(requestFn) {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const execute = async (...args) => {
    isLoading.value = true;
    error.value = null;
    try {
      data.value = await requestFn(...args);
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    isLoading,
    error,
    execute
  };
}


