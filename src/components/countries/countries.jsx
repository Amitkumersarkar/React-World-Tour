import { useEffect } from "react";
import { useState } from "react";

const countries = () => {
    const [Countries, setCountires] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>
            <h3>countries</h3>
        </div>
    );
};

export default countries;