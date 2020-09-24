<template>
  <div class="container">
    <h1>Home</h1>
    <div class="row mb-4">
      <div class="col-sm-12">
        <button type="button" class="btn btn-primary" @click="increment">
          {{ count }}
        </button>
        <button type="button" class="btn btn-primary ml-2" @click="a++">
          {{ a }}
        </button>
        <button type="button" class="btn btn-primary ml-2" @click="b++">
          {{ b }}
        </button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm-6">
        Total: {{ total }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div v-for="item in history" :key="item">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
  setup() {
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
  }
};
</script>
