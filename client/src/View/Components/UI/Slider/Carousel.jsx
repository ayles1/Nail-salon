import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import { Button } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import './Carousel.scss'

function Carousel({ width, height, autoPlay, autoPlayTime, images }) {
    const [slide, setSlide] = useState(0)
    const [touchPosition, setTouchPosition] = useState(null)

    function changeSlide(direction = 1) {
        let slideNumber = 0
        if (slide + direction < 0) {
            slideNumber = images.length - 1
        } else {
            slideNumber = (slide + direction) % images.length
        }
        setSlide(slideNumber)
    }
    function goToSlide(number) {
        setSlide(number % images.length)
    }
    function handleTouchStart(e) {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    function handleTouchMove(e) {
        if (touchPosition === null) {
            return null
        }
        const currentPosition = e.touches[0].clientX
        const direction = touchPosition - currentPosition

        if (direction > 10) {
            changeSlide(1)
        }
        if (direction < -10) {
            changeSlide(-1)
        }
        return setTouchPosition(null)
    }
    useEffect(() => {
        if (!autoPlay) return

        const interval = setInterval(() => {
            changeSlide(1)
        }, autoPlayTime)
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <>
            <div
                style={{ width, height }}
                className="slider"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <div style={{ transform: `translateX(-${slide * 100}%)` }} className="slide-list">
                    {images.map((step, index) => (
                        <div className="slide" key={step}>
                            {Math.abs(slide - index) <= 2 ? (
                                <Box
                                    component="img"
                                    className="slide-image"
                                    src={step}
                                    alt="Не удалось загрузить картинку"
                                />
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
            <MobileStepper
                steps={images.length}
                position="static"
                activeStep={slide}
                nextButton={
                    <Button
                        size="small"
                        onClick={() => changeSlide(1)}
                        disabled={slide === images.length - 1}
                    >
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={() => changeSlide(-1)} disabled={slide === 0}>
                        <KeyboardArrowLeft />
                    </Button>
                }
            />
        </>
    )
}

export default Carousel
