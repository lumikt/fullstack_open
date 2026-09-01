const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))

morgan.token('body', req => {
  return JSON.stringify(req.body)
})

let persons = [
 {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456"
  },
 {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523"
  }, {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345"
  }, {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  }
]


app.get('/', (request, response) => {

  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {

    const nrPeople = persons.length
    const d = new Date()
    console.log(d)

    response.send(`<h1>Info page</h1> <p> Phonebook has info for ${nrPeople} people</p> <p>${d.toString()}</p>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(persons => persons.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const id = Math.floor(Math.random()*99999)
  return String(id)
}



app.post('/api/persons', (request, response) => {
  const body = request.body


  if (!body.name) {
    return response.status(400).json({ 
      error: 'name is missing' 
    })
  }
 
    if (!body.number) {
    return response.status(400).json({ 
      error: 'number is missing' 
    })
  }

  const nameExists = persons.find(person => person.name === body.name)
  if (nameExists) {
    return response.status(400).json({
        error: 'name must be unique'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})