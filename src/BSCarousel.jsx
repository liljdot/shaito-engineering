import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";


const BSCarousel = (props) => {
    const [index, setIndex] = useState(0);
    const images = props.images
    const sliderIndex = parseInt(props.sliderIndex)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        props.changeSliderIndex(selectedIndex)
    };

    useEffect(()=>{
        console.log("carousel" + sliderIndex)
        setIndex(sliderIndex)
    },[sliderIndex])

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            {images.map((image) => {
                return <Carousel.Item
                    style={{
                        minHeight: "480px",
                        maxHeight: "480px"
                    }}
                >
                    <img src={image} className='d-block w-100' alt=""
                        style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translatey(-50%)"
                        }}
                    />
                </Carousel.Item>
            })}
            {/* <Carousel.Item
                style={{
                    minHeight: "480px",
                    maxHeight: "480px"
                }}
            >
                <img src="images/hyd-1.jpeg" className='d-block w-100' alt="" 
                    style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translatey(-50%)"
                    }}
                />
            </Carousel.Item>
            <Carousel.Item
                style={{
                    minHeight: "480px",
                    maxHeight: "480px"
                }}
            >
                <img src="images/gen-1.jpeg" className='d-block w-100' alt=""
                    style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translatey(-50%)"
                    }}
                />
            </Carousel.Item>
            <Carousel.Item
                style={{
                    minHeight: "480px",
                    maxHeight: "480px"
                }}
            >
                <img src="images/hyd-2.jpeg" className='d-block w-100' alt=""
                    style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translatey(-50%)"
                    }}
                />
            </Carousel.Item> */}
        </Carousel>
    )
}

export default BSCarousel;