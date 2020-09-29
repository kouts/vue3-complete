<template>
  <label>{{ label }}</label>
  <input v-model="internalValue" v-bind="$attrs" />
</template>

<script>
import { useModelWrapper } from '@/composables/useModelWrapper';

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
    const internalValue = useModelWrapper(props, ctx.emit);
    return {
      internalValue
    };
  }
};
</script>

<style>

</style>
