import React from 'react'
import "./footer.scss"
import cardimg from "../../assets/images/card_img.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footerSec">
            <div className="leftside">
                <p>Copyright © 2021. All Rights Reserved By  <span>Movflx</span> </p>
               
            </div>
            <div className="rightside">
                <img src={cardimg} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
