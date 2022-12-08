import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
    setVisited(stateName, visited) {

        //request to individual states
        let requestData = { visited: visited}
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    },
    // Make a request to the route for each state
    getOneState(stateName){
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    },
    // Make a request to get visited states
    getStateVisited() {
        return axios.get('/api/visited/' ). then(response => {
            return response.data
        })
    }
}