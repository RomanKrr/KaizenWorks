import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category:
        {
            type: String,
            required: true,
        },
        images: [
            {
                type: String,
                required: true,
            }
        ],
        sizes: [
            {
                type: String,
                required: true,
            }
        ],
        colors: [
            {
                type: String,
                required: true,
            }
        ],
        countInStorage: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
