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

<script>
export default {
  name: 'UiInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  computed: {
    innerValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      }
    }
  }
};
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
  padding: 12px 16px;
  border-radius: var(--btn-radius);
  border: 1px solid rgba(233, 236, 239, 0.2);
  background-color: transparent;
  color: var(--color-text-secondary);
}

.ui-input__field::placeholder {
  color: rgba(233, 236, 239, 0.6);
}
</style>


