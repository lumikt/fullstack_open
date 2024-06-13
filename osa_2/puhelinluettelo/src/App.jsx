import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  
  const personsToShow = (newSearch ===''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
  )

  const Person = ({ person }) => (
    <li>{person.name} {person.number}</li>
  )

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

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    console.log(newSearch)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input 
            value={newSearch}
            onChange={handleSearchChange}
            />
        </div>
        </form>
      <h2>Add a new number</h2>
      <form>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button onClick={addNumber} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { personsToShow.map( person =>
        <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App