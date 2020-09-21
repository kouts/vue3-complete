<template>
  <div>
    <label :for="name" class="">{{ name }}</label>
    <input :id="name" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    // background: {
    //   type: String,
    //   default: ''
    // },
    // disabled: {
    //   type: Boolean,
    //   default: false
    // }
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
}
input {
  background: none;
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}
</style>
