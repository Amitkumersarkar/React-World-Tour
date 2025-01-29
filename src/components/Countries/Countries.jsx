import { useEffect } from "react";
import { useState } from "react";

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
        </div>
    );
};

export default countries;