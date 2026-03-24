import React, {use} from 'react';
import Country from "../Country/Country.jsx";

const countries = ({countriesPromise}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In The Countries: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default countries; 