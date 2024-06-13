const Person = ({ person }) => (
    <li>{person.name} {person.number}</li>
  )

const Numbers = ({ persons, newSearch }) => {
    const personsToShow = (newSearch ===''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
      )
    
    return(
        <>
            <h2>Numbers</h2>
            <ul>
                { personsToShow.map( person =>
                <Person key={person.name} person={person} />
                )}
            </ul>
        </>
    )
}

export default Numbers