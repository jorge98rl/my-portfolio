import React, { useState } from "react";
import "../../assets/css/Hero.css";
import bandAbout from '../../assets/img/band-about.webp'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
const About = () => {

    // Estado para controlar qué enlace está activo
    const [activo, setActivo] = useState("enlace1")

    const fileUrl = "/cv.pdf";
    const buttonDownload = () => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "cv.pdf"; // Nombre del archivo al descargar
        link.click();
    };

    // Contenido de cada enlace
    const contenidos = {
        enlace1: <div className="d-flex mt-5 hero-container justify-content-center align-items-center" style={{ flexDirection: 'row' }}>
            <div className="justify-self-center align-self-center hero-container about-container" style={{ flexDirection: 'row', width: '40%' }}>
                <p className="text-white justify-content-center align-items-center w-100" style={{ fontSize: '1.4vw' }}>I’m a Front-End Developer with experience transforming ideas and designs into functional, intuitive web applications.</p>
                <p className="text-white justify-content-center align-items-center w-100" style={{ fontSize: '1.4vw' }}> I’m passionate about working with JavaScript, React, and CSS to create responsive, accessible interfaces with a user-centered focus. My goal is to build digital products that are smooth, engaging, and easy to use.</p>
            </div>

            <div className="w-50"><img src={bandAbout} alt="about-me" style={{ width: '25vw', height: '25vw', borderRadius: '25%', objectFit: 'cover' }} /></div>
        </div>,
        enlace2: <div className="d-flex mt-5 hero-container justify-content-center align-items-center" style={{ flexDirection: 'row' }}>
            <div className="justify-self-center align-self-center hero-container about-container" style={{ flexDirection: 'row', width: '40%' }}>
                <p className="text-white justify-content-center align-items-center w-100" style={{ fontSize: '1.4vw' }}>I’m a Front-End Developer with experience transforming ideas and designs into functional, intuitive web applications.</p>
                <p className="text-white justify-content-center align-items-center w-100" style={{ fontSize: '1.4vw' }}> I’m passionate about working with JavaScript, React, and CSS to create responsive, accessible interfaces with a user-centered focus. My goal is to build digital products that are smooth, engaging, and easy to use.</p>
            </div>

            <div className="w-50"><img src={bandAbout} alt="about-me" style={{ width: '25vw', height: '25vw', borderRadius: '25%', objectFit: 'cover' }} /></div>
        </div>,
        enlace3:
            <div style={{ height: "60vh", backgroundColor: "#14131b", marginTop: '10px' }}>
                <button
                    onClick={buttonDownload}
                    className="btn btn-info p-3 text-white"
                    style={{ marginBottom: "10px", padding: "5px 10px", cursor: "pointer" }}
                >
                    Descargar PDF
                </button>
                <Worker className="" workerUrl={pdfjsWorker}>
                    <Viewer fileUrl="/cv.pdf"
                    />
                </Worker>
            </div>,
        enlace4: "Este es el contenido del Enlace 4",
    };

    return (
        <div className="container-fluid d-flex g-4 vh-100 hero-container"  id="About" style={{ flexDirection: 'column', background: '#14131b' }}>

            <h1
                className="text-start hero-container title-h1 "
                style={{
                    fontSize: "4vw",
                    marginRight: "60px",
                    color: "#fbd9ad",
                    marginTop: "120px",
                    marginLeft: "50px",
                    marginBottom: '40px'
                }}
            >
                About Me
            </h1>
            <div className="d-flex justify-content-around w-75 m-auto" style={{ flexDirection: 'row', borderBottom: '2px solid #fbd9ad' }}>
                <a href="#contents" className="text-decoration-none " style={{
                    color: "#fbd9ad", fontSize: "2vw",
                    width: '100%',
                }}>
                    <div className={`table-hover visited-link ${activo === "enlace1" ? "activo" : ""}`}
                        onClick={() => setActivo("enlace1")}>About</div>
                </a>
                <a href="#contents" className="text-decoration-none" style={{
                    color: "#fbd9ad", fontSize: "2vw",
                    borderBottom: 'none',
                    width: '100%'
                }}><div className={`table-hover visited-link ${activo === "enlace2" ? "activo" : ""}`}
                    onClick={() => setActivo("enlace2")}>Skills</div></a>
                <a
                    href="#contents"
                    className="text-decoration-none"
                    style={{ color: "#fbd9ad", fontSize: "2vw", width: "100%" }}
                >
                    <div
                        className={`table-hover visited-link ${activo === "enlace3" ? "activo" : ""}`}
                        onClick={() => setActivo("enlace3")}
                    >
                        CV
                    </div>
                </a>
                <a href="#contents" className="text-decoration-none" style={{
                    color: "#fbd9ad", fontSize: "2vw",
                    width: '100%',
                }}>
                    <div className={`table-hover visited-link ${activo === "enlace4" ? "activo" : ""}`}
                        onClick={() => setActivo("enlace4")}>Media</div>
                </a>


            </div>
            <div className="d-flex flex-column w-75 m-auto" id="contents" style={{ background: '#14131b' }}>
                {/* Contenido */}
                <div style={{ padding: "10px" }}>
                    {activo ? contenidos[activo] : ""}
                </div>
            </div>
        </div>
    );
};
export default About;
