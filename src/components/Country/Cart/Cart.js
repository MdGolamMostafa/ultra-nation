import React from 'react';
import Country from '../Country';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }

    const totalPopulation = cart.reduce((sum,Country) =>sum + Country.population,0)
    return (
        <div>
            <h3>This is cart:{cart.length}</h3>
    <p>Total population:{totalPopulation}</p>
    </div>
    );
};

export default Cart;