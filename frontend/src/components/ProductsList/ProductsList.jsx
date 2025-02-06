import React, { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";
import "../ProductsList/ProductsList.css";

import { CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";


const ProductsList = () => {
    const { allProducts, getAllProducts, deleteProduct } = useProductStore();

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="products-container">
            <h2>Product List</h2>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts?.length > 0 ? (
                        allProducts.map((product) => (
                            <tr key={product._id}>
                                <td>
                                    {product.images?.length > 0 ? (
                                        <img src={product.images[0]} alt={product.productName} />
                                    ) : (
                                        "No Image"
                                    )}
                                </td>
                                <td>{product.productName}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>{product.countInStorage || 0}</td>
                                <td>
                                    <GoPencil  onClick={() => deleteProduct(product._id)} />
                                </td>
                                <td>
                                    <CiTrash onClick={() => deleteProduct(product._id)} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No products in storage</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsList;
