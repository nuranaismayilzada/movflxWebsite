import React from 'react'
import logo from "../../assets/images/logo.png"
import "./navbar.scss"
import { IoSearch } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    let navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/login');
    }
    const handleButtonClickReg = () => {
            navigate('/register');};

     const handleButtonClickRez = () => {
                navigate('/reservation');};
  return (
    <div className='navbarSection'>
     <div className="container">
        <div className="navbar">
            <div className="logo-side">
                <img src={logo} alt="" />
            </div>
            <div className="home-side">
                <nav>
                    <ul>
                        <li>
                        <Link to="/home">HOMEONE</Link>
                        </li>
                        
                        <li>MOVIE</li>
                        <li>TV SHOW</li>
                        <li onClick={handleButtonClickRez}>RESERVATION</li>
                        <li>BLOG</li>
                        <li>CONTACTS</li>
                    </ul>
                </nav>
            </div>
            <div className="left-side">
                <div className="icon-side">
            <IoSearch className='searchIcon' />
            <FaShoppingCart className='basketIcon' />
            <span className='count'>2</span>
            <FaHeart className='wishlistIcon' />
                </div>
            <button className='signinBtn' onClick={handleButtonClick}>Sign In</button>
            <FaUserCircle className='userIcon' onClick={handleButtonClickReg} />
            <div className="language-side">
                <label htmlFor="language">
            <BsGlobe className='globalIcon'/>
                </label>
            <select name="language" id="language" className='selectLanguage'>
            <option value="en">EN</option>
            <option value="az">AZ</option>
            <option value="ru">RU</option>
            <option value="tu">TU</option>
            </select>
            </div>
            <GiHamburgerMenu className='burgerIcon' />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar
