import React, {use, useState} from 'react';
import Country from "../Country/Country.jsx";
import './Countries.css'

const countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In The Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country =>
                    <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default countries; 