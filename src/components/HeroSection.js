import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import videos from "../video/video1.mp4"

function HeroSection() {
return (
    <div className='hero-container'>
        <video src={videos} autoPlay loop muted />
        <h1>ADVENTURE AWAITS YOU</h1>
        <p>What are you waiting For ?</p>
    <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                EXPLORE
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                CALL NOW <i class="fa-solid fa-phone"></i>
            </Button>
        </div>
    </div>
)
}

export default HeroSection;