<template>
  <div>
    {{ post }}
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>

</style>
