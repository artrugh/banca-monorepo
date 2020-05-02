const mongoose = require("mongoose");
const { Schema } = mongoose;

// Mongoose populate(), which lets you reference documents in other collections.
// Population is the process of automatically replacing the specified paths 
// in the document with document(s) from other collection(s).
// We may populate a single document, multiple documents, plain object, multiple plain objects,
// or all objects returned from a query.

const OrderSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],

    total_price: {
        type: Number,
        required: true
    },

    total_quantity: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);