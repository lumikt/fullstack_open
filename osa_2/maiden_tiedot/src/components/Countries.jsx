import CountryInfo from "./CountryInfo"
import Weather from "./Weather"

const Country = ({ country, setNewCountryName }) => {
    


    const handleClick = () => {
        setNewCountryName(country.name.common)
        console.log('They want to see a spec country')
    }
    return (
        <>
            <li>{country.name.common} <button onClick={handleClick}>Show</button></li>
        </>
    )
}


const Countries = ({ countryList,newCountryName,setNewCountryName }) => {
    console.log(newCountryName)

    const countryFilter = countryList.filter(country => country.name.common.toLowerCase().includes(newCountryName.toLowerCase()))
    const countriesToShow = (newCountryName === ''
        ? false
        : countryFilter
    )


    if ( (countriesToShow === false) || (countriesToShow.length > 10 )) {
        return(
            <>
                <h2>Too many countries to show, please refine your search.</h2>
            </>
        )
    }



    if ( countriesToShow.length === 1) {
        let country = countriesToShow[0]
        console.log('This is CL',countriesToShow)
        return (
            <>
                <CountryInfo country={country} />
                <Weather city={country.capital[0]} />
            </>
        )
    }
    return (
        <>
            <h2>Countries that match your search</h2>
            <ul>
                {countriesToShow.map(country =>
                    <Country key={country.name.common} country={country} setNewCountryName={setNewCountryName}/>
                )}
            </ul>
        </>
    )
}

export default Countries