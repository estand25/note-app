const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const noteRouter = require('./routes/note-router')
const userRouter = require('./routes/user-router')

const app = express()
const apiPost = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/api', noteRouter)
app.use('/api', userRouter)

app.listen(apiPost, () => console.log(`Server running on part ${apiPost}`))

//https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66