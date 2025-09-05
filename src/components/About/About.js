import React from "react";
import "../../assets/css/Hero.css";
const About = () => {
    return (
        <div className="container-fluid d-flex g-4 vh-100 hero-container" style={{ flexDirection: 'column' }}>

            <h1
                className="text-start hero-container title-h1 "
                style={{
                    fontSize: "4vw",
                    marginRight: "60px",
                    color: "#fbd9ad",
                    marginTop: "120px",
                    marginLeft: "50px",
                }}
            >
                About Me
            </h1>
            <div className="d-flex  justify-content-around w-75 m-auto" style={{ flexDirection: 'row', borderBottom: '2px solid #fbd9ad' }}>
                <div className="table-hover" style={{
                    fontSize: "2vw",
                    color: "#fbd9ad",
                    width: '100%'
                }}>About</div>
                <div className="table-hover" style={{
                    fontSize: "2vw",
                    color: "#fbd9ad",
                    borderBottom: 'none',
                    width: '100%'
                }}>Skills</div>
                <div className="table-hover" style={{
                    fontSize: "2vw",
                    color: "#fbd9ad",
                    borderBottom: 'none',
                    width: '100%'
                }}>CV</div>
                <div className="table-hover" style={{
                    fontSize: "2vw",
                    color: "#fbd9ad",
                    borderBottom: 'none',
                    width: '100%'
                }}>Skills</div>
            </div>
        </div>
    );
};

export default About;
