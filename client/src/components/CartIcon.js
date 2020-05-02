import React from 'react'

export default function CartIcon({ setUi, setShowHome }) {
    return (

        <svg
            onClick={() => {
                setShowHome(false)
                setUi("cart")}}
            id="cart-icon"
            viewBox="0 0 80.6 61.7" >
            <g id="XMLID_2_">
                <path id="XMLID_5_" className="st0" d="M1.8,1.8h9.7c2.5,0,4.7,1.8,5.2,4.3l6,32.3c0.5,2.5,2.6,4.3,5.2,4.3h41.9c2.5,0,4.7-1.8,5.2-4.3
                l3.7-19.6c0.6-3.2-1.9-6.3-5.2-6.3H33.2"/>
                <circle id="XMLID_4_" className="st1" cx="35" cy="55.5" r="6.2" />
                <circle id="XMLID_3_" className="st1" cx="61.6" cy="55.5" r="6.2" />
            </g>
        </svg>

    )
}
