const Person = ({ person,deletePerson }) => {
    const handleClick = () => {
        deletePerson(person.id)
    }

    return (
    <li>{person.name} {person.number}<button onClick={handleClick}>Delete</button></li>
)}

const Numbers = ({ persons, newSearch, deletePerson }) => {
    const personsToShow = (newSearch ===''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
      )
    
    return(
        <>
            <h2>Numbers</h2>
            <ul>
                { personsToShow.map( person =>
                <Person key={person.name} person={person} deletePerson={deletePerson} />
                )}
            </ul>
        </>
    )
}

export default Numbers