import { computed } from 'vue';

export function useModelWrapper(props, emit) {
  return computed({
    get: () => {
      // console.log('getting');
      return props.modelValue;
    },
    set: (value) => {
      // console.log('setting...');
      emit('update:modelValue', value);
    }
  });
};
