// eslint-disable-next-line no-unused-vars
import { ref, reactive, computed, watch, watchEffect } from 'vue';

export function useNumbers() {
  const count = ref(0);
  const a = ref(0);
  const b = ref(0);
  const history = ref([]);

  const increment = () => {
    count.value += 1;
  };

  const total = computed(() => count.value + a.value + b.value);

  watch([a, b], ([newA, newB], [oldA, oldB]) => {
    if (newA !== oldA) {
      history.value.push(`newA changed from ${oldA} to ${newA}`);
    }
    if (newB !== oldB) {
      history.value.push(`newB changed from ${oldB} to ${newB}`);
    }
    // console.log('watcher fired');
    // console.log(oldA, newA);
  });

  // watch(count, (newVal, oldVal) => {
  //   console.log(oldVal);
  //   console.log(newVal);
  // }, {
  //   immediate: true
  // });

  // watchEffect(() => {
  //   console.log(a.value);
  // });

  return {
    count,
    increment,
    a,
    b,
    total,
    history
  };
};
