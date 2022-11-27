<template>

  <page-header></page-header>

  <router-view></router-view>

  <page-footer></page-footer>


</template>

<script>

//imports page header and footer into our app
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import StateList from './components/StateList';

export default {
  name: 'App',
  components: {
    StateList,
    PageHeader, //List page header here as a child component
    PageFooter,

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
