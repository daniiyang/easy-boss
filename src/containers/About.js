import React from "react";
import HeaderCircle from "../components/HeaderCircle";
import AboutCarouselButtons from "../components/AboutCarouselButtons";
import data, {descriptionExample} from "../data";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {userType} from "../App";


const prevArrow =
    <svg className="about-slider-button1" width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L17 15L33.5 1" stroke="white"/>
    </svg>;
const nextArrow =
    <svg className="about-slider-button2" width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L17 15L33.5 1" stroke="white"/>
    </svg>;


const About = () => {
    return(
        <div className="About">
            <HeaderCircle className="header-circle"/>
            <span className="about-header-text">
            о пожертвованиях
        </span>
            <div className="about-row-or-column">
                <div className="about-slider">

                    <div className="about-carousel-container">
                        <CarouselProvider
                            totalSlides={5}
                            naturalSlideHeight={50}
                            naturalSlideWidth={(userType === "pc") ? 150 : 80}
                            orientation={(userType === "pc") ? "vertical" : "horizontal"}
                            visibleSlides={3}
                            infinite={true}
                        >
                            <ButtonBack className="carousel-back">{prevArrow}</ButtonBack>
                            <Slider>
                                {
                                    data[1].abouts.map((about) =>
                                        <Slide className="carousel-slide" index={about.id}>
                                            <span className="about-carousel-text">
                                                {about.title}
                                            </span>
                                        </Slide>
                                    )
                                }
                            </Slider>
                            <ButtonNext className="carousel-next">{nextArrow}</ButtonNext>
                        </CarouselProvider>
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
}


export default About;