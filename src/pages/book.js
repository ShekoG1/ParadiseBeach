import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";


export default function Book(){

    const params = useParams();
    const handleBooking = ()=>{
        alert("Thankyou for your interest in one of our elite rooms!Our bookings are currently full. Please try again later.");
    }

    var showErrormesage = false;
    // In a perfect world, the following variables would be grabbed from a DB
    var roomHeight;
    var roomWidth;
    var roomLength;
    var roomPrice;
    var roomDescription;
    var roomImage;
    var terms_and_conditions = <div id="terms">
 <h1>Terms and Conditions</h1>
    <h2>Room Booking at Adventure Resort</h2>

    <p>Welcome to Adventure Resort! These terms and conditions govern your booking of a resort room with us. Please read this document carefully before making a reservation.</p>

    <p>1. Reservation and Confirmation</p>
    <p>All room reservations are subject to availability. To book a room, you must provide accurate personal information and payment details. Upon successful reservation, you will receive a confirmation email containing the booking details.</p>

    <p>2. Payment and Cancellation Policy</p>
    <p>a) Payment: Full payment is required at the time of booking. We accept major credit cards and electronic bank transfers. Payment details will be provided during the reservation process.</p>
    <p>b) Cancellation: Cancellations made at least 48 hours prior to the scheduled arrival date will receive a full refund. Cancellations made within 48 hours of the scheduled arrival date will incur a cancellation fee equivalent to one night's stay.</p>

    <p>3. Check-In and Check-Out</p>
    <p>a) Check-In: Standard check-in time is 3:00 PM local time. Early check-in is subject to availability and may incur additional charges.</p>
    <p>b) Check-Out: Standard check-out time is 11:00 AM local time. Late check-out may be granted upon request, subject to availability and additional charges.</p>

    <p>4. Guest Responsibility</p>
    <p>a) Age Requirement: Guests must be 18 years of age or older to book a room and check-in.</p>
    <p>b) Behavior: Guests are expected to conduct themselves in a respectful manner and comply with resort policies. Any damage caused to resort property will be the responsibility of the guest.</p>

    <p>5. Liability</p>
    <p>Adventure Resort is not liable for any loss, damage, or injury that occurs during your stay, including but not limited to personal belongings, accidents, or medical emergencies. Guests are encouraged to obtain travel insurance for their own protection.</p>

    <p>6. Modifications and Termination</p>
    <p>Adventure Resort reserves the right to modify or terminate any reservation or these terms and conditions at its discretion, with or without notice.</p>

    <p>7. Governing Law</p>
    <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Adventure Resort is located.</p>

    <p>By making a reservation, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>

    </div>;

    switch (params.roomName) {
        case "room-1":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomImage = "/images/hotel-room1.jpg";
            roomDescription = <div id="room-description">
                <p>
                <span className="highlight">Experience the epitome of coastal luxury</span> in the Ocean Vista Suite, where breathtaking ocean views and modern elegance converge. Step into a spacious and sunlit room adorned with coastal-inspired decor, featuring soothing blue accents and natural textures. Sink into a plush king-sized bed with premium linens, as the sound of crashing waves lulls you into a blissful slumber. Enjoy a private balcony or terrace overlooking the sandy beach, perfect for savoring vibrant sunsets or enjoying morning coffee with the gentle sea breeze. The ensuite bathroom boasts a deep soaking tub and a rainfall shower, offering a serene oasis to unwind and refresh.
                </p>
            </div>;
        break;
        case "room-2":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomImage = "/images/hotel-room2.jpg";
            roomDescription = <div id="room-description">
                <p>
                <span className="highlight">Indulge in the ultimate beachside retreat with the Beachfront Bungalow,</span> a private haven steps away from the sandy shores. Immerse yourself in the cozy and inviting atmosphere, where tropical hues and natural elements blend harmoniously. The bedroom welcomes you with a plush queen-sized bed, promising a restful night's sleep after a day filled with adventure. Unwind on your private veranda, complete with comfortable seating and panoramic views of the sparkling ocean. Let the sound of crashing waves and the scent of saltwater rejuvenate your senses, creating a truly idyllic beachfront escape.
                </p>
            </div>;
        break;
        case "room-3":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomImage = "/images/hotel-room3.jpg";
            roomDescription = <div id="room-description">
                <p>
                <span className="highlight">Embrace the tropical paradise in the Palm Paradise Villa,</span> where luxury and beachside living intertwine seamlessly. Step into a spacious and elegantly furnished villa, exuding a contemporary coastal charm. The bedroom features a lavish king-sized bed adorned with soft linens, providing the utmost comfort after a day of thrilling adventures. The expansive living area boasts floor-to-ceiling windows, offering stunning views of swaying palm trees and turquoise waters. Retreat to your private outdoor terrace, complete with a plunge pool and comfortable loungers, where you can soak up the sun or enjoy a refreshing cocktail in utter tranquility.
                </p>
            </div>;
        break;

        case "room-4":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomImage = "/images/hotel-room4.jpg";
            roomDescription = <div id="room-description">
                <p>
                <span className="highlight">Discover the perfect blend of comfort and coastal charm</span> in the Seaside Retreat Room. Decorated in soothing tones and adorned with beach-inspired accents, this inviting room offers a cozy sanctuary for tired adventurers. Sink into a plush queen-sized bed with crisp linens, ensuring a peaceful night's sleep. Open the curtains to reveal mesmerizing glimpses of the nearby beach and let the natural light flood the room. The ensuite bathroom features modern fixtures and a rejuvenating rain shower, providing a refreshing oasis after a day of outdoor activities. Whether you're lounging indoors or sipping cocktails on your private balcony, the Seaside Retreat Room offers a serene coastal escape.
                </p>
            </div>;
        break;
        case "room-5":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomImage = "/images/hotel-room5.jpg";
            roomDescription = <div id="room-description">
                <p>
                <span className="highlight">Escape to a secluded paradise in the Tropical Oasis Cabana,</span> nestled amidst lush palm trees and vibrant flora. Step into a beautifully designed space that reflects the spirit of the tropics, with rattan furniture, vibrant patterns, and warm earthy tones. Relax on a comfortable king-sized bed with luxurious bedding, as gentle ocean breezes waft through the open windows. Unwind on your private patio, surrounded by a tropical garden, where you can lounge in a hammock or take a refreshing dip in your private plunge pool. The Tropical Oasis Cabana offers a true escape into a world of natural beauty and serenity.
                </p>
            </div>;
        break;
        case "room-6":
            roomHeight = 2500;
            roomWidth = 1300;
            roomLength = 1320;
            roomPrice = 4500;
            roomImage = "/images/hotel-room6.jpg";
            roomDescription = <div id="room-description">
                <p>
                <span className="highlight">Immerse yourself in coastal elegance in the Coastal Chic Suite,</span> where contemporary design and beachside vibes come together. Step into a stylishly furnished room featuring clean lines, neutral tones, and touches of nautical-inspired decor. Sink into a sumptuous king-sized bed and let the sound of the waves lull you into a restful sleep. Admire panoramic ocean views from your private balcony, furnished with comfortable seating for enjoying morning coffee or breathtaking sunsets. The ensuite bathroom exudes sophistication with modern fixtures, a spacious walk-in shower, and luxurious bath amenities. The Coastal Chic Suite is a perfect retreat for those seeking modern luxury in a beachfront setting.
                </p>
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
                <h1>{params.roomName}</h1>
            </section>
            <section id="book-now-description">
                <div id="description-img">
                    <img src={roomImage} alt="Room"/>
                </div>
                <div id="description-detail">
                    {roomDescription}
                    <div id="room-dimensions">
                        <span><em>Dimensions:</em></span>
                        <ul>
                            <li><em>Height: {roomHeight}</em></li>
                            <li><em>Width: {roomWidth}</em></li>
                            <li><em>Length: {roomLength}</em></li>
                        </ul>
                    </div>
                    <div id="room-price-container">
                        <span id="room-price">
                            $ {roomPrice} Per Night
                        </span>
                    </div>
                </div>
            </section>
            <section id="booking-details-container">
                <div id="booking-details-terms">
                    {terms_and_conditions}
                    <div id="terms-accept-box">
                        <label>Accept terms and conditions? </label>
                        <input type="checkbox" id="terms"/>
                    </div>
                </div>
                <div id="booking-details">
                    <h1>Booking Details</h1>
                    <div id="booking-form">
                        <div className="form-input">
                            <label>First Name:</label>
                            <span className="input-validation-field">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M9 16.17l-4.17-4.17-1.42 1.41L9 19 21.59 6.41 20.17 5" fill="none" stroke="green" stroke-width="2" />
                                </svg>
                            </span>
                            <input type="text" placeholder="John"/>
                        </div>
                        <div className="form-input">
                            <label>Last Name:</label>
                            <span className="input-validation-field">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M9 16.17l-4.17-4.17-1.42 1.41L9 19 21.59 6.41 20.17 5" fill="none" stroke="green" stroke-width="2" />
                                </svg>
                            </span>
                            <input type="text" placeholder="Doe"/>
                        </div>
                        <div className="form-input">
                            <label>Email Address:</label>
                            <span className="input-validation-field">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M9 16.17l-4.17-4.17-1.42 1.41L9 19 21.59 6.41 20.17 5" fill="none" stroke="green" stroke-width="2" />
                                </svg>
                            </span>
                            <input type="email" placeholder="john@example.com"/>
                        </div>
                        <div className="form-input">
                            <label>Backup Email:</label>
                            <span className="input-validation-field">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M9 16.17l-4.17-4.17-1.42 1.41L9 19 21.59 6.41 20.17 5" fill="none" stroke="green" stroke-width="2" />
                                </svg>
                            </span>
                            <input type="email" placeholder="doe@example.com"/>
                        </div>

                        <div className="form-input">
                            <label>From (Date):</label>
                            <span className="input-validation-field">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M9 16.17l-4.17-4.17-1.42 1.41L9 19 21.59 6.41 20.17 5" fill="none" stroke="green" stroke-width="2" />
                                </svg>
                            </span>
                            <input type="date"/>
                        </div>
                        <div className="form-input">
                            <label>To (Date):</label>
                            <span className="input-validation-field">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M9 16.17l-4.17-4.17-1.42 1.41L9 19 21.59 6.41 20.17 5" fill="none" stroke="green" stroke-width="2" />
                                </svg>
                            </span>
                            <input type="date"/>
                        </div>
                        <div id="book-btn-container">
                            <input type="button" id="book-btn" value="Book Now With PayPal" onClick={handleBooking}/>
                        </div>
                    </div>
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