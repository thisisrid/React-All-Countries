import React from 'react';
import './Country.css';


const Country = (props) => {
const {name, population, flag, region, capital, languages} = props.country;
    return (
        <div className="country-container">
           <h2> Country Name: {name} </h2>
           <img src={flag} alt="FLAG"/>
           <h3>Population: {population}</h3>
           <h3>Region: {region}</h3>
           <h3>Capital: {capital}</h3>
           <ul> Language[s]: 
               {languages.map(lang => <li> {lang.name}</li>)
                   }
           </ul>
           <button onClick={()=> props.clickHandle(props.country)}>Click For Details</button>
        </div>
    );
};

export default Country;