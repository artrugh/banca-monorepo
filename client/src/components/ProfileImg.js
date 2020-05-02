import React from 'react';

import { imageEncode } from './../helpers/helpers';

export default function ProfileImg({ user, setUi, setShowHome, setAction, cleanData, ui }) {
    return (
        <img
            src={user.img ? imageEncode(user.img.data) :
                user.img_default}
            className='profile-picture'
            alt="profile"
            onClick={setUi ? (() => {
                setAction(cleanData);
                setShowHome(false)
                setUi(ui)
            }) : undefined}
        />
    )
}
