import React, {
    useState,
    useEffect,
    useReducer
} from 'react';

import { reducer } from './reducer';

// helper function to handle errors
import { handleErrors } from './../helpers/helpers'


export const useFetchData = (initialAction, initialData) => {

    const [state, dispatch] = useReducer(reducer, initialData)

    const [action, setAction] = useState(initialAction);

    useEffect(() => {

        let didCancel = false;

        const fetchData = async () => {

            dispatch({ type: 'FETCH_INIT' });

            try {

                const result = await action.request(action.item);

                console.log("successful fetch!");

                if (!didCancel) {
                    dispatch({
                        // set the action
                        type: action.action,
                        payload: result
                    });
                }

            } catch (err) {

                if (!didCancel && err.response) {
                    dispatch({
                        type: 'FETCH_FAILURE',
                        payload: handleErrors(err)
                    });

                    console.log("err", err.response.data);
                }

                else if (!didCancel && err.request) {

                    dispatch({
                        type: 'FETCH_FAILURE',
                        payload: err.request.data
                    });
                    console.log("err", err.request);
                }
            }
        };

        action && fetchData();

        return () => {
            didCancel = true;
        };

    }, [action]);


    return [state, setAction];
};