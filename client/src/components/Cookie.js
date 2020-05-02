import React, { useRef, useLayoutEffect} from 'react';

//components
import Logo from './Logo'
//function
import { handleSloganFontSize } from '../helpers/helpers'

export default function Cookie({ setUi }) {

    // access to the dom
    const logoRef = useRef(null);
    const sloganRef = useRef(null);

    useLayoutEffect(() => handleSloganFontSize(sloganRef, logoRef), [])

    return (
        <div id='home'>
            <div className="presentation">
                <Logo
                    logoRef={logoRef}
                    className="presentation-logo" />
                <h1
                    ref={sloganRef}
                    className="slogan">configuración de Cookies</h1>
            </div>
            <h2 className="phrase pharse-cookies">Las cookies son importantes para ti, influyen en tu experiencia de navegación. Nos ayudan a proteger tu privacidad o darte acceso seguro con tu usuario a Banca. No hemos cambiado nada, solo queremos ser transparentes y responsables contigo, igual que lo somos con tu dinero.</h2>
            <div
                className="button home-button"
                onClick={() => setUi("home")}
                id="cookies">aceptar y seguir navegando</div>
        </div>
    )
}