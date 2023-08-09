import React from 'react'
import './row.scss'
import { Link } from 'react-router-dom'
import { imageLowQualityUrl, imagebaseUrl } from '../../App'

let Card=({imgLink,id})=>{    
    return (
        <Link to={`/details/${id}`}>
            <img loading='lazy' src={`${imageLowQualityUrl}/${imgLink}`} alt=""/>
        </Link>
    )
}

export default function Row({tag,title,arr}) {
  return (
    <div className='row'>
        <div className='head'>
            <h2>{title}</h2>
            <Link to={`/page/${tag}`}>See More </Link>   
        </div>
        
        <div className='row-slider'>
            {
                arr?.length &&
                arr?.map((item,i)=>{ 
                    return <Card key={i} imgLink={item.poster_path} id={item.id}/>
                })
            }
        </div>        
    </div>
  )
}
