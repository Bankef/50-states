    let express = require('express')
    let states_api = require('./routes/states')
    let path = require('path')

    let app = express() //creates express app

    //Deploying to Azure
    let pathToVueApp = path.join(__dirname, 'client', 'dist')
    let vueApp = express.static(pathToVueApp)
    app.use('/', vueApp)

    app.use(express.json()) // creates the new web server app

    app.use('/api', states_api) //this makes all the routes in the state api available at /api/state

    //This will handle all other request not made to the specific api and return a 404 err message
    app.use(function(req, res, next){
        res.status(404).send ('Not found')
    })

    //This sends back generic err message for when a problem is encountered on the server
    app.use(function(err, req, res, next){
        console.log(err)
        res.status(500).send('Server error')
    })

    //starts the app running
    let server = app.listen(process.env.PORT || 3000, function() {
        console.log('server running', server.address().port)
    })