import React from 'react';
import { v4 as uuidv4 } from "uuid";

import { imageEncode, manageCart } from './../helpers/helpers';


const ProductsMobile = ({ products, setAction, setUi }) => {

    return (
        products.map((product, index) =>
            <div className="products"
                key={uuidv4()} >

                <div
                    key={uuidv4()}
                    className="info">
                    <h1 key={uuidv4()}>{product.name} </h1>
                    <img
                        alt={product.name}
                        key={uuidv4()}
                        className={`main-image ${product.name === "Earth xKg" && "mini-tierra"}`}
                        src={imageEncode(product.img_main.data)}
                    // style={{
                    //     background: `url("${pictures[ind]}")no-repeat center`,
                    //     backgroundSize: '90%'
                    // }}
                    >
                    </img>
                    <h2 key={uuidv4()}>{`${product.price}€`}</h2>
                    <p key={uuidv4()} className="description"> {product.description}</p>

                    <div key={uuidv4()} className="product-counter">
                        <button 
                        key={uuidv4()} 
                        className="rest cart" 
                        onClick={ () =>  manageCart(setAction, products, index, "decrease")}
                        >-</button>
                        <p key={uuidv4()}>{product.quantity}</p>
                        <button 
                        key={uuidv4()} 
                        className="add cart" 
                        onClick={ () =>  manageCart(setAction, products, index, "increase")}
                        >+</button>
                    </div>
                    
                    <div 
                    key={uuidv4()} 
                    className="button comprar"
                    onClick={() => setUi('cart')}
                    >comprar</div>
                </div>

            </div>
        )
    )
}
export default ProductsMobile;