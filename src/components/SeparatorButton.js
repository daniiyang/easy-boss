import React from "react";


const SeparatorButton = () => (
    <div className="SeparatorButton">
        <svg className="separator-line" width="441" height="1" viewBox="0 0 441 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H441V1H0V0Z" fill="#E5DECC"/>
        </svg>

        <button className="separator-button">
            <span className="separator-button-text">
                Смотреть все проекты
            </span>
        </button>

        <svg className="separator-line" width="441" height="1" viewBox="0 0 441 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H441V1H0V0Z" fill="#E5DECC"/>
        </svg>
    </div>


)


export default SeparatorButton;