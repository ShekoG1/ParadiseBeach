import React from 'react';
import CardItem from './cardItem';
import "./styles/card.css";

function Cards() {
  return (
    <div className='card'>
        <h1>Check out these epic destinations</h1>
        <div className='card-container'>
            <div className='card-wrapper'>
                <ul className='card-items'>
                    <CardItem 
                        src="images/img-9.jpg" text="Explore the hidden waterfall..." label="Adventure" path="/services"
                    />
                    <CardItem 
                        src="images/img-2.jpg" text="Engage with indigenous wild life..." label="Wild Life" path="/services"
                    />
                </ul>
                <ul className='card-items'>
                    <CardItem 
                        src="images/img-9.jpg" text="Explore the hidden waterfall..." label="Adventure" path="/services"
                    />
                    <CardItem 
                        src="images/img-2.jpg" text="Engage with indigenous wild life..." label="Wild Life" path="/services"
                    />
                    <CardItem 
                        src="images/img-9.jpg" text="Explore the hidden waterfall..." label="Adventure" path="/services"
                    />
                    <CardItem 
                        src="images/img-2.jpg" text="Engage with indigenous wild life..." label="Wild Life" path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards