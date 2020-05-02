import React, { createRef, useState } from 'react';

//dependencies
import { v4 as uuidv4 } from "uuid";

// helpers functions
import { change, submit, setFormInputs } from './../helpers/helpers';

const Form = ({
    formData,
    isError,
    setAction,
    action,
    alarm }) => {

    const [userData, setUserData] = useState(setFormInputs(formData.inputs));
    const [focus, setFocus] = useState('');

    const onChange = (e, inputRef) => {
        setFocus(inputRef.current.name)
        change(e, setUserData, userData, inputRef)
    }

    return (
        <div
            style={{ marginTop: formData.button === "enviar" ? "100px" : null }}
            className="sign-container">
            <form
                encType="multipart/form-data"
                onSubmit={e => submit(e, setAction, userData, action)}
                className="sign-form">
                <h3
                    className="contact-title">{formData.title}</h3>
                {formData.inputs.map(item => {
                    if (item.name !== 'uploadedFile' && item.name !== "message") {
                        const inputRef = createRef()
                        return <input
                            ref={inputRef}
                            type={item.type}
                            className={item.className}
                            autoComplete={item.autoComplete}
                            placeholder={item.placeholder}
                            name={item.name}
                            autoFocus={focus === item.name ? true : false}
                            onChange={e => onChange(e, inputRef)}
                            value={userData[item.name]}
                            key={uuidv4()}
                        />
                    } else if (item.name === "message") {
                        const inputRef = createRef()
                        return <textarea
                            ref={inputRef}
                            type={item.type}
                            className={item.className}
                            placeholder={item.placeholder}
                            name={item.name}
                            maxLength="200"
                            required
                            autoFocus={focus === item.name ? true : false}
                            // reverse the input in the texttarea
                            onFocus={e => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
                            onChange={e => onChange(e, inputRef)}
                            value={userData[item.name]}
                            key={uuidv4()}>
                        </textarea>
                    } else {
                        return <label
                            key={uuidv4()}
                            className="form-control label-file">
                            elige tu foto de perfil
                                    <input
                                type={item.type}
                                className={item.className}
                                name={item.name}
                                capture="user" accept="image/*"
                                multiple
                                onChange={e => change(e, setUserData, userData)}
                                key={uuidv4()}
                            />
                        </label>
                    }
                })}
                {/* create alarm message */}
                {/* while some forms return an array with errors[password-email] others return just a string */}
                {isError && alarm.map(err => <p
                    key={uuidv4()}
                    className="alert">{
                        typeof err === "string" ? err :
                            `${Object.keys(err)[0]}:${Object.values(err)[0]}`
                    }</p>
                )}
                <button
                    type="submit"
                    value="Send"
                    className="button sign-button"
                    // don't apply the event in the contact form
                    onClick={
                        formData.button !== "enviar" ? (() => window.scrollTo({ top: 0, behavior: 'auto' })) : null
                    }
                    style={{
                        marginTop: 0
                    }}
                >{formData.button}</button>
            </form>
        </div>
    )
}

export default Form;
