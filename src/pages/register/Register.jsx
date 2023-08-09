import React from 'react'
import './register.scss'
import netflix_logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Register() {
    
  return (
    <div id='register'>
        <div id="register-nav">
            <Link to='/'>
                <img src={netflix_logo} alt="" />
            </Link>
            <Link to='/login'>
                <div className='sign-in'>Sign In</div>
            </Link>
        </div>
        <div className="register-container">
            <div className='title'>Unlimted movies, TV shows, and more.</div>
            <div className='middle'>Watch anywhere .Cancel anytime</div>
            <div className='bottom'>Ready to watch? Enter your email to create or restart you membership.</div>        
            <form className='register-input'>
                <input type="email" placeholder='Email' required/>                
                <button type='submit' className='register-button'>Get Started</button>
            </form>            
        </div>
        <div id='register-background-effect'></div>
    </div>
  )
}
