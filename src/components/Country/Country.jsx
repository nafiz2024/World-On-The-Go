import React from 'react';

const Country = ({country}) => {
    return (
        <div>
            <img src={country.flags.flags.png}/>
            <h3>Name: {country.name.common}</h3>
        </div>
    );
};

export default Country;