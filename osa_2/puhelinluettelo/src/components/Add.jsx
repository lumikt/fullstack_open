const Add = ({ newName, setNewName, newNumber,setNewNumber, persons, setPersons }) => {

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
    <>
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
    </>
    )
}


export default Add