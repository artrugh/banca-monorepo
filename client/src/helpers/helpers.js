import { manageProducts } from './../fetchHelpers/actions';

export const imageEncode = arrayBuffer => {

    const enconded = new Uint8Array(arrayBuffer);
    const b64encoded = btoa([].reduce.call(enconded, (p, c) => p + String.fromCharCode(c), ''))

    return "data:image/jpg;base64," + b64encoded
}

export const change = (e, setUserData, userData) =>
    e.target.name === "uploadedFile" ?
        setUserData({
            ...userData,
            [e.target.name]: e.target.files[0]
        }) :
        // input on change event
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });


export const submit = async (e, setAction, userData, request) => {

    e.preventDefault();
    const formData = new FormData()

    Object.entries(userData).map(entry =>
        formData.append(entry[0], entry[1])
    );
    await setAction(request(formData))
}

export const setFormInputs = array =>

    array.reduce((obj, item) =>

        item.name !== "uploadedFile" ?
            {
                ...obj,
                [item.name]: "",
            } : {
                ...obj,
                [item.name]: null,
            }
        , {});

export const manageCart = (setAction, products, index, operator) =>
    setAction(manageProducts({ products: products, index: index, operator: operator }))

export const handleSloganFontSize = (sloganRef, logoRef) => {
    if (sloganRef.current) {
        // set dinamically the fontSize of the slogan depending in the logo width
        sloganRef.current.style.fontSize = `${logoRef.current.clientWidth / 13}px`
        // change the logoseize in each resize
        window.addEventListener('resize', handleSloganFontSize);
    }
}

// function to handle different kind of err
// while some forms return an array with errors[password-email] others return just a string
export const handleErrors = err => {
    if (err.response.data.error) return [err.response.data.error.message]
    if (err.response.data.errors) return err.response.data.errors.map(err => ({ [err.param]: err.msg }))
    else return []
}

export const setOrder = products => {

    const dataProducts = products
        // map the entries
        .map(x => Object.entries(x)
            // getting only the _id and quantity > 0 from each product
            .filter(x => x[0] === "_id" || (x[0] === "quantity" && x[1] > 0)))
        // filter those whose quantity is more than 0
        .filter(x => x.length === 2)
        // set and object [{_id: x, quantity: x}, {}...]
        .map(i => ({ [i[0][0]]: i[0][1], [i[1][0]]: i[1][1] }))

    const order = {
        products: dataProducts,
        total_price: products.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0),
        total_quantity: products.reduce((acc, curr) => acc + (curr.quantity), 0),
    }

    return order
}