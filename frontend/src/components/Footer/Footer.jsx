import React from 'react'
import '../Footer/Footer.css'
import main_logo from "../../assets/logos/main-logo.png"

// import logo1 from '../../Assets/img/logo-white_mode.svg'
// import logo2 from '../../Assets/img/logo-dark_mode.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="patent">
            <img className='footer-icon' src={main_logo} alt="Company Logo" />
            <h6>Thank you for visiting my site!</h6>
            <p>&copy; {currentYear} Roman Kucher</p>
        </div>)
}

export default Footer