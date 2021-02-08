import React from 'react';
import Slider from "./components/Slider";
import SpeakBox from "./components/SpeakBox";
import Rullings from "./components/Rulings";
import Submit from "./components/Submit";
export default function Home(){
    
    return <div id="contentHome">
        <Slider></Slider>
        <SpeakBox></SpeakBox>
        <Rullings></Rullings>
        <Submit></Submit>
    </div>
}