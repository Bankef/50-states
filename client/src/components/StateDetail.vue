<template>

  <div class="state-info">

    <span class="state-name">{{ state.name }}</span>

    <div>
      <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
    </div>

    <div>
      <!--the router link is linked to an individual state, Iowa for instance
      the params auto generate a link to each state -->
      <router-link v-bind:to="{name: 'StateMap', params: {state: state.name} }">
        <img class="map_icon" src="@/assets/map_icon.png">
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: "StateDetail",
    emits: ['update-visited'],
    props: {
      state: Object //DO NOT modify props
    },
    data() {
      return {
        visited: this.state.visited //ok to modify data
      }
    },
    methods: {
      visitedChanged() {
        //emits the state visited to the vue app, which is v-model to the checkbox above
        //and changes when the checkbox is checked or unchecked
        this.$emit('update-visited', this.state.name, this.visited)
      }
    }
}
</script>

<style scoped>

  .state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px green solid;
    border-radius: .3rem;
    background-color: #c4c9c4;
  }

  .visit-state{
    margin: 1rem;
    text-align: center;
  }

  .map_icon {
    width: 2rem;
    height: 2rem;
  }
</style>