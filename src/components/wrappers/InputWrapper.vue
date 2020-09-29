<template>
  <label>{{ label }}</label>
  <input :value="modelValue" v-bind="$attrs" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
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
  emits: ['update:modelValue']
};
</script>

<style>

</style>
