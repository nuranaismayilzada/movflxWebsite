import React from 'react'
import family from "../../assets/images/family.png"
import { IoCaretForwardSharp } from "react-icons/io5";
import "./top.scss"
const Topsection = () => {
  return (
    <div className='topSection'>
      <div className="container">
        <div className="topSec">
            <div className="left-side">
                <div className="lineSide">
                  <div className="line"></div>
                  <span>ONLINE STREAMING</span>
                </div>
                <h1>Live Movie & TV Shows For Friends & Family</h1>
                <p className='bigP'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                <div className="hdSide">
                  <h2>HD4K</h2>
                  <div className="activeCustomer">
                    <h4>20K+</h4>
                    <div className='activeCus'>Active Customer</div>
                  </div>
                </div>
                <button>
                <IoCaretForwardSharp />
                <span>WATCH NOW</span>
                </button>
            </div>
            <div className="right-side">
                <img src={family} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topsection
