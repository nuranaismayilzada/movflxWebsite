import React, { useEffect } from 'react'
import "./worldbest.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../redux/slices/MoviesSlices'
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const WorldBestMovies = () => {
    const movies = useSelector((state) => state.movies.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllData())
      }, [])
      let navigate = useNavigate();
  return (
    <div>
      <div className="worldBestSection">
        <div className="container">
            <div className="worldSection">
                <div className="upSidde">
                    <h5>BEST TV SERIES</h5>
                    <h1>WORLD BEST TV SERIES</h1>
                </div>
                <div className="cardSide">
                <div className="films">
            {
              movies.slice(10).map((m)=>{
                return <div className="cardd" key={m._id}>
                  <img src={m.img} alt="" />
                  <div className="textsSide">
                  <div className="upText">
                  <h5>{m.name}</h5>
                  <p>2022</p>
                  <button onClick={()=>{
                    navigate(`/movies/${m._id}`)
                  }}  className='detailBtnn'>Detail</button>
                  </div>
                  <div className="downText">
                    <button>{m.format}</button>
                    <button>{m.price} AZN
                    <BsCartFill className='addBtn' />
                    </button>
                    <div className="iconsSidee">
                    <div className="timee">
                      <MdOutlineWatchLater className='timeIcon' />
                      <p>{m.time} min</p>
                    </div>
                    <div className="like">
                    <AiFillLike className='likeIcon' />
                    <p>3.5</p>
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
              })
            }
          </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorldBestMovies
