import React, { useEffect } from 'react';

import { getProducts } from './fetchHelpers/actions';

import Loading from './components/Loading'

export default function FetchProducts(props) {

    const { setAction, state } = props.props;

    useEffect(() => {
        console.log("fetching Products");
        setAction(getProducts)

    }, [setAction])

    return state.products ? props.render({ state, setAction }) :
        <Loading />
}