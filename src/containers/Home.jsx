import React from 'react'
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => (
    <div id="app">
        <Products products={initialState.products} />
    </div> 
)

export default Home
