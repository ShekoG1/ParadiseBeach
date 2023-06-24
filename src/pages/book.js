import React, {useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Swal from "sweetalert2";

export default function Book(){

        // In a perfect world, the following variables would be grabbed from a DB
        var roomHeight;
        var roomWidth;
        var roomLength;
        var roomPrice;
        var roomDescription;
        var roomImage;
        var roomName;
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
    // Constructors
    // eslint-disable-next-line
    const Swal = require('sweetalert2');

    var dimensions;
    var features;

    // SVGs
    const svg_incorrect = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi bi-x" viewBox="0 0 16 16">
        <path stroke="red" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="red"/>
    </svg>;
    const svg_correct = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M9 16.17l-4.17-4.17-1.42 1.41L9 19 21.59 6.41 20.17 5" fill="none" stroke="green" strokeWidth="2" />
    </svg>;

    // Updatable
    const params = useParams();
    const [acceptTerms,setAcceptTerms] = useState(false);
    const [svg_firstName,set_svg_firstName] = useState(svg_correct);
    const [svg_lastName,set_svg_lastName] = useState(svg_correct);
    const [svg_emailAddress,set_svg_emailAddress] = useState(svg_correct);
    const [svg_confirmEmail,set_svg_confirmEmail] = useState(svg_correct);
    const [svg_fromDate,set_svg_fromDate] = useState(svg_correct);
    const [svg_toDate,set_svg_toDate] = useState(svg_correct);
    const [tabContent, setTabcontent] = useState(roomDescription);

    const [tab_descripton_classList, set_tab_descripton_classList] = useState("");
    const [tab_details_classList, set_tab_details_classList] = useState("");
    const [tab_features_classList, set_tab_features_classList] = useState("");

    // Refs
    let firstName = React.createRef();
    let lastName = React.createRef();
    let emailAddress = React.createRef();
    let confirmEmail = React.createRef();
    let fromDate = React.createRef();
    let toDate = React.createRef();


    switch (params.roomName) {
        case "room-1":
            roomName = "Ocean Vista Suite";
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
            roomName = "Beachfront Bungalow";
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
            roomName = "Palm Paradise Villa";
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
            roomName = "Seaside Retreat Room";
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
            roomName = "Tropical Oasis Cabana";
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
            roomName = "Coastal Chic Suite";
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

    // Handler Functions
    const handleTermsclick = (termsEvent) => {
        setAcceptTerms(termsEvent.target.checked);
    };
    const handleTabclick = (tabEvent) =>{
        // Set all tabs to inactive, then only set the clicked tab to active
        set_tab_descripton_classList("");
        set_tab_details_classList("");
        set_tab_features_classList("");

       switch (tabEvent.target.id) {
        case "tab_description":
            setTabcontent(roomDescription);
            set_tab_descripton_classList("tab_active");
        break;
        case "tab_details":
            setTabcontent(dimensions);
            set_tab_details_classList("tab_active");
        break;
        case "tab_features":
            setTabcontent(features);
            set_tab_features_classList("tab_active");
        break;
       
        default:
            break;
       }
    }
    const handleSubmit = () => {
        if(!acceptTerms){
            Swal.fire({
                title: 'Error!',
                text: 'To continue with the booking process, please accept our terms and conditions',
                icon: 'error',
                confirmButtonText: 'Got it!'
            });
        }else{
            let hasError = false;
            let errorMsg = "";

            if(firstName.current.value === ""){
                set_svg_firstName(svg_incorrect);
                hasError = true;
                errorMsg += "<li>The 'First Name' filed cannot be empty</li>";
            }else{
                set_svg_firstName(svg_correct);
            }
            if(lastName.current.value === ""){
                set_svg_lastName(svg_incorrect);
                hasError = true;
                errorMsg += "<li>The 'Last Name' filed cannot be empty</li>";
            }else{
                set_svg_lastName(svg_correct);
            }
            if(emailAddress.current.value === ""){
                set_svg_emailAddress(svg_incorrect);
                hasError = true;
                errorMsg += "<li>The 'Email Address' filed cannot be empty</li>";
            }else{
                set_svg_emailAddress(svg_correct);
            }
            if(confirmEmail.current.value === ""){
                set_svg_confirmEmail(svg_incorrect);
                hasError = true;
                errorMsg += "<li>The 'Confirm Email Address' filed cannot be empty</li>";
            }else{
                set_svg_confirmEmail(svg_correct);
            }
            if(fromDate.current.value === ""){
                set_svg_fromDate(svg_incorrect);
                hasError = true;
                errorMsg += "<li>The 'From Date' filed cannot be empty</li>";
            }else{
                set_svg_fromDate(svg_correct);
            }
            if(toDate.current.value === ""){
                set_svg_toDate(svg_incorrect);
                hasError = true;
                errorMsg += "<li>The 'To Date' filed cannot be empty</li>";
            }else{
                set_svg_toDate(svg_correct);
            }
            if(emailAddress.current.value != confirmEmail.current.value){
                set_svg_emailAddress(svg_incorrect);
                hasError = true;
                errorMsg += "<li>The 'Email Address' filed cannot be empty</li>";
                set_svg_confirmEmail(svg_incorrect);
                errorMsg += "<li>The 'Confirm Email Address' filed cannot be empty</li>";
            }

            if(!hasError){
                let roomId = roomName.split("-")[1];
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({
                "roomId": roomId,
                "price": roomPrice,
                "checkIndate": `${fromDate.current.value}`,
                "checkOutdate": `${toDate.current.value}`,
                "fullName": `${firstName.current.value} ${lastName.current.value}`,
                "emailAddress": "usertodelete@gmail.com"
                });
                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
                };

                fetch("/api/booking/create/", requestOptions)
                .then(response => response.text())
                .then(result => {
                    let data = JSON.parse(result);
                    if(data.message == "success"){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Booking complete!',
                            icon: 'success',
                            confirmButtonText: 'Okay!'
                        });
                    }else{
                        Swal.fire({
                            title: 'Error!',
                            html: '<h1>Opps...It looks like there were some errors submitting this booking! Please try again later.</h1>',
                            icon: 'error',
                            confirmButtonText: 'Got it!'
                        });
                    }
                })
                .catch(error => console.log('error', error));
            }else{
                Swal.fire({
                    title: 'Error!',
                    html: `<h1>Opps...It looks like there are some errors</h1><ul> ${errorMsg}</ul>`,
                    icon: 'error',
                    confirmButtonText: 'Got it!'
                });
            }
        }
    };
    const handleImgclick = (imgClickevent) => {
        Swal.fire({
            title: 'View image!',
            html: `<img src='${imgClickevent.target.src}' width="350">`,
            icon: 'info',
            confirmButtonText: 'Done!'
        });
    }

    var showErrormesage = false;

    // HTML Variables
    dimensions = <div id="room-dimensions">
        <span><em>Dimensions:</em></span>
        <ul>
            <li><em>Height: {roomHeight}</em></li>
            <li><em>Width: {roomWidth}</em></li>
            <li><em>Length: {roomLength}</em></li>
        </ul>
        <span><em>Number of rooms: 3 (Standard)</em></span>
    </div>
    features = <div id="room-features">
        <ul>
        <li>Ocean View</li>
        <li>Private Balcony or Terrace</li>
        <li>King or Queen Size Bed</li>
        <li>Ensuite Bathroom</li>
        <li>Air Conditioning</li>
        <li>Flat-screen TV</li>
        <li>Mini Fridge</li>
        <li>Coffee Maker</li>
        <li>Safe</li>
        <li>Wi-Fi Access</li>
        <li>Work Desk</li>
        <li>Sitting Area</li>
        <li>Beach-inspired Décor</li>
        <li>Plush Linens and Towels</li>
        <li>Bathrobes and Slippers</li>
        <li>Hairdryer</li>
        <li>Iron and Ironing Board</li>
        <li>In-room Dining Service</li>
        <li>Daily Housekeeping</li>
        <li>Room Service</li>
        </ul>
    </div>

    if(!showErrormesage){
    return (
        <>
            <section id="book-now-heading">
                <h1>{roomName}</h1>
            </section>
            <section id="book-now-description">
                <div id="description-img">
                    <img className="description-img" onClick={handleImgclick} src={roomImage} alt="Room"/>
                    <img className="description-img" onClick={handleImgclick} src={roomImage} alt="Room"/>
                    <img className="description-img" onClick={handleImgclick} src={roomImage} alt="Room"/>
                    <img className="description-img" onClick={handleImgclick} src={roomImage} alt="Room"/>
                    <img className="description-img" onClick={handleImgclick} src={roomImage} alt="Room"/>
                </div>
                <div id="description-detail">
                    {/* Columns */}
                        <div className="actionColumns">
                            <span className={tab_descripton_classList} id="tab_description" onClick={handleTabclick}>Description</span>
                            <span className={tab_details_classList} id="tab_details" onClick={handleTabclick}>Details</span>
                            <span className={tab_features_classList} id="tab_features" onClick={handleTabclick}>Features</span>
                        </div>

                    {tabContent}
                    <div id="room-price-container">
                        <a id="room-price" href="#book-btn-container">
                            $ {roomPrice} Per Night
                        </a>
                    </div>
                </div>
            </section>
            <section id="booking-details-container">
                <div id="booking-details-terms">
                    {terms_and_conditions}
                    <div id="terms-accept-box">
                        <label>Accept terms and conditions? </label>
                        <input type="checkbox" onChange={handleTermsclick} id="terms"/>
                    </div>
                </div>
                <div id="booking-details">
                    <h1>Booking Details</h1>
                    <div id="booking-form">
                        <div className="form-input">
                            <label>First Name:</label>
                            <span className="input-validation-field">
                                {svg_firstName}
                            </span>
                            <input ref={firstName} type="text" placeholder="John"/>
                        </div>
                        <div className="form-input">
                            <label>Last Name:</label>
                            <span className="input-validation-field">
                                {svg_lastName}
                            </span>
                            <input ref={lastName} type="text" placeholder="Doe"/>
                        </div>
                        <div className="form-input">
                            <label>Email Address:</label>
                            <span className="input-validation-field">
                                {svg_emailAddress}
                            </span>
                            <input ref={emailAddress} type="email" placeholder="john@example.com"/>
                        </div>
                        <div className="form-input">
                            <label>Backup Email:</label>
                            <span className="input-validation-field">
                                {svg_confirmEmail}
                            </span>
                            <input ref={confirmEmail} type="email" placeholder="doe@example.com"/>
                        </div>

                        <div className="form-input">
                            <label>From (Date):</label>
                            <span className="input-validation-field">
                                {svg_fromDate}
                            </span>
                            <input ref={fromDate} type="date"/>
                        </div>
                        <div className="form-input">
                            <label>To (Date):</label>
                            <span className="input-validation-field">
                                {svg_toDate}
                            </span>
                            <input ref={toDate} type="date"/>
                        </div>
                        <div id="book-btn-container">
                            <button type="button" id="book-btn" onClick={handleSubmit}>
                            <img src="/images/logo.svg" alt="Logo"/>
                            Book Now With PayPal
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
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