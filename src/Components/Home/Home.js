import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Countries from '../Countries/Countries';
const Home = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(data => setCountry(data));
    }, []);
    return (
        <div>
            {
                country.map(country => <Countries country={country} key={country.name}/>)
            }
            
        </div>
    );
};

export default Home;