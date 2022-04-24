import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import logo from '../images/image1.jpg'
import logo2 from '../images/image2.jpg'
import logo3 from '../images/image3.jpg'
import logo4 from '../images/image4.jpg'
import logo5 from '../images/image5.jpg'

function Cards() {
return (
    <div className='cards'>
    <h1>Our Services</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
            src={logo}
            text='Best Place For Your Children To play'
            path='/services'
            />
            <CardItem
            src={logo2}
            text='Modern Infrastructure for your child to play'
            path='/services'
            />
        </ul>
        <ul className='cards__items'>
            <CardItem
            src={logo3}
            text='Weekly Activites For kids as well as Participation in many competitions'
            path='/services'
            />
            <CardItem
            src={logo4}
            text='Field Trips every month and much more.'
            path='/products'
            />
            <CardItem
            src={logo5}
            text='Best Option for your child to join.'
            path='/sign-up'
            />
        </ul>
        </div>
    </div>
    </div>
);
}

export default Cards;