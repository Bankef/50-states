    import { createRouter, createWebHashHistory } from 'vue-router'
    import StateList from "@/components/StateList"; // import state list component
    import AboutSite from "@/components/AboutSite";
    import StateMap from "@/components/StateMap";

 export default  createRouter({ //this is where we define our router
     history: createWebHashHistory(),
     routes: [
         {
             path: '/', //sets the home page of the app
             name: 'StateList',
             component: StateList
         },
         {
             path: '/about', //sets the about page
             name: 'AboutSite',
             component: AboutSite
         },
         {
             path: '/map/:state',
             name: 'StateMap',
             component: StateMap
         }
     ]
 })