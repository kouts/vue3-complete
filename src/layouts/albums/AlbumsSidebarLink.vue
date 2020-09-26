<template>
  <li>
    <a :class="['nav-link', active && 'active']" href="#" @click.prevent="click">
      {{ title }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      default: null
    },
    id: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, ctx) {
    const click = () => {
      ctx.emit('click', props.id);
    };
    return {
      click
    };
  }
};
</script>

<style lang="scss" scoped>
  .sidebar .nav-link {
    font-weight: 500;
    color: $body-color;
    border-bottom: 1px solid $gray-400;
    &:hover {
      background-color: lighten($gray-100, 1%);
      color: darken($body-color, 20%);
    }
  }
  .sidebar .nav-link.active {
    color: $primary;
  }
</style>
