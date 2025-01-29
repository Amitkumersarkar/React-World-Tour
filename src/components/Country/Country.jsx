const Country = ({ country }) => {
    // console.log(country);
    // destructure the country objects here
    const { name } = country;
    return (
        <div>
            <h3>Name: {name.common}</h3>
        </div>
    );
};

export default Country;