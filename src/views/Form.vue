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
        <div class="row mb-4">
          <div class="col-sm-6">
            {{ firstName }}
            <button type="button" class="btn btn-primary ml-2" @click="firstName === 'Giannis' ? firstName = 'George' : firstName = 'Giannis'">
              Toggle name
            </button>
          </div>
          <div class="col-sm-6">
            <h3>Mouse position</h3>
            {{ x }} - {{ y }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, computed } from 'vue';
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
import { clone } from '@/common/utils';
import { useMousePosition } from '@/composables/useMousePosition';

export default {
  name: 'Home',
  components: {
    MyButton,
    MyInput
  },
  setup() {
    const data = reactive({
      firstName: 'Giannis',
      lastName: 'Koutsaftakis'
    });

    const { x, y } = useMousePosition();

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
      submit,
      ...toRefs(data),
      x,
      y
    };
  }
};
</script>
