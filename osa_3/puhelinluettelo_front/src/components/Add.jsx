const Add = ({ newName, handleNameChange, newNumber, handleNumberChange, addNumber }) => {
    
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