import React from 'react'
import "./footermenu.scss"
import logo from "../../assets/images/logo.png"
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const FooterMenu = () => {
  return (
    <div className='footerMenuSection'>
      <div className="container">
        <div className="footerMenu">
            <div className="upSide">
                <div className="leftSide">
                    <img src={logo} alt="" />
                </div>
                <div className="rightSide">
                    <nav>
                        <ul>
                            <li>HOME</li>
                            <li>MOVIE</li>
                            <li>TV SHOW</li>
                            <li>PAGES</li>
                            <li>PRICING</li>
                        </ul>
                    </nav>
                    <form action="#" className='findForm'>
                        <input type="text" placeholder='Find Favorite Movie' />
                        <IoSearch className='searchIcon' />
                    </form>
                </div>
                <div className="rightSide">
                    
                </div>
            </div>
            <div className="line"></div>
            <div className="bottomSide">
                <div className="leftSide">
                    <nav>
                        <ul>
                            <li>FAQ</li>
                            <li>HELP CENTER</li>
                            <li>TERMS OF USE</li>
                            <li>PRIVACY</li>
                        </ul>
                    </nav>
                    <div className="iconSide">
                    <FaFacebookF  className='icons' />
                    <FaTwitter className='icons' />
                    <FaPinterestP className='icons' />
                    <FaLinkedinIn  className='icons'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMenu
