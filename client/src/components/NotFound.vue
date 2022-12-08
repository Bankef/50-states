<template>

    <div>

        <h2>Not Found</h2>

      <p>Sorry, that's not a valid link.</p>

      <p>Would you like to
        <router-link v-bind:to="{ name: 'StateList' }">go to the homepage?</router-link>
      </p>
    </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>