const Search = ({ newSearch, setNewSearch }) => {
    
    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
        console.log(newSearch)
    }

    return (
    <form>
    <div>
        name: <input 
        value={newSearch}
        onChange={handleSearchChange}
      />
    </div>
    </form>
    )
}

export default Search