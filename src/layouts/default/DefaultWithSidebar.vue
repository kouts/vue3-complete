<template>
  <div>
    <default-nav />
    <div class="container-fluid">
      <div class="row">
        <default-sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <slot />
        </main>
      </div>
    </div>
    <default-footer />
  </div>
</template>

<script>
import DefaultNav from './DefaultNav.vue';
import DefaultSidebar from './DefaultSidebar.vue';
import DefaultFooter from './DefaultFooter.vue';

export default {
  components: {
    DefaultNav,
    DefaultSidebar,
    DefaultFooter
  }
};
</script>

<style lang="scss">
  /* Sticky footer */
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    margin-bottom: 60px; /* Margin bottom equal to footer height */
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px; /* Footer height */
    line-height: 60px; /* Vertically center the text */
    background-color: $gray-100;
    text-align: center;
  }

  /* Content */
  [role="main"] {
    padding-top: 5em; /* Space for fixed navbar */
  }
</style>
