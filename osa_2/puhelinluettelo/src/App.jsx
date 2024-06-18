import { useState,useEffect } from 'react'
import Search from './components/Search'
import Add from './components/Add'
import Numbers from './components/Numbers'
import personService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    console.log(newSearch)
}

const addNumber = (event) =>{
  event.preventDefault()
  console.log('I got clicked')

  const nameExists =  persons.some(person => person.name === newName)
  
  if (nameExists) {
    console.log('It exists')
    const person = persons.find(person => person.name === newName)

    if (confirm(`${person.name} is already in your phonebook, would you like to replace the old number?`)) {
      const changedPerson = {...person, number: newNumber}
      
      personService
        .update(changedPerson)
        .then(response =>{
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : response.data))
        })
        .catch(error => {
          setErrorMessage(`${changedPerson.name} was already deleted from your phonebook.`)
          setPersons((persons.filter(person => person.id !== changedPerson.id)))

          setTimeout(() => {
            setErrorMessage(null)
          },3000)
        })
    }
    setNewName('')
    setNewNumber('')
    return
  }
  
  const personObject ={
    name: newName,
    number: newNumber,
    id: (persons.length+1).toString()
  }

  console.log('I come here')
  personService
    .create(personObject)
    .then(response => {
      console.log(response)
      setPersons(persons.concat(response.data))
    })
  setMessage(`${newName} added to phonebook`)
  setNewName('')
  setNewNumber('')
  setTimeout(()=> {
    setMessage(null)
  }, 3000)
}

const handleNameChange =(event) => {
  setNewName(event.target.value)
}

const handleNumberChange =(event) => {
  setNewNumber(event.target.value)
}

const deletePerson = (id) => {
  //console.log('delete me, im note',id)
  const deletedPerson = persons.filter(person => person.id === id)  
  personService
    .deletePerson(id)
    .then(setPersons(persons.filter(person => person.id !== id)))
  setMessage(`${deletedPerson[0].name} was sucessfully removed from your phonebook.`)
  setTimeout(() =>{
    setMessage(null)
  },3000)
}
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Error message={errorMessage} />
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Add newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addNumber={addNumber} />
      <Numbers persons={persons} newSearch={newSearch} deletePerson={deletePerson} />
    </div>
  )

}

export default App