<template>
  <label>{{ label }}</label>
  <input
    type="text"
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <div>
    <button type="button" class="btn btn-primary btn-sm mt-2" @click="$fire('test-event', 'payload1', 'payload2')">
      Click
    </button>
  </div>
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
  emits: ['update:modelValue', 'test-event']
};
</script>
