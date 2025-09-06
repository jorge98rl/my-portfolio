import React from 'react'
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Project from '../components/ComponentProject/Project';

const Landing = () => {
    return (
        <div className='d-flex flex-column  align-items-center vh-100' id='Home' style={{background: '#14131b'}}>
            <Header/>
            <Hero />
            <About />
            <Project/>
        </div>
    )
}

export default  Landing;