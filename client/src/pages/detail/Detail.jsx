import React, { useEffect, useState } from 'react'
import "./detail.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../redux/slices/MoviesSlices'
import { useParams } from 'react-router-dom'
import { MdOutlineWatchLater } from "react-icons/md";
import FooterMenu from '../../components/footermenu/FooterMenu'
import Footer from '../../components/footer/Footer'
import Email from '../../components/email/Email'
import { FaCalendarAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import WorldBestMovies from '../../components/worldBest/WorldBestMovies'

const Detail = () => {
    const movies = useSelector((state) => state.movies.movies)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllData())
    }, [])
    const {moviesId}=useParams();
    const movie = movies.find((m) => m._id === moviesId);
    const [showVideo, setShowVideo] = useState(false);
    const handleButtonClick = () => {
      setShowVideo(true);
    };
  
  return (
    <>
    <div className='detailPage'>
      <div className="container">
        <div className="details">
            <div className="left-side">
        {movie ? <img src={movie.img} className='detImg' /> : "Movie not found"}
            </div>
       <div className="right-side">
        <h3>New Episodes</h3>
        <h1>{movie.name}</h1>
        <div className="lineside">
        <button className='pgBtn'>PG 18</button>
        <button className='formatBtn'>{movie.format}</button>
        <p>Romance,Drama</p>
        <div className="timeDet">
        <MdOutlineWatchLater className='timeIcon' />
        <p>{movie.time} min</p>
        </div>
        <div className="calendar">
        <FaCalendarAlt className='calendarIcon' />
        <p>{movie.year}</p>
        </div>
        </div>
        <div className="detTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi recusandae repellendus labore magni facere cupiditate maiores soluta obcaecati nihil enim vitae ab voluptatem quasi, non est dolore necessitatibus molestiae quam. Provident, ab! Dolorum perferendis, dolores quis delectus suscipit modi ab facilis blanditiis dolor placeat eligendi quisquam veritatis recusandae id vitae!
        </div>
        <div className="watchNow">
        <div className="iconText">
        <FaShareAlt className='shared' />
        <p>Share</p>
        </div>
        <div className="two">
            <h4>Prime Video</h4>
            <p>Streaming Channels</p>
        </div>
        <button className='watchBtn'
        onClick={handleButtonClick}
        >WATCH NOW</button>
        {showVideo && (
        <iframe
          width="160"
          height="215"
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
      </div>
    </div>
    <WorldBestMovies/>
    <Email/>
    <FooterMenu/>
    <Footer/>
    </>
  )
}

export default Detail
