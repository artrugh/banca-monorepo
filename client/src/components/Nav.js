import React from 'react'

import Logo from './Logo';
import CartIcon from './CartIcon';
import ProfileImg from './ProfileImg';

export default function Nav({
    setUi,
    user,
    isLogged,
    setAction,
    cleanData,
    setShowHome }) {

    return (
        <div className="nav">
            <Logo
                setAction={setAction}
                cleanData = {cleanData}
                setUi={setUi}
                className="main-logo" />
            <div className="sign-nav-container">
                {isLogged ? <>
                    <CartIcon
                        setUi={setUi}
                        setShowHome={setShowHome}
                    />
                    <ProfileImg
                        setAction={setAction}
                        cleanData= {cleanData}
                        user={user}
                        setUi={setUi}
                        setShowHome={setShowHome}
                        ui='account'
                    />
                </> : <>
                        <button
                            onClick={() => {
                                setAction(cleanData);
                                setShowHome(false)
                                setUi("login")
                            }}
                            className=" login">LOGIN</button>
                        <button
                            onClick={() => {
                                setAction(cleanData);
                                setShowHome(false)
                                setUi("sign")
                            }}
                            className=" sign">SIGN UP</button>
                    </>}
            </div>
        </div>
    )
}
