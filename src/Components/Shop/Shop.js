import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const Shop = () => {
    const first10= fakeData.slice(0,10);
    const [products, setProducts]=  useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddproduct= (product) =>{
        console.log(product);
        const newCart= [...cart,product];
        setCart(newCart);
    }

    return (
        <div className= "shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        handleAddproduct = {handleAddproduct}
                        product= {product}></Product> )
                }
                

            </div>
            <div className="cart-container">
                <h3>Ordered Items</h3>
                <h4>Order Summery: {cart.length}</h4>
                
            </div>
            
        </div>
    );
};

export default Shop;