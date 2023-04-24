import express from 'express'
import bodyParser from 'body-parser'
const app = express()

// configure bodyParser to handle form data
app.use(bodyParser.urlencoded({ extended: true }))

// define a POST endpoint that accepts form data
app.post('/form', (req, res) => {
  const formData = req.body // get the form data from the request body
  // do something with the form data
  console.log(formData)
  // send a response to the client
  res.send(formData)
})

app.get('/form', (req, res) => {
  res.send('working')
})

// start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
