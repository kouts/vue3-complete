<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Link 1
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link 2
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link 3
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link 4
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link 5
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link 6
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 60px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }
  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 60px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }
  .sidebar .nav-link {
    font-weight: 500;
    color: $body-color;
  }
  .sidebar .nav-link.active {
    color: $primary;
  }
  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
</style>
