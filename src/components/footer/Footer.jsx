import React from 'react'
import './footer.scss'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div id='footer'>
        <div id="footer-heading">Questions? Call <Link >000-800-919-1694</Link></div>
        <div className='mid'>
            <Link to={'/'}>FAQ</Link>
            <Link to={'/'}>Help Centre</Link>
            <Link to={'/'}>Account</Link>
            <Link to={'/'}>Media Centre</Link>
            <Link to={'/'}>Investor Relations</Link>
            <Link to={'/'}>Jobs</Link>
            <Link to={'/'}>Ways to Watch</Link>
            <Link to={'/'}>Term of Use</Link>
            <Link to={'/'}>Privacy</Link>
            <Link to={'/'}>Cookie Prefrences</Link>
            <Link to={'/'}>Corporate Information</Link>
            <Link to={'/'}>Contact Us</Link>
            <Link to={'/'}>Speed Test</Link>
            <Link to={'/'}>Legal Notices</Link>
            <Link to={'/'}>Only on Netflix</Link>            
        </div>
        <div id='bottom'>Netflix India</div>
    </div>
  )
}
