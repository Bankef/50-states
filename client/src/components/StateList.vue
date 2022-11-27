<template>

  <div>
    <state-summary v-bind:states="states"></state-summary>

  </div>

  <div class="state-list-container">

    <div class="state-container" v-for="state in states" v-bind:key="state.name">
      <state-detail
          v-bind:state="state"
          v-on:update-visited="updateVisited"
      ></state-detail>
    </div>

  </div>
</template>

<script>

  import StateDetail from "@/components/StateDetail";
  import StateSummary from "@/components/StateSummary";

  export default {
    name: "StateList.vue",
    components: {
      StateDetail,
      StateSummary
    },
    data() {
      return {
        states: []
      }
    },
    mounted() {
        this.fetchAllStates()
    },
    methods: {
      fetchAllStates() { //Gets all the states
        this.$stateService.getAllStates().then( states => {
          this.states = states
        })
            .catch( err => {
              alert('sorry, can\'t fetch state list')  //message to user
              console.error(err)
            })
      },
      //make a request to get the setVisited function in stateService.js
      updateVisited(stateName, visited) {
        this.$stateService.setVisited(stateName, visited).then( () => {
            this.fetchAllStates()
        })
            .catch( err => {
              alert('sorry, can\'t update state') //message to user
              console.error(err)
            })
      }
    }
}
</script>

<style scoped>

.state-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.state-container {
  margin: 1rem;
}

</style>