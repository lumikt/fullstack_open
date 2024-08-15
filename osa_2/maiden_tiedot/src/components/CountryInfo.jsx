const Language = ({ language }) => {
    return (
    <li>{language}</li>
    )
}

const CountryInfo = ({ country }) => {
    const languages = Object.values(country.languages)

    return (
        <>
            <h2>{country.name.common}</h2>
            <p>The capital of {country.name.common} is {country.capital}.</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                {languages.map(language =>
                    <Language key={language} language={language} />
                )}
            </ul>
            <img src={country.flags.png} />
        </>
    )
}

export default CountryInfo