import React from "react";
import "../App.css";
import Footer from "../components/footer";

export default function AboutUs(){
    return (
        <>
            <section className="about-us">
                <h1>About Our Little Slice of Heaven...</h1>
                <div className="about-us-container">
                    <div className="about-text">
                        <p>
                            Nestled serenely amidst majestic mountains and enveloped by enchanting woodlands, ParadiseBeach is a haven for wanderers seeking an idyllic retreat. This resort offers an array of thrilling adventures for both adrenaline junkies and those in search of a more laid-back experience. Embark on heart-pounding escapades like hiking, mountain biking, or zip-lining through the lush terrain. For those craving tranquility, indulge in leisurely walks amidst the captivating natural surroundings. Amidst it all, culinary delights await, promising a gastronomic journey that tantalizes the taste buds. From delectable local cuisine to international delights, ParadiseBeach ensures that every guest is pampered with exceptional flavors.
                        </p><br/>
                        <p>
                            Nestled between the rugged grandeur of towering mountains and embraced by a tapestry of breathtaking woodlands, ParadiseBeach stands as a gateway to a world of exhilarating adventure and natural wonders. As you step onto the resort grounds, you are instantly immersed in a diverse and captivating environment. The surrounding terrains offer a myriad of biomes, each boasting its own unique charm and allure.
                        </p><br/>

                        <p>
                            To the east, pristine sandy beaches stretch as far as the eye can see, caressed by the gentle lapping of turquoise waves. Here, guests can bask in the warmth of the sun, engage in thrilling water sports, or simply unwind on the shore, lulled by the rhythmic symphony of the ocean.
                        </p><br/>
                        <p>
                            Venturing westward, the landscape transforms into a lush, verdant paradise. Towering ancient trees create a dense canopy overhead, filtering sunlight and casting enchanting patterns on the forest floor. Hiking trails wind their way through this emerald wilderness, beckoning adventurers to explore its hidden treasures. Discover cascading waterfalls, secret caves, and vibrant wildlife that call this vibrant ecosystem home.
                        </p><br/>
                        <p>
                            As the terrain gradually ascends, the air becomes crisp and refreshing, revealing the majesty of towering mountains. Here, daredevils can test their limits with exhilarating rock climbing, rappelling down sheer cliffs, or conquering rugged peaks. The panoramic vistas from these lofty heights are nothing short of awe-inspiring, rewarding those who undertake the journey with breathtaking views of cascading valleys and distant horizons.
                        </p><br/>
                        <p>
                            Beyond the mountains, vast stretches of untamed wilderness unfold, where untouched beauty reigns supreme. Dotted with crystal-clear lakes and meandering rivers, this pristine landscape invites visitors to engage in thrilling water adventures such as kayaking, white-water rafting, or fishing in tranquil solitude.</p><br/>
                        <p>
                            Back at the resort, adventure-seekers can find respite in luxurious accommodations that seamlessly blend with the surrounding nature. Whether it's a cozy log cabin nestled amidst the forest or an elegant villa overlooking the azure ocean, every abode provides a sanctuary of comfort and tranquility.
                        </p><br/>
                        <p>
                            ParadiseBeach not only caters to the intrepid explorer but also ensures that each guest's palate is delighted with a culinary experience as diverse as the surrounding environment. From savoring delectable seafood delicacies harvested from nearby waters to indulging in farm-to-table delights showcasing the region's rich bounty, the resort's dining options promise to satisfy even the most discerning epicurean.
                        </p><br/>
                        <p>
                            In this adventure seeker's haven, ParadiseBeach stands as an oasis of thrilling escapades and captivating natural beauty. Whether you seek the rush of adrenaline or the serenity of nature, this resort offers an unforgettable journey through diverse terrains and biomes, leaving you with memories to cherish long after your departure.
                        </p><br/>


                    </div>
                    <div className="about-img">
                        <img src="images/logo.svg" alt="logo"/>
                    </div>
                </div>
            </section>

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