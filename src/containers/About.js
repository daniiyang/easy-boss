import React from "react";
import HeaderCircle from "../components/HeaderCircle";
import data, {descriptionExample} from "../data";


const About = () => (
    <div className="About">
        <HeaderCircle className="header-circle"/>
        <span className="about-header-text">
            о пожертвованиях
        </span>
        <div className="about-row-or-column">
            <div className="about-slider">
                <div>
                    <svg className="about-slider-button1" width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L17 15L33.5 1" stroke="white"/>
                    </svg>
                </div>
                {
                    data[1].abouts.map((about) =>
                        <span className="about-slider-text">
                            {about.title}
                        </span>
                    )
                }
                <div>
                    <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L17 15L33.5 1" stroke="white"/>
                    </svg>
                </div>
            </div>


            <div className="about-text-container">
                <span className="about-text">
                    {descriptionExample}
                </span>
                <button className="about-button">
                    <span className="about-button-text">
                        Рассчитать зякат
                    </span>
                    <svg className="about-button-svg" width="84" height="79" viewBox="0 0 84 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46 80L39.56 73.913C15.64 53.913 0 40.4263 0 23.9045C0 10.4348 11.04 0 25.291 0C33.12 0 40.931 3.47826 46 9.12191C51.051 3.47826 58.88 0 66.709 0C80.96 0 92 10.4348 92 23.9045C92 40.4263 76.36 53.896 52.44 73.896L46 80Z" fill="white" fill-opacity="0.1"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>


)


export default About;