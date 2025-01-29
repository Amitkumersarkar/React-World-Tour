import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

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

            {
                countries.map(country => <Country></Country>)
            }

        </div>
    );
};

export default countries;