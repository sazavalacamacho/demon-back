// const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()


app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Rutas del Back
app.get('/', (req, res) =>{
    res.send('hola Mundo')
})

// Middleware para Vue router mode history.
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))


app.set('puerto', process.env.PORT || 3000)
app.listen(app.get('puerto'), () => {
    console.log('ejemplo del servidor puerto' + app.get('puerto'))
})