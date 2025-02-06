import { Link } from "react-router-dom";
import main_logo from "../../assets/logos/main-logo (2).png"
// import basket_logo from "../../assets/logos/basket-logo.png"
import "../Header/Header.css"

import { CiShoppingBasket } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const HatComp = () => {
    return (
        <header>
            <div className="header_container">
                <div className="header_basket">
                    {/* <CiShoppingBasket className="basket_logo"/> */}
                </div>
                <div className="header_logo">
                    <Link to="/">
                        <img src={main_logo} alt="" />
                    </Link>

                </div>
                <nav>
                    <ul className="nav_container">
                        <Link to="/">
                            <li>HOME</li>
                        </Link>
                        <Link to="/categoryPage">
                            <li>SHOP</li>
                        </Link>
                        <Link to="/">
                            <li>GALLERY</li>
                        </Link>
                        <li>
                            <a href="#about-section">ABOUT</a>
                        </li>
                        <Link to="adminPage">
                            <li><CiUser /></li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HatComp