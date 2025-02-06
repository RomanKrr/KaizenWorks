import { Link, useParams } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import "../pageStyles/Clothes.css";
import { useEffect, useState } from "react";
import { useProductStore } from "../store/useProductStore";
import Basket from "../components/Basket/Basket";

const ProductsByCategory = () => {
  const { allProducts, getAllProductsByCategory, loading } = useProductStore();
  const { category } = useParams();

  const [openBskt, setOpenBskt] = useState(false)
  const [selectedSort, setSelectedSort] = useState("");

  const sortChange = (event) => {
    setSelectedSort(event.target.value);
    console.log("som", event.target.value);
  }

  const sortProducts = () => {
    if (selectedSort === "") return allProducts;

    let sortedProducts = [...allProducts];
    if (selectedSort == "low-hight") {
      sortedProducts.sort((a, b) => a.price - b.price)
    } else if (selectedSort == "hight-low") {
      sortedProducts.sort((a, b) => b.price - a.price)
    }
    return sortedProducts;
  };


  const openHandler = () => {
    setOpenBskt(!openBskt)
  }


  useEffect(() => {
    if (category) {
      getAllProductsByCategory(category);
    }
  }, [getAllProductsByCategory, category]);

  // console.log("products:", allProducts);

  const closeBasketHandler = () => {
    setOpenBskt(false);
  };

  const categorySymbols = {
    "clothes": "服",
    "auto-parts": "自動車部品",
    "accessories": "アクセサリー",
    "body-kits": "ボディキット"
  };


  return (
    <section>
      <div className="clothes_container">
        <div className="clothes_header">
          <div className="bst_btn" onClick={openHandler} >
            <CiShoppingBasket className="basket_logo" />
          </div>
          {openBskt && (
            <Basket openBskt={openBskt} closeBasket={closeBasketHandler} />
          )}
          <div className="categories_name">
            <p>{category.toUpperCase()}<br />{categorySymbols[category] || ""}
            </p>
          </div>
        </div>
        <div className="sort_side">
          <div className="filter_btn">Filter</div>
          <div className="sort_by">

            <select value={selectedSort} onChange={sortChange}>
              <option value="">Sort By</option>
              <option value="low-hight">Price: Low to High</option>
              <option value="hight-low">Price: High to Low</option>
              {/* <option value="">Sort By</option>
              <option value="clothes">clothes</option>
              <option value="auto-parts">auto-parts</option>
              <option value="body-kits">body-kits</option>
              <option value="accessories">accessories</option> */}
            </select>
          </div>
        </div>
        {loading ? (
          <div className="alert_wrapper">
            <p className='load'>Завантаження...</p>
          </div>
        ) : (
          <div className="card_container">
            {sortProducts().length > 0 ? (
              sortProducts().map((product, index) => (
                <Link to={`/productPage/${product._id}`} className="card" key={index}>
                  <div className="card_image_cont">
                    <img src={product.images[0]} alt={product.productName} className="card_image" />
                  </div>
                  <div className="card_info">
                    <h1 className="card_name">{product.productName}</h1>
                    <div className="card_info_container">
                      {category === "clothes" ? (
                        <p className="card_color">Color
                          <span className="color_dot black"></span>
                          <span className="color_dot purple"></span>
                          <span className="color_dot white"></span>
                        </p>
                      ) : null}
                      <p className="card_price">${product.price}</p>
                    </div>
                  </div>
                  <div className="card_button">GO TO SHOP</div>
                </Link>
              ))
            ) : (
              <p>No products found for this category.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsByCategory;
