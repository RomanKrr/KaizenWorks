import { useState } from "react";
import "../ProductImages/ProductImages.css";

const ProductImages = ({ product }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="product-images">
            {/* Відображаємо зображення */}
            {product?.images?.length > 0 ? (
                <div>
                    <div className="product_image_container">
                        {product.images.slice(0, 3).map((image, index) => (
                            <img key={index} src={image} alt={`Product Image ${index}`} className="pr_img" />
                        ))}
                    </div>
                    {/* Якщо зображень більше ніж 3, додаємо лінк */}
                    {product.images.length > 3 && (
                        <div onClick={openModal} className="view-all-photos">
                            View all photos
                        </div>
                    )}
                </div>
            ) : (
                <p>No images available</p>
            )}

            {/* Модальне вікно */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button onClick={closeModal} className="close-btn">×</button>
                        <div className="modal-images">
                            {product.images.map((image, index) => (
                                <img key={index} src={image} alt={`Full Image ${index}`} className="modal-img" />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductImages;
