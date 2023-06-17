import React from 'react';
import CardItem from './cardItem';
import "./styles/card.css";

function Cards() {
  return (
    <div className='card' id="rooms">
        <h1>Want to book our holiday? Pick a room...</h1>
        <div className='card-container'>
            <div className='card-wrapper'>
                <ul className='card-items'>
                    <CardItem 
                        src="images/hotel-room1.jpg" text="Explore the hidden waterfall..." label="Adventure" path="/Book/room-1"
                    />
                    <CardItem 
                        src="images/hotel-room2.jpg" text="Engage with indigenous wild life..." label="Wild Life" path="/Book/room-2"
                    />
                </ul>
                <ul className='card-items'>
                    <CardItem 
                        src="images/hotel-room3.jpg" text="Explore the hidden waterfall..." label="Adventure" path="/Book/room-3"
                    />
                    <CardItem 
                        src="images/hotel-room4.jpg" text="Engage with indigenous wild life..." label="Wild Life" path="/Book/room-4"
                    />
                    <CardItem 
                        src="images/hotel-room5.jpg" text="Explore the hidden waterfall..." label="Adventure" path="/Book/room-5"
                    />
                    <CardItem 
                        src="images/hotel-room6.jpg" text="Engage with indigenous wild life..." label="Wild Life" path="/Book/room-6"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards