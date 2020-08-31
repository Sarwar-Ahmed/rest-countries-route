import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Countries from '../Countries/Countries';
import { useParams } from 'react-router-dom';

const Home = () => {
    let {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
console.log(country)
    return (
        <div>
            <Countries />
        </div>
    );
};

export default Home;