import React from 'react'
import "./res.scss"
import res from "../../assets/images/res.jpg"
import { PiTelevisionBold } from "react-icons/pi";
import { BsCameraReels } from "react-icons/bs";

const Resolotion = () => {
  return (
    <div className='resPage'>
      <div className="container">
        <div className="res">
          <div className="leftSide">
            <img src={res} className='hdphoto' alt="" / >
            <div className="downloadBtn">
              <p>Download </p>
              <img src="https://movflxx.netlify.app/fonts/download.svg" alt="" id='bigPhooto' />
            </div>
          </div>
          <div className="rightSide">
            <div className="lineSide">
              <div className="line"></div>
              <h5>OUR SERVICES</h5>
            </div>
            <h1>Download Your Shows Watch Offline.</h1>
          <p className='bigP'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
          <div className="tvandwatch">
          <div className="tvSide">
            <div className="tvBorder">
          <PiTelevisionBold className='tv' />
            </div>
          <div className="tvText">
            <h3>Enjoy on Your TV.</h3>
            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          </div>
          <div className="linedashed"></div>
          <div className="cameraSide">
            <div className="cameraBorder">
          <BsCameraReels className='cam' />
            </div>
          <div className="cameraText">
            <h3>Watch Everywhere.</h3>
            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resolotion
