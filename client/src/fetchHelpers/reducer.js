export const reducer = (state, action) => {

    switch (action.type) {

        case 'FETCH_INIT':

            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case 'CLEAN_DATA':

            return {
                ...state,
                isLoading: true,
                isError: false,
                alarm: [],
                contact: undefined
            }

        case 'FETCH_USER':

            return {
                ...state,
                isLogged: true,
                isLoading: false,
                isError: false,
                user: action.payload.data,
                message: undefined
            }

        case 'FETCH_PRODUCTS':

            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload.data,
            }

        case 'PRODUCTS_QUANTITY':

            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
            }

        case 'ORDER':
            return {
                ...state,
                isLoading: false,
                isError: false,
                order: action.payload.data,
                products: state.products.map(product => {
                    product.quantity = 0
                    return product
                })
            }

        case 'FETCH_TESTIMONIES':

            return {
                ...state,
                isLoading: false,
                isError: false,
                testimonies: action.payload.data,
            }

        case 'FETCH_LOGOUT':
            
            return {
                ...state,
                isLogged: false,
                isLoading: false,
                isError: false,
                message: action.payload.data,
                user: undefined,
            }

        case 'FETCH_CONTACT':

            return {
                ...state,
                isLogged: state.isLogged,
                isLoading: false,
                isError: false,
                contact: action.payload.data,
                user: state.user,
            }

        case 'FETCH_FAILURE':

            return {
                ...state,
                isLogged: state.isLogged ? true : false,
                isLoading: false,
                isError: true,
                alarm: action.payload,
                message: undefined
            };

        default:
            throw new Error();
    }
};