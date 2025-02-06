import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProductStore = create((set) => ({
    product: null,
    allProducts: [],
    loading: false,

    createProduct: async (data) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post("/admin/createProduct", data);
            set({ product: res.data });
            toast.success("Product has been added!");
            console.log("Product has been added!");
        } catch (error) {
            const errorMessage = error?.response?.data?.message || "An error occurred!";
            toast.error(errorMessage);
        } finally {
            set({ loading: false });
        }
    },

    getAllProducts: async () => {
        try {
            const res = await axiosInstance.get("/admin/getAllProducts");
            set({ allProducts: res.data.products })
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },

    deleteProduct: async (productId) => {
        try {
            const res = await axiosInstance.delete(`/admin/${productId}`)
            toast.success("Product has been deleted!")
        } catch (error) {
            console.error("Error deleting products:", error);
        }
    },

    getAllProductsByCategory: async (category) => {
        set({ loading: true });
        try {
            const response = await axiosInstance.get(`/products/category/${category}`);

            console.log("API response:", response);
            //?
            if (response && response.data && Array.isArray(response.data.products)) {
                set({ allProducts: response.data.products });
            } else {
                console.error("Invalid API response structure:", response);
                set({ allProducts: [] });
            }
        } catch (error) {
            console.error("Error fetching products by category:", error.message);
            set({ allProducts: [] });
        } finally {
            set({ loading: false });
        }
    },

    getProduct: async (productId) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.get(`/products/productPage/${productId}`);
            set({ product: res.data.findProduct });
            console.log("API response:", res);
            
        } catch (error) {
            console.error("Error find product:", error.message);
        } finally {
            set({ loading: false });
        }
    }
}));
