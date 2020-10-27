const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const path = require('path')
const express = require('express')
const hbs = require('hbs')



const app = express();

//Giving room for Heroku Port, first is if heroku is working, second is localhost
const port = process.env.PORT || 3000


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Make Hay',
        name: 'EMMANUEL OYEKAN'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Info',
        name: 'EMMANUEL OYEKAN',
        creator: 'Emmanuel Oyekan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is meant to be some helpful text. To reduce stress, we move.',
        title: 'Help',
        name: 'EMMANUEL OYEKAN'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    point = req.query.address
    geocode(point, (error, {latt,lonn} = {} )  =>{
        if(error){
            return res.send("ERROR: ", error)
        }
        
        forecast(latt, lonn, (error, data) => {
            if(error){
            return res.send("ERROR: ", error)
            }
        
            
            res.send({
                data,
                address: req.query.address,

            })
        })
    })
    
    /* console.log(req.query.search);
    res.send({
        address: req.query.address,
        forecast: 'It is snowing',
        location: 'Philadelphia'
    }) */
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must include a search term'
        })
    }
    
    console.log(req.query.search);
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})