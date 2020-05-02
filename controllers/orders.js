// models
const User = require('../models/User');
const Order = require('../models/Order');

// add an Order
exports.addOrder = async (req, res, next) => {

    try {

        const { products, total_price, total_quantity } = req.body;

        // get the user
        const user = req.user._id
        const userById = await User.findById(user);


        let order = new Order({
            user,
            products,
            total_price,
            total_quantity
        });

        await order.save();

        // add the order to the user list
        userById.orders.push(order._id);
        // save the user
        await userById.save();

        const setDate = () => {

            let day = new Date().getDate() + 7
            const newDay = day < 30 ? day : day - 30

            let month = new Date().getMonth() + 1
            let newMonth = day === newDay ? month : month + 1
            newMonth = newMonth < 13 ? newMonth : 1

            return `${newDay} de ${newMonth}`
        }

        res
            .status(200)
            .send([`${userById.name}, muchas gracias por su compra.`,
            `Su pedido llegará a calle ${userById.street} en ${userById.city} el ${setDate()}.`]);

    } catch (e) {
        next(e);
    }
};