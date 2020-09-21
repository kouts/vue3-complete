<template>
  <div class="container">
    <div class="text-center">
      <img alt="Vue logo" src="../assets/logo.png" class="text-center">
    </div>
    <hello-world msg="Welcome to Vue.js 3 starter template" />
    <my-input
      name="Username"
      :rules="{ required: true, min: 5}"
      :value="form.username.value"
      type="text"
      @update="update"
    />
    <my-input
      name="Password"
      :rules="{ required: true, min: 10}"
      :value="form.password.value"
      type="password"
      @update="update"
    />
    <my-button
      color="white"
      background="darkslateblue"
      :disabled="!valid"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
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
    const form = ref({
      username: {
        value: '',
        valid: false
      },
      password: {
        value: '',
        valid: false
      }
    });

    const update = (payload) => {
      form.value[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid
      };
    };

    const valid = computed(() => {
      return form.value.username.valid && form.value.password.valid;
    });

    return {
      form,
      update,
      valid
    };
  }
};
</script>
