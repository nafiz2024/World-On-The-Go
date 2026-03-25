import React, {useState} from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country)
    }

    return (
        <div className={'country'}>
            <img src={country.flags.flags.png}/>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "- Big Country" : "- Small Country"}</p>
            <button onClick={handleVisited} className={'btn'}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;