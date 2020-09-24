<template>
  <div class="d-flex flex-column">
    <div class="mb-2">
      <button type="button" class="btn btn-sm btn-outline-secondary mr-2" @click="incrementLike(post)">
        Like
      </button>
      {{ post.likes }}
    </div>
    <div>
      <card-post-controls-hashtag
        v-for="hashtag in post.hashtags"
        :key="hashtag"
        :hashtag="hashtag"
      />
    </div>
  </div>
</template>

<script>
import { storeBlog } from '@/store-blog/storeBlog';
import CardPostControlsHashtag from '@/components/CardPostControlsHashtag.vue';

export default {
  components: {
    CardPostControlsHashtag
  },
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const incrementLike = (post) => {
      storeBlog.incrementLike(post);
    };

    return {
      incrementLike
    };
  }
};
</script>
