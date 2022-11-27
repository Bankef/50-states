<template>
  <div>
    <p>There are {{ states.length}} states and the District of Columbia</p>
    <p>You have visited {{ totalVisited }} {{units}}</p>

    <p id="all-visited-message" v-if="areAllVisited">Whoa! You have visited all the states and the District of Columbia!</p>
  </div>
</template>

<script>
  export default {
    name: "StateSummary.vue",
    props: {
      states: Array
    },
    //Calculates the total number of states checked by user as visited and return a count
    computed: {
      totalVisited() {
        let visitedCount = 0
        this.states.forEach( state => { //for each state checked, 1 will be added to the count
          if (state.visited) {
            visitedCount++
          }
        })
        return visitedCount
      },
      //Handles the singular and plural show of state a user has visited
      units() {
        if (this.totalVisited == 1) {
          return 'state'
        } else {
          return 'states'
        }
      },
      areAllVisited() {
        return this.totalVisited === this.states.length
      }
    }
}
</script>

<style scoped>
  #all-visited-message{
    font-weight: 600;
    color: purple;
  }

</style>