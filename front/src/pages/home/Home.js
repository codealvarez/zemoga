import React from 'react';
import Slider from "./components/Slider";
import SpeakBox from "./components/SpeakBox";
import Rullings from "./components/Rulings";
export default function Home(){
    
    return <div id="contentHome">
        <Slider></Slider>
        <SpeakBox></SpeakBox>
        <Rullings></Rullings>
        <div id="submitPerson">
            <div className="invitation">
                Is there anyone else you would want us to add?
            </div>
            <button>Submit a name</button>
        </div>
    </div>
}