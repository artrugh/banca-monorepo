import React, { useEffect } from 'react'

import { getTestimonies } from './fetchHelpers/actions';

import Loading from './components/Loading'

export default function FetchTestimonies(props) {

    const { setAction, state } = props.props;

    useEffect(() => {
        console.log("fetching Testimonies");
        setAction(getTestimonies)
    }, [setAction])

    return state.testimonies ? props.render({ state, setAction }) :
        <Loading />
}



