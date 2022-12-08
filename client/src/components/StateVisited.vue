<template>
  <div>
    <h2>You have visited these states</h2>
    <p v-for="state in states">{{state.name}}</p>
  </div>
</template>

<script>
import StateList from "@/components/StateDetail";

export default {
  name: "MyPage",
  components: {
    StateList,
  },
  data() {
    return {
      states: [],
      visited: true
    }
  },
  mounted() {
    this.getVisitedStates ()
  },
  methods: {
    getVisitedStates() {
      //make a request to the getVisitedStates function in the server
      this.$stateService.getStateVisited().then( states => {
        this.states = states
      })
          .catch( err => {
            alert('sorry, can\'t fetch state list')  //message to user
            console.error(err)
          })
      //this.$stateService(this.state.name, this.visited)
    }
  }
}
</script>

<style scoped>

</style>