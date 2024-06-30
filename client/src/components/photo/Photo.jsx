import React, { useState } from 'react'
import "./photo.scss"
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { IoCaretForward } from "react-icons/io5";
const Photo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handleButtonClick = () => {
    setShowVideo(true);
  };
  return (
    <div className='photoSection'>
      <div className="container">
        <div className="photo">
          <h6 className='movflx'>Movflx</h6>
          <h2 className='unlimited'>Unlimited <span>Movie</span>, TVs Shows, & More.</h2>
          <div className="textSide">
            <div className="pgBtn">PG 18</div>
            <div className="hdBtn">HD</div>
            <div className="quality">
            <span>Romance</span>
            <span> ,Drama</span>
            </div>
            <div className="date">
            <FaCalendarDays className='calendar' /> 
            <span>2022</span>
            </div>
            <div className="time">
            <IoIosTimer className='timer' />
              <span>128 min</span>
            </div>
          </div>
          <button className='watchBtn' onClick={handleButtonClick}>
            <IoCaretForward className='forward' />
            <span>WATCH NOW</span>
            </button>
            {showVideo && (
        <iframe
          width="260"
          height="55"
          src="https://www.youtube.com/embed/R2gbPxeNk2E?si=f4WOLSlT5aBPAqXU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
        </div>
      </div>
    </div>
  )
}

export default Photo
