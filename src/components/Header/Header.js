import React from 'react'
import profile from '../../assets/img/profile.webp'
import { TiHomeOutline } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { MdPerson } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { RiContactsBook2Line } from "react-icons/ri";
const Header = () => {
    return (
        <nav
            className="navbar navbar-expand-md fixed-top p-4 "
            style={{ background: '#14131b' }}
        >
            <div className="container-fluid d-flex justify-content-center align-items-center gap-5">
                {/* Brand */}
                <div className="d-flex align-items-center gap-2 ms-4">
                    <img
                        src={profile}
                        alt="brand"
                        className="rounded-circle"
                        style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover"
                        }}
                    />
                    <h5 className="m-0 text-uppercase fw-bolder ms-2" style={{ color: '#fbd9ad' }}>
                        Jorge Dev
                    </h5>
                </div>

                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ border: '2px solid #fbd9ad' }}
                >
                    <span
                        className="navbar-toggler-icon"
                        style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23fbd9ad' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
                        }}
                    ></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav gap-5 d-flex " style={{ color: '#fbd9ad', textDecoration: 'none' }}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <TiHomeOutline style={{
                                width: "25px",
                                height: "25px"
                            }} />
                            <NavLink to="/" className="nav-item" style={{ color: '#fbd9ad', textDecoration: 'none' }}>Home</NavLink>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <MdPerson style={{
                                width: "25px",
                                height: "25px"
                            }} />
                            <NavLink to="/" className="nav-item" style={{ color: '#fbd9ad', textDecoration: 'none' }}>About</NavLink>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <GrProjects style={{
                                width: "25px",
                                height: "25px"
                            }} />
                            <NavLink to="/" className="nav-item" style={{ color: '#fbd9ad', textDecoration: 'none' }}>Projects</NavLink>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <RiContactsBook2Line style={{
                                width: "25px",
                                height: "25px"
                            }} />
                            <NavLink to="/" className="nav-item" style={{ color: '#fbd9ad', textDecoration: 'none' }}>Contact</NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header