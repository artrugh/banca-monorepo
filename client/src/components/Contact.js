import React, { useEffect } from 'react';
import Form from './Form'

export default function Contact({ formData, setAction, isError, action, alarm, user, message }) {

    useEffect(() => message && setUi("contact"),[])
    
    return (
        <Form
            formData={formData}
            setAction={setAction}
            isError={isError}
            action={action}
            alarm={alarm}
            user={user}
            message={message}
        />
    )
}
