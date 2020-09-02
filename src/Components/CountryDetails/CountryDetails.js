import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CountryDetails = () => {
    const {countryName} = useParams();

    const [countryDetails, setCountryDetails] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountryDetails(data[0]));
    }, []);
    console.log(countryDetails);
    const {name, area, capital, flag, population, region, timezones} = countryDetails;
    return (
        <div className="text-center bg-dark text-white">
            <img className="w-50" src={flag} alt=""/>
            <h1 className="pb-3">{name}</h1>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Timezones: {timezones}</p>

        </div>
    );
};

export default CountryDetails;