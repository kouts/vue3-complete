<template>
  <div class="d-flex flex-column">
    <div class="mb-2">
      <button type="button" class="btn btn-sm btn-outline-secondary">
        Likes: {{ post.likes }}
      </button>
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
  }
};
</script>
