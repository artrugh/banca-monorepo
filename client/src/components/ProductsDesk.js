import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import { imageEncode, manageCart } from './../helpers/helpers';

const ProductsDesk = ({ products, setAction, setUi}) => {

    const [index, setIndex] = useState(0);

    return (
        <div className="products"  >
            <div className="info">
                <h1>{products[index].name} </h1>
                <h2>{`${products[index].price}€`}</h2>
                <p className="description"> {products[index].description}</p>
                <div className="product-counter">
                    <button className="rest cart"
                        onClick={() => manageCart(setAction, products, index, "decrease")}
                    >-</button>
                    <p>{products[index].quantity}</p>
                    <button className="add cart"
                        onClick={() => manageCart(setAction, products, index, "increase")}
                    >+</button>
                </div>
                <div
                    className="button comprar"
                    onClick={() => setUi('cart')}
                >comprar</div>
            </div>
            <div className="img-displayer">
                <main>
                    <div id="main-image-container">
                        <img
                            alt={products[index].name}
                            className="main-image"
                            key={uuidv4()}
                            src={imageEncode(products[index].img_main.data)}
                        // src={require(`./../assets/products/${products[index].img}.png`)}
                        >
                        </img>
                    </div>

                    <div
                        key={uuidv4()}
                        className="img-selector">
                        {products.map((product, idx) =>
                            <div
                                className="mini-container"
                                key={uuidv4()}
                                onClick={() => setIndex(idx)}
                            >
                                <img
                                    alt={products[idx].name}
                                    className="mini-img"
                                    key={uuidv4()}
                                    src={imageEncode(product.img_mini.data)}
                                // src={require(`./../assets/products/${product.img}mini.png`)}
                                />
                                <div
                                    className="spot"
                                    key={uuidv4()}
                                    style={{
                                        backgroundColor: idx === index ? "#CEEA2D" : null
                                    }}
                                ></div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProductsDesk;