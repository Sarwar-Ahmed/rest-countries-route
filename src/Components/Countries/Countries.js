import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Countries = (props) => {
    // console.log(props.country);
    const {name, flag, region} = props.country;
    // // console.log(name);
    const history = useHistory();
    const countryDetails = (name) => {
        history.push(`/about/${name}`);
    }

    return (
        <div className="text-center float-left w-25 bg-light p-2">
            <img src={flag} alt="" className="w-25"/>
            <h2>{name}</h2>
            <p>{region}</p>
            <Link to={`/about/${name}`}>Show More Details</Link>
            <button className="btn btn-info mt-3 mr-auto d-block" onClick={() => countryDetails(name)}>More About {name}>></button>
        </div>
    );
};

export default Countries;