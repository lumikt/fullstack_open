const Search = ({ newSearch, handleSearchChange }) => {
    
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