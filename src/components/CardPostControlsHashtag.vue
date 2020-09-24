<template>
  <span class="badge badge-info mr-1">
    #{{ hashtag }}
  </span>
</template>

<script>
export default {
  props: {
    hashtag: {
      type: String,
      default: ''
    }
  }
};
</script>

<style>
  span.badge {
    font-weight: normal;
    font-size: 0.72rem;
  }
</style>
