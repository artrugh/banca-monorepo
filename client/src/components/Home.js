import React, { useRef, useLayoutEffect } from 'react';

import { useScrollPosition } from './../helpers/customHooks'

//components
import Logo from './Logo'
import picture2 from './../assets/products/home.png';

//function
import { handleSloganFontSize } from '../helpers/helpers';

export default function Home({ name, showHome, setShowHome }) {

    // access to the dom
    const logoRef = useRef(null);
    const sloganRef = useRef(null);
    const homeRef = useRef(null);

    useScrollPosition(({ prevPos, currPos }) => {
        setShowHome(Math.abs(currPos.y) < homeRef.current.clientHeight)
    })

    useLayoutEffect(() => {
        handleSloganFontSize(sloganRef, logoRef)
    }, [])

    return (
        <div id='home'
            style={{ display: showHome ? "flex" : "none" }}
            ref={homeRef}>
            <div className="presentation">
                {/* pass the className of the Logo to style it */}
                {/* the ref is passed to set the width */}
                <Logo
                    logoRef={logoRef}
                    className="presentation-logo" />
                <h1
                    className="slogan"
                    ref={sloganRef} >propiedades a medida</h1>
            </div>
            <h2 className="phrase">{(typeof name === "object") ?
                `Bienvenido ${name.name}!` : "garantizamos una compra tan fácil como personal"}</h2>
            <div
                id="presentation-img"
                // add the picture as a backgroundImg
                style={{
                    background: `url("${picture2}")no-repeat center`,
                    backgroundSize: '90%',
                }}>
            </div>
            <div
                id="visitanos"
                className="button home-button"
                // scroll to the nav
                onClick={() => window.scrollTo({ top: homeRef.current.clientHeight, behavior: 'smooth' })}
            >visitanos</div>
        </div >
    )
}
