import React ,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getAllData} from "../../redux/slices/MoviesSlices"
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import "./upcoming.scss"
import { useNavigate } from 'react-router-dom';
const UpcomingMovies = () => {
  const movies = useSelector((state) => state.movies.movies)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllData())
  }, [])
  let navigate = useNavigate();
 
  return (
    <div className='upcomingSection'>
      <div className="container">
        <div className="upcoming">
          <div className="up">
            <p>ONLINE STREAMING</p>
            <h1>UPCOMING MOVIES</h1>
          </div>
          <div className="middleSide">
            <button>TV Shows</button>
            <button>Documentary</button>
            <button>Movies</button>
            <button>sports</button>
          </div>
          <div className="films">
            {
              movies.map((m)=>{
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
  )
}

export default UpcomingMovies
