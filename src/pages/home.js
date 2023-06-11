import React from "react";
import "../App.css";
import Hero from "../components/hero";
import Cards from "../components/card";

function home(){
    return(
        <>
            <Hero/>
            <Cards/>
        </>
    );
}

export default home