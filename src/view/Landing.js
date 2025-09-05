import React from 'react'
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import About from '../components/About/About';

const Landing = () => {
    return (
        <div className='d-flex flex-column  align-items-center' style={{background: '#14131b', height: '100%'}}>
            <Header/>
            <Hero />
            <About />
        </div>
    )
}

export default  Landing;