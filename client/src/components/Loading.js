import React from 'react';
import Logo from './Logo';

export default function Loading() {
    return (
        <>
            <div className="spinner-container"></div>
            <Logo className="spinner-logo" />
        </>
    )
}
