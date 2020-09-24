<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand" @click="collapseNavbar">Vue 3 Complete</router-link>
      <button
        :class="['navbar-toggler', !navbarExpanded && 'collapsed']"
        type="button"
        aria-controls="navbarDefault"
        :aria-expanded="navbarExpanded"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarDefault" :class="['collapse navbar-collapse', navbarExpanded && 'show']">
        <ul class="navbar-nav mr-auto">
          <li v-for="route in routes" :key="route.name" class="nav-item">
            <template v-if="route.meta.showInNavbar">
              <router-link :to="route.path" class="nav-link" @click="collapseNavbar">{{ route.name }}</router-link>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const routes = router.getRoutes();
    const navbarExpanded = ref(false);
    const toggleNavbar = () => {
      navbarExpanded.value = !navbarExpanded.value;
    };
    const collapseNavbar = () => {
      navbarExpanded.value = false;
    };
    return {
      navbarExpanded,
      toggleNavbar,
      collapseNavbar,
      routes
    };
  }
};
</script>
