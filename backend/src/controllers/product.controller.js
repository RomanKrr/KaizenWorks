import Product from "../models/product.model.js";

// export const getProductsByCategory = async (req, res) => {
//     const {category} = req.params;
//     console.log("Category received:", category);
//     console.log("Normalized category:", category.trim().toLowerCase());

//     try {
//         const products = await Product.find({ category: category.trim().toLowerCase() });
//         console.log("Normalized category:", category.trim().toLowerCase());

//         console.log("Products found:", products);

//         if (!products.length) {
//             return res.status(404).json({ message: "No products found" });
//         }

//         res.json({products});
//     } catch (error) {
//         console.log("Error in getProductsByCategory controller", error.message);
// 		res.status(500).json({ message: "Server error", error: error.message });
//     }
// }

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  console.log("Received category:", category);

  try {
    const products = await Product.find({ category });

    console.log("Found products:", products);

    res.json({ products });
  } catch (error) {
    console.log("Error in getProductsByCategory controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const findProduct = await Product.findById(productId);
    res.json({ findProduct })
  } catch (error) {
    console.log("Error in getProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}