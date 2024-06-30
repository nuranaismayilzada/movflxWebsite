import React from 'react'
import "./email.scss"
const Email = () => {
  return (
    <div className='EmailPage'>
      <div className="container">
        <div className="emailPage">
            <div className="leftside">
                <h1>TRIAL START FIRST 30 DAYS.</h1>
                <p>Enter your email to create or restart your membership.</p>
            </div>
            <div className="rightside">
                <form className="emailStarted">
                    <input type="text" placeholder='Enter your email' />
                    <button>GET STARTED</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Email
