import React from 'react'
import ReactStars from "react-rating-stars-component";

function MovieCard({el}) {
  return (
    <div className='cards'>
        <img src= {el.img}/>
        <h4>{el.name}</h4>
        <p>{el.description}</p>
        <div className='start'>
        <ReactStars count={5} size={24} activeColor="#ffd700"  edit={false} value={el.rating}/>,
        </div>
    </div>
  )
}

export default MovieCard