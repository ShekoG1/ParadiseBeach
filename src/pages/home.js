import React from "react";
import "../App.css";
import Hero from "../components/hero";
import Cards from "../components/card";
import Footer from "../components/footer";

function home(){
    return(
        <>
            <Hero/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default home