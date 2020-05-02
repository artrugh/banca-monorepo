import React, { useEffect } from 'react';

// import customs hooks
import { useFetchData } from './fetchHelpers/hooks';
import { userData } from './fetchHelpers/actions';

import Loading from './components/Loading'


export default function FetchUser(props) {

    // fetch hook
    const [state, setAction] = useFetchData(undefined, {});

    useEffect(() => {
        console.log("fetching UserData");
        setAction(userData)
    }, [setAction])

    // after the fecth (returning user or error) display the App
    return (state.message || state.user || state.alarm || state.isError) ? props.render({state, setAction}) :
        <Loading />
}
