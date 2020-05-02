import React from 'react'

export default function Footer({ position }) {

    return (
        <div
            style={{
                position: (position === "login" || position === "account" || position === "cart") ? "absolute" : "static",
                marginTop: position === "home" ? "170px" : null
            }}
            id="footer">
            © Banca S.A., 2020. España. Todos los derechos reservados.
        </div>
    )
}
