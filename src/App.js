import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries]= useState([]);
  const [info, setInfo] = useState([]);

  useEffect(()=> {
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => setCountries(data))
.catch(err => console.log(err))
  }, [])


const clickHandle = (countryInfo) => {
 const newInfo = [...info, countryInfo ];
  setInfo(newInfo);
}
  return (
    <div className="">
      <h1>All Countries: {countries.length}
      </h1>
      
      <Cart info={info}></Cart>
  <div className="country">
     {countries.map((country) => <Country country={country} clickHandle={clickHandle}> </Country>
      )}
      </div>
      
    </div>
  );
}

export default App;
