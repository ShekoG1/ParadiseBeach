import React from "react";
import "../App.css";
import Footer from "../components/footer";

export default function AboutUs(){
    return (
        <>
            <section className="about-section" id="beautiful-shores">
                <div id="about-note-shores">
                    <div className="note-heading">About Our Little Slice of Heaven...</div>
                    <div className="note-container">
                        <p className="note-text">Nestled serenely amidst majestic mountains and enveloped by enchanting woodlands, ParadiseBeach is a haven for wanderers seeking an idyllic retreat. This resort offers an array of thrilling adventures for both adrenaline junkies and those in search of a more laid-back experience. 
                        </p>
                        <p className="note-text">Embark on heart-pounding escapades like hiking, mountain biking, or zip-lining through the lush terrain. For those craving tranquility, indulge in leisurely walks amidst the captivating natural surroundings. Amidst it all, culinary delights await, promising a gastronomic journey that tantalizes the taste buds. From delectable local cuisine to international delights, ParadiseBeach ensures that every guest is pampered with exceptional flavors.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section" id="one-with-nature">
                <div id="about-note-nature">
                    <div className="note-heading">Become one with nature</div>
                    <div className="note-container">
                        <p className="note-text">Nestled between the rugged grandeur of towering mountains and embraced by a tapestry of breathtaking woodlands, ParadiseBeach stands as a gateway to a world of exhilarating adventure and natural wonders.
                        </p>
                        <p className="note-text">As you step onto the resort grounds, you are instantly immersed in a diverse and captivating environment. The surrounding terrains offer a myriad of biomes, each boasting its own unique charm and allure.
                        </p>
                    </div>
                </div>
            </section>

            <section id="night-life">
                <div className="about-content">
                    Let the stars light up your world in our beautiful night life
                </div>
                <div className="about-img img-container">
                    <img src="images/evening-stroll.jpg" alt="evening-stroll"/>
                </div>
            </section>

            <section className="about-section" id="ocean-rocks">
                <div id="about-note-rocks">
                        Welcome to ParadiseBeach
                </div>
            </section>
            <Footer/>
        </>
    );
}