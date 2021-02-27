import React from 'react';
import './Cart.css';

const Cart = (props) => {
let totalPopulation =0;
const info = props.info;
info.map(inf => 
    totalPopulation = inf.population + totalPopulation  
)
    return (
        <div>
        <h2>Selected: {info.length}</h2>
        <h1>Total Population: {totalPopulation}</h1>
        </div>
    )
}

export default Cart;