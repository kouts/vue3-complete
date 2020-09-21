<template>
  <button
    :style="{ background, color }"
    :disabled="disabled"
  >
    Button
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
  button {
    background: none;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      filter:brightness(125%);
    }
    &:disabled {
      opacity: 0.5;
      &:hover {
        filter:brightness(100%);
        cursor: default;
      }
    }
  }
</style>
