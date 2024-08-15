const Search = ({ countryName, handleNameChange }) => {

    const handleClick = () => {
        console.log('I was clicked')
    }
    return (
        <>
        <p>Search for a country here</p>
         name: <input value = {countryName} onChange={handleNameChange}/>
         <button onClick={handleClick}>Search</button>
        </>
    )
}

export default Search