<template>
  <div class="container">
    <h1>Form</h1>
    <div class="row">
      <div class="col-sm-6">
        <form @submit.prevent="submit($event)">
          <my-input
            v-model:value="form.username"
            v-model:valid="form.usernameValid"
            name="Username"
            :rules="{ required: true, min: 5}"
            type="text"
          />
          <my-input
            v-model:value="form.password"
            v-model:valid="form.passwordValid"
            name="Password"
            :rules="{ required: true, min: 10}"
            type="password"
          />
          <my-button
            color="white"
            background="darkslateblue"
            :disabled="!valid"
          />
        </form>
      </div>
      <div class="col-sm-6">
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
import { clone } from '@/common/utils';

export default {
  name: 'Home',
  components: {
    MyButton,
    MyInput
  },
  setup() {
    const form = ref({
      username: '',
      usernameValid: false,
      password: '',
      passwordValid: false
    });

    const valid = computed(() => {
      return form.value.usernameValid && form.value.passwordValid;
    });

    const submit = ($event) => {
      console.log(clone(form.value));
    };

    return {
      form,
      valid,
      submit
    };
  }
};
</script>
