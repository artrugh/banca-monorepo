import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

//components
import Logo from './Logo'

export default function Sale({ setShowHome, setUi, message }) {

    useEffect(() => {
        setShowHome(true);
    }, [setShowHome])

    return (
        <div id="sale-container">
            <Logo
                className="sale-logo" />
            {/* orders return a [] message */}
            {typeof message === "object" ?
                message.map(i =>
                    <h1
                        key={uuidv4()}
                    >{i}</h1>) : <h1>{message}</h1>
            }
            <div
                onClick={() => setUi("home")}
                className="tienda button"
            >tienda</div>
        </div>
    )
}
