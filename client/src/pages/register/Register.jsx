import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import "./register.scss"

const Register = () => {
  const [username,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/register',{username,email,password})
      .then(result=>{console.log(result)
          navigate('/login')
  })
  
      .catch(err=>console.log(err))
  }
  return (
    <>
    <div className="regSection" onSubmit={handleSubmit}>
            <div className="register">
                <h1>SİGN UP</h1>
                <form >
                <label htmlFor="username">
                  <strong>Username</strong></label>
                    <input  type="text" placeholder='Enter your username'
                    autocomplete="off"
                    name="username"
                    className="form-control rounded-0"
                    onChange={(e)=>setName(e.target.value)}
                    />

                <label htmlFor="email">
                  <strong>Email</strong></label>
                    <input  type="text" placeholder='Enter your email'
                    autocomplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter your password'
                     name='password'
                     className='form-control rounded-0'
                     onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <Link to="/login" className='className=already'>
                Already Have an Account? 
                <span>Login</span>
                </Link>
            </div>
    </div>
  <Footer/>
</>
  )
}

export default Register
