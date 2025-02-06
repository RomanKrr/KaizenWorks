import "../Basket/Basket.css"
import { RxCross2 } from "react-icons/rx";

import img1 from "../../assets/photos/hoodie.jpg"
import { useCartStore } from "../../store/useCartStore";
import { useEffect } from "react";

const Basket = ({ openBskt, closeBasket }) => {
    const {cart} = useCartStore();

    useEffect(()=>{
        if(cart){
            
        }
    }, [cart])

    return (
        <div className={`basket ${openBskt ? 'active' : ''}`}>
            <div className="basket_container">
                <RxCross2 className="cross" onClick={closeBasket} />
                <div className="items_container">
                    <div className="item">
                        <div className="item_container">
                            <div className="item_img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="item_info">
                                <div className="item_name">Crane Ocean</div>
                                <div className="item_settings">
                                    <p>COLOR:<span className="color_dot black"></span> </p>
                                    <p>SIZE: S</p>
                                </div>
                                <div className="item_price">100$</div>
                                <div className="item_count_container">
                                    <div className="item_add plus">+</div>
                                    <div className="item_count">1</div>
                                    <div className="item_add minus">-</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="item">
                        <div className="item_container">
                            <div className="item_img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="item_info">
                                <div className="item_name">Crane Ocean</div>
                                <div className="item_settings">
                                    <p>COLOR:<span className="color_dot black"></span> </p>
                                    <p>SIZE: S</p>
                                </div>
                                <div className="item_price">100$</div>
                                <div className="item_count_container">
                                    <div className="item_add plus">+</div>
                                    <div className="item_count">1</div>
                                    <div className="item_add minus">-</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="item">
                        <div className="item_container">
                            <div className="item_img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="item_info">
                                <div className="item_name">Crane Ocean</div>
                                <div className="item_settings">
                                    <p>COLOR:<span className="color_dot black"></span> </p>
                                    <p>SIZE: S</p>
                                </div>
                                <div className="item_price">100$</div>
                                <div className="item_count_container">
                                    <div className="item_add plus">+</div>
                                    <div className="item_count">1</div>
                                    <div className="item_add minus">-</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="basket_total">
                    <p>TOTAL: 560$</p>
                </div>
                <div className="basket_btn">
                    Proceed To Checkout
                </div>
            </div>
        </div>
    )
}

export default Basket;
