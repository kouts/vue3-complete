<template>
  <div class="container">
    <div class="text-center">
      <img alt="Vue logo" src="../assets/logo.png" class="text-center">
    </div>
    <hello-world msg="Welcome to Vue.js 3 starter template" />
    <my-button
      color="white"
      background="darkslateblue"
      :disabled="false"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MyButton from '@/components/MyButton.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyButton
  }
};
</script>
