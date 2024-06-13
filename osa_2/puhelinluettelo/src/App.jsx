import { useState } from 'react'
import Search from './components/Search'
import Add from './components/Add'
import Numbers from './components/Numbers'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} setNewSearch={setNewSearch} />
      <Add newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} />
      <Numbers persons={persons} newSearch={newSearch} />
    </div>
  )

}

export default App