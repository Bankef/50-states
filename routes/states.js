let express = require('express')
let States = require('../models').States

let router = express.Router()

//fetch all the states
//Here is our 1st route, asking router to get all the states, ordered by name and returns an array of states
router.get('/states', function(req, res, next) {
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
        // this deals with all error and pass it to a handler we will create
        .catch( err => next (err) )
})

    //Get all information about one state. such as state/California or state/Iowa
    router.get('/state/:name', function(req, res, name) {
        let stateName = req.params.name
        States.findOne( {where: {name: stateName}})
            .then( state => {
                if (state) {
                    return res.json(state)
                } else { // catches a request to a state that doesn't exist
                    return res.status(404).send( 'State not found')
                }
            })
            .catch(err => next(err) )
    })

    //patch route to update a state - visited or not
    // makes a request to the database for a state and set the value for visited into true or false for each state
    router.patch('/states/:name', function(req, res, next){
        let stateName = req.params.name
        let stateVisited = req.body.visited

        States.update( { visited: stateVisited }, { where: { name: stateName }})
            .then( rowsUpdated => {
                let numberOfRowsUpdated = rowsUpdated[0]
                if (numberOfRowsUpdated == 1) {
                    return res.send('ok')
                }
                //where the state requested is not in the database, a 404 error will be sent
                return res.status(404).send('State not found')
            })

            //the general error handler catches all other kind of errors including server issues
            .catch( err => next(err) )
    })

        //Create an API route to get all the visited states; mypage
    router.get('/visited', function(req,res,next){
        States.findAll({  where: {visited: true} } ).then( states => {
            return res.json(states)
        })
            // this deals with all error and pass it to a handler we will create
            .catch( err => next (err) )
    })



    module.exports = router