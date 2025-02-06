import React, { useState } from 'react';
import "../CreateProductForm/CreateProductForm.css";
import { useProductStore } from '../../store/useProductStore';

import { CiTrash } from "react-icons/ci";

const CreateProductForm = () => {
    const { createProduct, loading } = useProductStore();

    const [formData, setFormData] = useState({
        productName: "",
        description: "",
        price: "",
        category: "",
        images: [],
        sizes: [],
        colors: [],
        countInStorage: "",
    });

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files);
        const newImages = [];

        for (const file of files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            await new Promise((resolve) => {
                reader.onload = () => {
                    newImages.push(reader.result);
                    resolve();
                };
            });
        }

        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...newImages],
        }));
    };

    const removeImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        createProduct(formData);
        setFormData({
            productName: "",
            description: "",
            price: "",
            category: "",
            images: [],
            sizes: [],
            colors: [],
            countInStorage: "",
        });
    };

    return (
        <div className="form_container">
            <h2>Створити новий продукт</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Назва продукту:
                    <input
                        type="text"
                        name="name"
                        value={formData.productName}
                        onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                        required
                    />
                </label>

                <label>
                    <div className="pos">
                        Sizes:
                        {["XS", "S", "M", "L", "XL", "XXL", "3XXL", "4XXL"].map((size) => (
                            <div key={size} >
                                <input
                                    type="checkbox"
                                    value={size}
                                    checked={formData.sizes.includes(size)}
                                    onChange={(e) => {
                                        const newSizes = e.target.checked
                                            ? [...formData.sizes, size]
                                            : formData.sizes.filter((c) => c !== size);
                                        setFormData({ ...formData, sizes: newSizes });
                                    }}
                                />
                                {size}
                            </div>
                        ))}
                    </div>
                </label>

                <label>
                    Ціна (₴):
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        required
                    />
                </label>

                <label>
                    Count In Storage:
                    <input
                        type="number"
                        name="countInStorage"
                        value={formData.countInStorage}
                        onChange={(e) => setFormData({ ...formData, countInStorage: e.target.value })}
                        required
                    />
                </label>

                <label>
                    Категорія:
                    <select
                        name="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                    >
                        <option value="">Choose category</option>
                        <option value="clothes">clothes</option>
                        <option value="auto-parts">auto-parts</option>
                        <option value="body-kits">body-kits</option>
                        <option value="accessories">accessories</option>
                    </select>
                </label>

                <label>
                    <div className="pos">
                        Colors:
                        {["black", "white", "purple", "orange", "red", "brown", "gray", "yellow"].map((color) => (
                            <div key={color}>
                                <input
                                    type="checkbox"
                                    value={color}
                                    checked={formData.colors.includes(color)}
                                    onChange={(e) => {
                                        const newColors = e.target.checked
                                            ? [...formData.colors, color]
                                            : formData.colors.filter((c) => c !== color);
                                        setFormData({ ...formData, colors: newColors });
                                    }}
                                />
                                {color}
                            </div>
                        ))}
                    </div>
                </label>

                <label>
                    Опис:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                    ></textarea>
                </label>

                <label>
                    Додати зображення:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        multiple
                    />
                </label>

                <div className="image-list">
                    {formData.images.map((image, index) => (
                        <div className="choose_container" key={index}>
                            <div className="c">
                                <img src={image} alt="Selected" className="choosen_image" />
                                <CiTrash className='delete_image' onClick={() => removeImage(index)} />
                            </div>
                        </div>
                    ))}
                </div>

                <button type="submit">Додати продукт</button>
                {loading && <div className="alert_wrapper">
                    <p className='load'>Завантаження...</p>
                </div>}

            </form>
        </div>
    );
};

export default CreateProductForm;
