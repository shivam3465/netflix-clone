import React from 'react'
import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './card.scss'

const Card=({obj,imgLink})=>{
    return (
      <div className="cards">
        <Link to={`/details/${obj.id}`} style={{color:"white"}}>
          <img src={`https://image.tmdb.org/t/p/w500${imgLink}`} alt="" />
          <div className='details'>
            <div className='title'>{obj.original_title}</div>          
            <div className='bottom'>
              <div>Year : {obj.release_date.slice(0,4)}</div>
              <div>Vote: {obj.vote_average}<Star/></div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

export default Card; 
