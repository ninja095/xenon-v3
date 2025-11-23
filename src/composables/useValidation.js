import { ref } from 'vue';

export function useValidation() {
  const errors = ref({});

  const required = (value, field) => {
    if (!value || !String(value).trim()) {
      errors.value[field] = 'Поле обязательно для заполнения';
      return false;
    }
    delete errors.value[field];
    return true;
  };

  return {
    errors,
    required
  };
}


