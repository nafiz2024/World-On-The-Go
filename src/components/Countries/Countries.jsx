import React, {use} from 'react';
import Country from "../Country/Country.jsx";
import './Countries.css'

const countries = ({countriesPromise}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In The Countries: {countries.length}</h1>
            <div className="countries">
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default countries; 