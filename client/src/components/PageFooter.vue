<template>
  <div>

    <div id=" navigation-links">

      <span class="nav-link">
        <router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
      </span>

      <span class="nav-link">
        <router-link v-bind:to="{ name: 'AboutSite' }">About this site</router-link>
     </span>

      <span class="nav-link">
        <router-link to="/mypage">All visited states</router-link>
      </span>

    </div>

    <p>Header image by
      <a href="https://unsplash.com/photos/3OiYMgDKJ6k">@ Dariusz Sankowski on Unsplash </a>
    </p>

    <p><a target="_blank" href="https://icons8.com/icon/30563/map-marker">Map Marker</a>
      icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
  </div>
</template>

<script>
  export default {
    name: "PageFooter.vue"
}
</script>

<style scoped>

  .nav-link {
    margin: 1rem;
  }
</style>