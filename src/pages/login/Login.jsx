import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'


export default function login() {
    // ye signin hogaya login ke liye name hata do 
  return (
    <div id='login-container'>
        <form id="form" action='/validate' method='post'>
            <h2 className='input-section title' >Sign In</h2>            
            <div className='input-section'>
                <label htmlFor="email" >Email:</label>
                <input type='email' name='email' id='email'placeholder='Email' required/>
            </div>
            <div className='input-section'>
                <label htmlFor="password" >Password:</label>
                <input type="password" name='password' id='password'placeholder='Password' required/>
            </div>
            <button type="submit">Sign In</button>
            <div className='register input-section bottom'>
                New to Netflix? &nbsp;<Link to='/register'> Register now</Link>.
            </div>
            <div className='input-section bottom'>
                This page is proctected by Google reCAPTCHA to ensure you're not a bot .
            </div>
        </form>
        <div id='background-effect'></div>
    </div>
  )
}
