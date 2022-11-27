<template>
  <div id="block-header">
  <h1 id="title">Have you visited every state? </h1>
  </div>
</template>

<script>
  export default {
    name: "PageHeader.vue"
}
</script>

<style scoped>
  #block-header {
    padding: 2rem 2rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    background-color: sandybrown;
    background-image: url('~@/assets/map_header.jpg');
    background-position: center;
    background-size: cover;
  }

  #title {
    font-weight: 500;
    color: darkred;
  }
</style>