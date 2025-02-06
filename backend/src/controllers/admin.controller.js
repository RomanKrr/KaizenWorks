import cloudinary from "../lib/cloudinary.js";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
    console.log(req.body);
    const { productName, description, price, category, images, sizes, colors, countInStorage } = req.body;
    try {
        // if (!productName || !description || !price || !images || !sizes || !colors || !countInStorage) {
        //     return res.status(400).json({ message: "Всі поля повинні бути заповнені" })
        // }
        const uploadedImages = await Promise.all(
            images.map(async (image) => {
                const uploadResponse = await cloudinary.uploader.upload(image);
                return uploadResponse.secure_url;
            })
        );


        const newProduct = new Product({
            productName,
            description,
            price,
            category,
            images: uploadedImages,
            sizes,
            colors,
            countInStorage
        })

        if (newProduct) {
            await newProduct.save();

            res.status(201).json({
                _id: newProduct._id,
                productName: newProduct.productName,
                description: newProduct.description,
                price: newProduct.price,
                category: newProduct.category,
                images: newProduct.images,
                sizes: newProduct.sizes,
                colors: newProduct.colors,
                countInStorage: newProduct.countInStorage,
            });
        } else {
            res.status(400).json({ message: "Invalid data" });
        }

    } catch (error) {
        console.log("Error in createProduct controller", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        console.log("Error in getAllProducts controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        await Product.findByIdAndDelete(productId);

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.log("Error in deleteProduct controller", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const uploadImage = async (req, res) => {
    
}