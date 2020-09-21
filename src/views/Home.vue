<template>
  <div class="container">
    <div class="text-center">
      <img alt="Vue logo" src="../assets/logo.png" class="text-center">
    </div>
    <hello-world msg="Welcome to Vue.js 3 starter template" />
    <my-input 
      name="Username"
    />
    <my-button
      color="white"
      background="darkslateblue"
      :disabled="!valid"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyButton,
    MyInput
  },
  setup() {
    const valid = ref(true);
    return {
      valid
    };
  }
};
</script>
