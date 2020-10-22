import React from 'react'


const styles = {
    wrapper: {
        position: 'absolute',
        width: '100%',
        zIndex: '100',
        bottom: '0',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center,'
    },
    btn: {
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'absolute',
        bottom: '0',
    },
    left: {
        left: '0'
    },
    right: {
        right: '0'
    }
}


const prevArrow =
    <svg className="about-slider-button1" width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L17 15L33.5 1" stroke="white"/>
    </svg>;
const nextArrow =
    <svg className="about-slider-button2" width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L17 15L33.5 1" stroke="white"/>
    </svg>;

export default function AboutCarouselButtons (props) {
    const prevBtnStyle = Object.assign({}, styles.btn, styles.left)
    const nextBtnStyle = Object.assign({}, styles.btn, styles.right)
    const { index, total, loop, prevHandler, nextHandler } = props
    return (
        <div style={styles.wrapper}>
            { (loop || index !== 0) && (
                <div style={prevBtnStyle} onClick={prevHandler}>{prevArrow}</div>
            )}
            { (loop || index !== total - 1) && (
                <div style={nextBtnStyle} onClick={nextHandler}>{nextArrow}</div>
            )}
        </div>
    )
}

