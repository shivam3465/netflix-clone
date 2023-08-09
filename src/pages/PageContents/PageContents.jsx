import React from 'react'
import './pageContents.scss'
import Card from '../../components/card/Card'

export default function PageContents({arr,category}) {
  return (
    <div id='pageContent'>
      {
        arr?.map((item,i)=>{
          return  <Card key={i} obj={item} imgLink={item.backdrop_path}/>;
        })
      }
    </div>
  )
}
