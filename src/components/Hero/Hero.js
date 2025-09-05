import React from 'react'
import { ReactTyped } from "react-typed";
import band from '../../assets/img/profile.webp'
import { FaInstagram } from "react-icons/fa";
import '../../assets/css/Hero.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='container-fluid d-flex g-4 vh-100 align-items-center hero-container' style={{ justifyContent: 'center' }}>
            <div className='hero-container'>
                <h1 style={{ fontSize: '5vw', marginRight: '60px', color: '#496e98' }}>Hi there!</h1>
                <h1 style={{ fontSize: '5vw', marginRight: '60px', color: '#496e98' }}>I'm <span style={{ color: "#e736b5ff" }}>Jorge Rodríguez Luiz</span></h1>
                <h1 style={{ fontSize: '5vw', marginRight: '60px', color: '#e736b5ff' }}>
                    <ReactTyped
                        strings={[
                            "Web Developer",
                        ]}
                        typeSpeed={80}   // velocidad de escritura
                        backDelay={1000}
                        backSpeed={40}   // velocidad de borrado
                        loop             // para repetir en bucle
                    />
                </h1>
                <div className='d-flex  gap-4 p-4 align-items-center'>
                    <div className='hero-container p-2 bg-shadow' style={{ borderRadius: '50%', background: '#fbd9ad' }}><a href="instagram.com" ><FaInstagram style={{ color: '#e736b5ff', width: '30px', height: '30px' }} /></a></div>
                    <div className='hero-container p-2 bg-shadow' style={{ borderRadius: '50%', background: '#fbd9ad' }}><a href="instagram.com" ><FaLinkedinIn style={{ color: '#e736b5ff', width: '30px', height: '30px' }} /></a></div>
                    <div className='hero-container p-2 bg-shadow' style={{ borderRadius: '50%', background: '#fbd9ad' }}><a href="instagram.com" ><FaGithub style={{ color: '#e736b5ff', width: '30px', height: '30px' }} /></a></div>
                    <div className='hero-container p-2 bg-shadow' style={{ borderRadius: '50%', background: '#fbd9ad' }}><a href="instagram.com" ><FaTiktok style={{ color: '#e736b5ff', width: '30px', height: '30px' }} /></a></div>
                </div>
            </div>

            <div className='hero-container'>
                <img src={band} alt="logo" style={{ width: '25vw', height: '25vw', borderRadius: '50%', objectFit: 'cover' }} />
            </div>

        </div>
    )
}

export default Hero