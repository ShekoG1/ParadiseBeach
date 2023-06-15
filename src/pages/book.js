import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";


export default function Book(){

    const params = useParams();

    var showErrormesage = false;
    // In a perfect world, the following variables would be grabbed from a DB
    var roomHeight;
    var roomWidth;
    var roomLength;
    var roomPrice;
    var roomDescription;

    switch (params.roomName) {
        case "room-1":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomDescription = <div id="room-description">
                <p></p>
            </div>;
        break;
        case "room-2":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomDescription = <div id="room-description">
                <p></p>
            </div>;
        break;
        case "room-3":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomDescription = <div id="room-description">
                <p></p>
            </div>;
        break;

        case "room-4":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomDescription = <div id="room-description">
                <p></p>
            </div>;
        break;
        case "room-5":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomDescription = <div id="room-description">
                <p></p>
            </div>;
        break;
        case "room-6":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomDescription = <div id="room-description">
                <p></p>
            </div>;
        break;
    
        default:
            // Throw Error
            showErrormesage = true;
            break;
    }

    if(!showErrormesage){
    return (
        <>
            <section id="book-now-heading">
                <h1>Book {params.roomName}</h1>
            </section>
            <section id="book-now-description">
                {roomDescription}
                <div id="room-dimensions">
                    <ul>
                        <li><em>Height: {roomHeight}</em></li>
                        <li><em>Width: {roomWidth}</em></li>
                        <li><em>Length: {roomLength}</em></li>
                    </ul>
                </div>
                <div id="room-price-container">
                    <span id="room-price">
                        {roomPrice}
                    </span>
                </div>
            </section>
        </>
    );
    }else{
        return(
            <>
                <section id="book-now-heading">
                    <h1>Error: Room not found {}</h1>
                    <p>The room you have selected is not found on our records. Please try selecting another room or contact our admin at dmin@enquiries.com</p>
                </section>
            </>
        );
    }
}