<template>
  <label>{{ label }}</label>
  <input v-model="internalValue" v-bind="$attrs" />
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
  setup(props, ctx) {
    const internalValue = computed({
      get: () => props.modelValue,
      set: (value) => ctx.emit('update:modelValue', value)
    });
    return {
      internalValue
    };
  }
};
</script>

<style>

</style>
