import React, { useState } from 'react';

import ProfileImg from './ProfileImg';
import Form from './Form';
import Sale from './Sale'

// fetch actions
import { logoutUser, updateUser, killUser } from './../fetchHelpers/actions';

export default function AccountControllers({
    formData,
    user,
    setAction,
    isError,
    alarm,
    setUi,
    isLogged,
    message,
    setShowHome }) {

    // showform off or on
    const [showForm, setShowForm] = useState(false);
    // handle the killerAccount
    const [cerrar, setCerrar] = useState(false);

    return isLogged ? <div id="account-container">
        {showForm ? <Form
            formData={formData}
            isError={isError}
            setAction={setAction}
            action={updateUser}
            alarm={alarm} /> : <>
                <ProfileImg
                    user={user}
                    setUi={setUi}
                    setAction={setAction}
                    setShowHome={setShowHome}
                    ui='home'
                />
                <h1 id="name">{user.name}</h1>
                <h1 id="mail">{user.email}</h1>

                <button
                    onClick={() => {
                        setAction(logoutUser)
                        window.scrollTo({ top: 0, behavior: 'auto' })
                    }}
                    className="button logout">log out</button>
                <button
                    onClick={() => {
                        setUi("account update")
                        setShowForm(true)
                    }}
                    className="button controllers">modifica tu cuenta</button>
                <button
                    style={{
                        color: cerrar && "red",
                        padding: cerrar && "0.5em 0.3em"
                    }}
                    // first display the advide and after the first click fetch the API
                    onClick={() => cerrar ? setAction(killUser) : setCerrar(true)}
                    className="button kill"
                >{cerrar ?
                    `${user.name}, haz nuevamente click!` : "cierra tu cuenta"}</button>
            </>
        }
    </div> : <Sale
            setShowHome={setShowHome}
            setUi={setUi}
            message={message} />

}
