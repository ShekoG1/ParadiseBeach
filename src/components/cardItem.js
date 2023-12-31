import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
        <li className='card-item'>
            <Link className='card-item-link' to={{pathname: props.path,}}>
                <figure className='card-item-pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='trvl' className='card-item-img'/>
                </figure>
                <div className='card-item-info'>
                    <h5 className='card-item-text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem