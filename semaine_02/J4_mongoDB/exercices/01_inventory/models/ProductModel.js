import mongoose from "mongoose";
// const {Schema, model} = mongoose
const ProductSchema = new mongoose.Schema({

    sale: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    society: {
        type: String,
        required: true,
        trim: true
    },
    qty: {
        type: Number,
        required: true,
        min: 0
    },
    size: {
        h: {
            type: Number,
            required: true,
            min: 0
        },
        w: {
            type: Number,
            required: true,
            min: 0
        },
        uom: {
            type: String,
            required: true,
            enum: ["cm", "in"]
        }
    },
    year: {
        type: Date,
        required: true
    },

}, {
    timestamps: true
})

export const ProductModel = mongoose.model("Product", ProductSchema);