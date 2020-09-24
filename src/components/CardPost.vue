<template>
  <div class="card">
    <div class="card-header">
      <slot name="title" />
    </div>
    <div class="card-body">
      <slot name="content" />
    </div>
    <div class="card-footer">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .card {
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
      box-shadow: $box-shadow;
    }
  }
</style>
