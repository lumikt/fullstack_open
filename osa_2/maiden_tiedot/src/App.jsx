import { useState, useEffect } from 'react'
import Search from './components/Search'
import Countries from './components/Countries'
import countryService from './services/country'


function App() {
  const [newCountryName, setNewCountryName] = useState('')
  const [countryList, setCountryList] = useState([])


  useEffect(() => {
    
    countryService
      .getAll()
      .then(response => {
        setCountryList(response.data)
      })

  },[])

  const handleNameChange = (event) => {
    setNewCountryName(event.target.value)
  }


  return (
    <>
      <h1>Hello world</h1>
      <Search countryName={newCountryName} handleNameChange={handleNameChange} />
      <Countries countryList={countryList} newCountryName={newCountryName} setNewCountryName={setNewCountryName} /> 
    </>
  )
}

export default App
