<template>
  <span class="badge badge-info mr-1" @click="setHashtag">
    #{{ hashtag }}
  </span>
</template>

<script>
import { storeBlog } from '@/store-blog/storeBlog';

export default {
  props: {
    hashtag: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    const setHashtag = () => {
      storeBlog.setHashtag(props.hashtag);
    };
    return {
      setHashtag
    };
  }
};
</script>

<style lang="scss" scoped>
  span.badge {
    font-weight: normal;
    font-size: 0.72rem;
    cursor: pointer;
    &:hover {
      background-color: lighten($info, 5%);
    }
  }
</style>
