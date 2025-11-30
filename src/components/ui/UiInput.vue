<template>
  <div class="ui-input">
    <label v-if="label" class="ui-input__label">{{ label }}</label>
    <input
      class="ui-input__field"
      :type="type"
      :placeholder="placeholder"
      v-model="innerValue"
    />
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  type: { type: String, default: 'text' },
  placeholder: String
});

const emit = defineEmits(['update:modelValue']);

const innerValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});
</script>

<style scoped>
.ui-input__label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.ui-input__field {
  width: 100%;
  height: 67px;
  border-radius: 15px;
  border: 1px solid #00A3E0;
  padding: 0 20px;
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #D9D9D9;
  margin-bottom: 20px;
  background-color: transparent;
}

.ui-input__field::placeholder {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: var(--heading-letter-spacing);
  color: #A1A8B0;
}
</style>


