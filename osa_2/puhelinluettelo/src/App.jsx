import { useState,useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Add from './components/Add'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
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
    let existingName = newName
    setNewName('')
    setNewNumber('')
    
    return alert(`${existingName} is already in your phonebook`)
    }

  const personObject ={
    name: newName,
    number: newNumber
  }
  console.log('I come here')
  setPersons(persons.concat(personObject))
  setNewName('')
  setNewNumber('')
}

const handleNameChange =(event) => {
  setNewName(event.target.value)
}

const handleNumberChange =(event) => {
  setNewNumber(event.target.value)
}


  
  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Add newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addNumber={addNumber} />
      <Numbers persons={persons} newSearch={newSearch} />
    </div>
  )

}

export default App