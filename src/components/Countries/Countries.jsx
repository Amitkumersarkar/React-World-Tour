import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

import './Countries.css';

const countries = () => {

    // load data using api
    const [countries, setCountries] = useState([]);
    // define useEffect to load data
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {/* creating countries components here */}
            {/*make it dynamic  */}

            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default countries;