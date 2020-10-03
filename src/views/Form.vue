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
        <div class="row mb-4">
          <div class="col">
            <h3>{{ messageToBeResetted }}</h3>
          </div>
        </div>
        <hr />
        <div class="row mb-4">
          <div class="col">
            <h3>Input wrapper</h3>
            <input-wrapper
              ref="someRef"
              v-model="wrapperInputText"
              label="Input wrapper label"
              placeholder="Test placeholder"
              class="form-control"
              @keydown="wrapperKeydown"
              @test-event="logTestEvent"
            />
            <small>{{ wrapperInputText }}</small>
          </div>
        </div>
        <hr />
        <div class="row mb-4">
          <div class="col">
            <h3>Input wrapper with computed</h3>
            <input-wrapper-computed
              v-model="wrapperInputComputedText"
              label="Input wrapper label"
              placeholder="Test placeholder"
              class="form-control"
            />
            <small>{{ wrapperInputComputedText }}</small>
          </div>
        </div>
        <!--
        <div class="row mb-4">
          <div class="col pt-1" style="border: 1px dashed #555">
            <input-wrapper-computed-plain
              v-model="wrapperInputComputedText"
              label="Label"
              placeholder=""
              class="form-control mb-4"
            />
            <small>{{ wrapperInputComputedText }}</small>
          </div>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, computed, onMounted } from 'vue';
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
import { clone } from '@/common/utils';
import { useMousePosition } from '@/composables/useMousePosition';
import InputWrapper from '@/components/wrappers/InputWrapper.vue';
import InputWrapperComputed from '@/components/wrappers/InputWrapperComputed.vue';
import InputWrapperComputedPlain from '@/components/wrappers/InputWrapperComputedPlain.vue';
import { useMessageReset } from '@/composables/useMessageReset';

export default {
  components: {
    MyButton,
    MyInput,
    InputWrapper,
    InputWrapperComputed,
    InputWrapperComputedPlain
  },
  setup(props, ctx) {
    const logTestEvent = (param1, param2) => {
      console.log('logTestEvent: ', param1, param2);
    };

    const someRef = ref(null);
    onMounted(function() {
      someRef.value.$once('test-event', function(payload1, payload2) {
        console.log('once: ', payload1, payload2);
      });
    });

    const wrapperInputText = ref('Test text...');
    const wrapperInputComputedText = ref('Test text 2');
    const wrapperKeydown = (e) => {
      console.log('wrapperKeydown', e.target.value);
    };

    const messageToBeResetted = ref('This message will reset after 5 seconds');
    useMessageReset(messageToBeResetted);

    const data = reactive({
      firstName: 'Giannis',
      lastName: 'Koutsaftakis'
    });

    const { x, y } = useMousePosition();

    const form = ref({
      username: '',
      usernameValid: false,
      password: '',
      passwordValid: false,
      testText: ''
    });

    const valid = computed(() => {
      return form.value.usernameValid && form.value.passwordValid;
    });

    const submit = ($event) => {
      console.log(clone(form.value));
    };

    return {
      logTestEvent,
      form,
      valid,
      submit,
      ...toRefs(data),
      x,
      y,
      wrapperInputText,
      wrapperKeydown,
      wrapperInputComputedText,
      messageToBeResetted,
      someRef
    };
  }
};
</script>
