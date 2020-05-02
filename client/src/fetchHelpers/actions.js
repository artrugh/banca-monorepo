import {
    login,
    sign,
    logout,
    getUser,
    updateUserData,
    deleteUser,
    contact,
    testimonies,
    products,
    manageProductsQuantity,
    postOrder
} from './fetchRequests';


// Testimonies
export const cleanData = () => ({
    action: "CLEAN_DATA",
    request: () => "clean"
})

// manage userData

export const logUser = item => ({
    action: "FETCH_USER",
    request: login,
    item: item
})

export const signUser = item => ({
    action: "FETCH_USER",
    request: sign,
    item: item
})

export const userData = () => ({
    action: "FETCH_USER",
    request: getUser,
})

export const updateUser = item => ({
    action: "FETCH_USER",
    request: updateUserData,
    item: item
})

// -------- //

// Log out user
export const logoutUser = () => ({
    action: "FETCH_LOGOUT",
    request: logout
})

export const killUser = () => ({
    action: "FETCH_LOGOUT",
    request: deleteUser
})


export const sendMessage = item => ({
    action: "FETCH_CONTACT",
    request: contact,
    item: item
})

// -------- //

// Products
export const getProducts = () => ({
    action: "FETCH_PRODUCTS",
    request: products
})

// manageProductsQuantity

export const manageProducts = item => ({
    action: "PRODUCTS_QUANTITY",
    request: manageProductsQuantity,
    item: item
})

// Testimonies
export const getTestimonies = () => ({
    action: "FETCH_TESTIMONIES",
    request: testimonies
})

export const newOrder = item => ({
    action: "ORDER",
    request: postOrder,
    item: item
})