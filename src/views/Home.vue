<template>
  <div class="container">
    <h1>Form</h1>
    <div class="row">
      <div class="col-sm-6">
        <form @submit.prevent="submit($event)">
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
        </form>
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

    const submit = ($event) => {
      console.log(clone(form.value));
    };

    return {
      form,
      update,
      valid,
      submit
    };
  }
};
</script>
