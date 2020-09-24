<template>
  <div class="container">
    <h1 class="mb-4">Numbers</h1>
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
import { useNumbers } from '@/composables/useNumbers';

export default {
  setup() {
    const { count, increment, a, b, total, history } = useNumbers();
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
