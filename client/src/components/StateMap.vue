<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>

    <p v-else>You have not visited this state yet</p>

    <!--Leaflet map component added here and v-bind to the center of the map
    and zoom level for each state -->
    <div id="map-container" v-if="dataReady">
      <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        ></l-tile-layer>
      </l-map>
    </div>

  </div>
</template>

<script>

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

  export default {
    name: "StateMap.vue",
    components: {
      LMap, LTileLayer
    },
    data() {
      return {
        state: {},
        dataReady: false,
        mapReady: false
      }
    },
    mounted() {
      this.state.name = this.$route.params.state
      this.fetchStateData()
    },
    methods: {
      fetchStateData() {
        this.$stateService.getOneState(this.state.name).then(state => {
          this.state = state
          this.dataReady = true
        }).catch(err => {
          //404 not found
          if (err.response && err.response.status === 404) {
            //404 not found page will be my suggestion. That will prompt the user to check for spelling err
            //this.state.name = '?'
            //catches the error or an unknown state and redirect user to the NotFound page
            this.$router.push( { name: 'NotFound' })
          } else {
            //500 server error
            alert('Sorry, error fetching data about this state') //generic message for user
            console.log(err) // message for developer
          }
        })
      },
      onMapReady() { //Checks to see if map is ready at API call, so it loads together with data
        this.mapReady = true
      },
      // Checks if both data and map are ready on API call
      setMapView() {
        if (this.mapReady && this.dataReady) {
          // Make sure map shows correct part of the world at zoom level
          this.$refs.map.leafletObject.setView(this,mapCenter, this.zoom)
        }
      }
    },
    computed: {
      mapCenter() {
        return [this.state.lat, this.state.lon]
      }
    }
  }

</script>

<style scoped>
  #map-container {
    height: 30rem;
  }

</style>