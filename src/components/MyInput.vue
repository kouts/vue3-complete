<template>
  <div class="input-wrapper">
    <label :for="name" class="">{{ name }}</label>
    <input
      :id="name"
      :value="value"
      :type="type"
      @input="input($event)"
    />
    <small class="text-danger">{{ error }}</small>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    rules: {
      type: Object, // required, min
      default: () => ({})
    },
    value: {
      type: String,
      default: ''
    },
    valid: {
      type: Boolean
    }
  },
  emits: ['update:value', 'update:valid'],
  setup(props, ctx) {
    const error = computed(() => {
      return validate(props.value);
    });

    const validate = (value) => {
      if (props.rules.required && !value.length) {
        return 'Required';
      }
      if (props.rules.min && value.length < props.rules.min) {
        return `A minimum of ${props.rules.min} characters is required`;
      }
    };

    const input = ($event) => {
      ctx.emit('update:value', $event.target.value);
      // eslint-disable-next-line no-unneeded-ternary
      ctx.emit('update:valid', validate($event.target.value) ? false : true);
    };

    return {
      error,
      input
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
