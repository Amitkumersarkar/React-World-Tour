// imported country.css file
import './Country.css';
const Country = ({ country }) => {
    console.log(country);
    // destructure the country objects here
    const { name, flags } = country;
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;