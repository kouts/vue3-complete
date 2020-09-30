<template>
  <label>{{ label }}</label>
  <input v-model="localValue" type="text" v-bind="$attrs" />
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value)
    });
    return {
      localValue
    };
  }
};
</script>
