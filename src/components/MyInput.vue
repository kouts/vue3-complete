<template>
  <div class="input-wrapper">
    <label :for="name" class="">{{ name }}</label>
    <input
      :id="name"
      v-model="value"
      type="text"
    />
    <small class="text-danger">{{ error }}</small>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      type: Object, // required, min
      default: () => ({})
    }
    // disabled: {
    //   type: Boolean,
    //   default: false
    // }
  },
  setup(props) {
    const value = ref('');

    const error = computed(() => {
      if (props.rules.required && !value.value.length) {
        return 'Required';
      }
      if (props.rules.min && value.value.length < props.rules.min) {
        return `A minimum of ${props.rules.min} characters is required`;
      }
    });

    return {
      value,
      error
    };
  }
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
input {
  background: none;
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}
</style>
