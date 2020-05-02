import axios, { post, get, put } from 'axios';


// log user
export const login = async userData => {

    const result = await post(
        '/api/login',
        userData,
        // {timeout: 4000},    // 4 seconds timeout
        { headers: { 'Content-Type': 'application/json' } }
    )
    return result
};

// sign user
export const sign = async userData => {

    const result = await post(
        '/api/sign',
        userData,
        // { timeout: 4000 }, // 4 seconds timeout
        { headers: { 'Content-Type': 'multipart/form-data' } }
    )
    return result
};

// logout user
export const logout = async () => {

    const result = await post(
        '/api/logout',
        { credentials: 'include' }
        // timeout: 4000,    // 4 seconds timeout
    )
    return result
};

// fetch user data each time the app is refresh
export const getUser = async () => {

    const result = await get(
        '/api/user',
        { credentials: 'include' }
        // timeout: 4000,    // 4 seconds timeout
        // responseType: 'arraybuffer'
    );
    return result
};

// update user data
export const updateUserData = async userData => {

    const result = await put(
        '/api/user',
        userData,
        // { timeout: 4000 }, // 4 seconds timeout
        { headers: { 'Content-Type': 'multipart/form-data' } },
        { credentials: 'include' })
    return result
};

// kill user account
export const deleteUser = async () => {

    const result = await axios.delete (
        '/api/user',
        // { timeout: 4000 }, // 4 seconds timeout
        // { headers: { 'Content-Type': 'application/json' } },
        { credentials: 'include' }
    )

    return result
};


export const contact = async userData => {

    const result = await post(
        '/api/contact',
        userData,
        // {timeout: 4000},    // 4 seconds timeout
        { headers: { 'Content-Type': 'application/json' } }
    )
    return result
};


export const testimonies = async () => {

    const result = await get(
        '/api/testimonies'
        // {timeout: 4000},    // 4 seconds timeout
    )

    return result
};


export const products = async () => {

    const result = await get(
        '/api/products'
        // {timeout: 4000},    // 4 seconds timeout
    )

    return result
};

export const postOrder = async orderData => {

    const result = await post(
        '/api/orders',
        orderData,
        // { timeout: 4000 }, // 4 seconds timeout
        { headers: { 'Content-Type': 'application/json' } },
        { credentials: 'include' }
    )
    console.log(result);

    return result
};

export const manageProductsQuantity = item => {

    const { products, index, operator } = item;

    if (operator === "increase") products[index].quantity = products[index].quantity + 1
    if (operator === "decrease" && products[index].quantity !== 0) products[index].quantity = products[index].quantity - 1
    if (operator === "reset") products[index].quantity = 0

    return products
}