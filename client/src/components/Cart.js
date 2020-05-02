import React, { useState } from 'react';

//dependencies
import { v4 as uuidv4 } from "uuid";

//helpers
import { imageEncode, manageCart, setOrder } from './../helpers/helpers';

import { useWindowDimensions } from './../helpers/customHooks';

import { newOrder } from './../fetchHelpers/actions';

import Sale from './Sale'

export default function Cart({ setUi, products, setAction, isLogged, order, setShowHome }) {

    const { width } = useWindowDimensions();

    const [displaySale, setDisplaySale] = useState(false);
    const accSubtotal = products.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)

    const image = `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!--  --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' style='enable-background:new 0 0 100 100;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E%3C/style%3E%3Cg id='XMLID_3_'%3E%3Cline id='XMLID_1_' class='st0' x1='0' y1='0' x2='100' y2='100' stroke= '%23FFFFFF' stroke-width = '7' stroke-miterlimit = '10'/%3E%3Cline id='XMLID_2_' class='st0' x1='100' y1='0' x2='0' y2='100' stroke= '%23FFFFFF' stroke-width = '7' stroke-miterlimit = '10'/%3E%3C/g%3E%3C/svg%3E")`;

    const cartDisplayer = products.map((product, index) =>
        <div
            className="content"
            key={uuidv4()}
        >
            <div
                key={uuidv4()}
                className="img-displayer start">
                <img
                    alt={product.name}
                    key={uuidv4()}
                    className={`mini-img ${product.name === "Earth xKg" && "mini-tierra"}`}
                    src={imageEncode(product.img_mini.data)}
                // style={{
                //     background: `url("${pictures[index]}")no-repeat center`,
                //     backgroundSize: '90%',
                // }}
                ></img>
                <div
                    className="icon-remove"
                    key={uuidv4()}
                    onClick={() => manageCart(setAction, products, index, "reset")}
                    style={{
                        backgroundImage: image
                    }}></div>
            </div>
            <div
                key={uuidv4()}
                className="product-counter"
                style={{
                    width: "100%",
                    display: width < 400 ? "block" : "flex"
                }}>
                <button
                    key={uuidv4()}
                    className="rest cart set-counter"
                    onClick={() => manageCart(setAction, products, index, "decrease")}
                >-</button>
                <p key={uuidv4()}>{product.quantity}</p>
                <button
                    key={uuidv4()}
                    className="add cart set-counter"
                    onClick={() => manageCart(setAction, products, index, "increase")}
                >+</button>
            </div>
            <div
                key={uuidv4()}
                className="price end">{`${product.price * product.quantity}€`}</div>
        </div>
    )

    if (displaySale && isLogged && order) return <Sale
        setShowHome={setShowHome}
        setUi={setUi}
        message={order} />
    if (displaySale && !isLogged) return <Sale
        setShowHome={setShowHome}
        setUi={setUi}
        message="Por favor registrese antes de realizar la compra. Muchas gracias!"
    />

    if (!displaySale || !order) return (
        <div id="cart-container">
            <h1 className="grid-header start">producto</h1>
            <h1 style={{
                textAlign: "center"
            }}
                className="grid-header">cantidad</h1>
            <h1
                style={{
                    width: "90%"
                }}
                className="grid-header end">precio</h1>
            {cartDisplayer}
            <p id="subtotal" className="end">{`subtotal ${accSubtotal}€`}</p>
            <div
                onClick={() => setUi("home")}
                className="button tienda grid-button start"
            >tienda</div>
            {accSubtotal > 0 &&
                <div
                    onClick={() => {
                        setDisplaySale(true);
                        if (isLogged) setAction(newOrder(setOrder(products)))
                    }}
                    className="button pagar grid-button end"
                >pagar</div>
            }
        </div>
    )
}
