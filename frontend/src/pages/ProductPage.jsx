import { useParams } from "react-router-dom";
import img1 from "../assets/photos/hoodie.jpg"
import "../pageStyles/ProductPage.css";
import { CiShoppingBasket } from "react-icons/ci";
import { useProductStore } from "../store/useProductStore";
import { useEffect, useState } from "react";
import { useCartStore } from "../store/useCartStore";
import ProductImages from "../components/ProductImages/ProductImages";

const ProductPage = () => {
    const { productId } = useParams();

    const { product, getProduct, loading } = useProductStore();
    const { addToCart } = useCartStore();

    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        if (productId) {
            getProduct(productId);
        }
    }, [productId])

    const categorySymbols = {
        "clothes": "服",
        "auto-parts": "自動車部品",
        "accessories": "アクセサリー",
        "body-kits": "ボディキット"
    };

    const addColor = (event) => {
        setSelectedColor(event.target.value)
        console.log("som", event.target.value);
    }
    const addSize = (event) => {
        setSelectedSize(event.target.value)
        console.log("som", event.target.value);
    }

    const handleAddToCart = () => {
        addToCart({
            // id: product.id,
            id: productId,
            name: product.productName,
            price: product.price,
            category: product.category,
            color: selectedColor,
            size: selectedSize,
            image: product.images?.[0],
            quantity: 1,
        })
    }
    return (
        <section>
            <div className="product_container">
                <div className="clothes_header">
                    <CiShoppingBasket className="basket_logo" />
                    <div className="categories_name">
                        <p>
                            <br />
                            {product?.productName}
                            <br />
                            {categorySymbols[product?.category] || ""}
                        </p>
                    </div>
                </div>

                {/* {loading ? (
                    <div className="alert_wrapper">
                        <p className='load'>Завантаження...</p>
                    </div>
                ) : ( */}
                <div className="product_body">
                    <div className="product_body_container">
                        <div className="">
                            <ProductImages product={product}/>
                        </div>
                        <div className="product_info_container">
                            <div className="main_info">
                                <h2 className="product_name">
                                    {product?.productName}
                                </h2>
                                <p className="product_price">{product?.price}$</p>
                            </div>
                            {product?.category === "clothes" ? (
                                <>
                                    <div className="secondary_info">
                                        <p>COLOR :</p>
                                        <select value={selectedColor} onChange={addColor}>
                                            <option value="">choose color</option>
                                            {product?.colors?.length > 0 ? (
                                                product.colors.map((color, index) => (
                                                    <option key={index} value={color}>{color}</option>
                                                ))
                                            ) : (
                                                <option disabled>No images available</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className="secondary_info">
                                        <p>SIZE</p>
                                        <select value={selectedSize} onChange={addSize}>
                                            <option value="">choose size</option>
                                            {product?.sizes?.length > 0 ? (
                                                product.sizes.map((size, index) => (
                                                    <option key={index} value={size}>{size}</option>
                                                ))
                                            ) : (
                                                <option disabled>No sizes available</option>
                                            )}
                                        </select>
                                    </div>

                                    <a href="#">view grid of size</a>
                                </>
                            ) : (
                                // <div className="product_description">
                                //     <p>{product?.description} Some text for you my dear customer</p>
                                // </div>
                                null
                            )}

                            <div className="counter">
                                {/* <button className="count_remove count" onClick={() => handleCountChange(product.id, -1)}>-</button>
                                <div className="count_product">{getCount(product.id)}</div>
                                <button className="count_add count" onClick={() => handleCountChange(product.id, 1)}>+</button> */}
                            </div>

                            <div className="card_button" onClick={handleAddToCart}>ADD TO CART</div>
                        </div>
                    </div>
                </div>
                {/* //)} */}
                <div className="product_description">
                    <p>{product?.description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloribus, delectus amet accusamus magni quos aperiam expedita quaerat, alias error temporibus sint odio inventore, porro molestiae! Omnis minima neque beatae!</p>
                </div>
            </div>
        </section>
    )
}

export default ProductPage