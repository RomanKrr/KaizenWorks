import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useCartStore = create((set, get) => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    loading: false,

    addToCart: (product) => {
        if (product.category === "clothes" && (!product.color || !product.size)) {
            toast.error("Please select both color and size before adding to cart.");
            return;
        }

        const existingCart = get().cart;
        const updateCart = [...existingCart, product]
        set({ cart: updateCart })
        localStorage.setItem("cart", JSON.stringify(updateCart));
        toast.success("Product added to cart!");
    }


}));

