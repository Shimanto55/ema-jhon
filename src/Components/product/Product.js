import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    return (
        <div className="product">
            <div className="product-img">
                <img src={props.product.img} alt="opps"></img>
            </div>
            <div className="product-description">
                <h2 className="product-name">{props.product.name}</h2>
                <h4>{props.product.seller}</h4>
                <h3>${props.product.price}</h3>
                <p>stock left: {props.product.stock}</p>
                <button className="cart-btn" onClick={()=> props.handleAddproduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;