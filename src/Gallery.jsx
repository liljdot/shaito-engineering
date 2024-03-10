import React, { useState, useRef, useEffect } from "react";
import BSCarousel from "./BSCarousel";

const images = [
    
    "images/gal-1.jpeg",
    "images/gal-2.jpeg",
    "images/gal-3.jpeg",
    "images/gal-4.jpeg",
    "images/gal-5.jpeg",
    "images/gal-6.jpeg",
    "images/gal-7.jpeg",
    "images/gal-8.jpeg",
    "images/gal-9.jpeg",
    "images/gal-10.jpeg",
    "images/gal-11.jpeg",
    "images/gal-12.jpeg",
    "images/gal-14.jpeg",
    "images/gal-15.jpeg",
    "images/gal-16.jpeg",
    "images/gal-17.jpeg",
    "images/gal-18.jpeg",
    "images/gal-19.jpeg",
    "images/gal-20.jpeg",
    "images/gal-21.jpeg",
    "images/gal-22.jpeg",
    "images/gal-23.jpeg",
    "images/gal-24.jpeg",
    "images/gal-25.jpeg",
    "images/gal-26.jpeg",
    "images/gal-27.jpeg",
    "images/gal-28.jpeg",
    "images/gal-29.jpeg",
    "images/gal-30.jpeg",
    "images/gal-31.jpeg",
    "images/gal-32.jpeg",
    "images/gal-33.jpeg",
    "images/gal-34.jpeg",
    "images/gal-35.jpeg",
    "images/gal-36.jpeg",
    "images/gal-37.jpeg",
    "images/gal-38.jpeg",
    "images/gal-39.jpeg",
    "images/gal-40.jpeg",
    "images/gal-41.jpeg",
    "images/gal-42.jpeg",
    "images/gal-43.jpeg",
    "images/gal-44.jpeg",
    "images/gal-45.jpeg",
    "images/gal-46.jpeg",
    "images/gal-47.jpeg",
    "images/gal-48.jpeg",
    "images/gal-49.jpeg",
    "images/gal-50.jpeg",
    "images/gal-51.jpeg",
    "images/gal-52.jpeg",
    "images/gal-53.jpeg",
    "images/gal-54.jpeg",
    "images/gal-55.jpeg",
    "images/gal-56.jpeg",
    "images/gal-57.jpeg",
    "images/gal-58.jpeg",
    "images/gal-59.jpeg",
    "images/gal-60.jpeg",
    "images/gal-61.jpeg",
    "images/gal-62.jpeg",
    "images/gal-63.jpeg",
    "images/gal-64.jpeg",
    "images/gal-65.jpeg",
    "images/gal-66.jpeg",
    "images/gal-67.jpeg",
    "images/gal-68.jpeg",
    "images/gal-69.jpeg",
    "images/gal-70.jpeg",
    'images/carousel1.jpeg',
    'images/carousel3.jpeg',
    'images/ele.jpeg',
    'images/fso-1.jpeg',
    'images/gen-2.jpeg',
    'images/gen-3.jpeg',
    'images/gen-4.jpeg',
    'images/gen-5.jpeg',
    'images/gen-6.jpeg',
    'images/hyd-1.jpeg',
    'images/hyd-2.jpeg',
    'images/hyd-3.jpeg',
    'images/hyd-4.jpeg',
    'images/hyd-5.jpeg',
    'images/hyd-6.jpeg',
    'images/hyd-7.jpeg',
    'images/hyd-8.jpeg',
    'images/hyd-9.jpeg',
    'images/hyd-10.jpeg',
    'images/vision-img.jpeg',
    "images/solar-1.jpeg",
    "images/solar-2.jpeg",
    "images/solar-3.jpeg",
    "images/solar-4.jpeg",
    "images/solar-5.jpeg",
    "images/solar-6.jpeg",
    "images/solar-7.jpeg",
    "images/solar-8.jpeg",
    "images/solar-9.jpeg",
    "images/logistics-1.jpg",
    "images/logistics-2.jpeg",
    "images/logistics-3.jpg",
    "images/logistics-4.jpg",
    "images/logistics-5.jpeg"
]

const Gallery = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const [buttonRightFocus, setButtonRightFocus] = useState(false)
    const [buttonLeftFocus, setButtonLeftFocus] = useState(false)
    const slideScroller = useRef(null)
    const scrollRight = () => {
        setButtonRightFocus(true)
    }

    const scrollLeft = () => {
        setButtonLeftFocus(true)
    }

    const stopScroll = () => {
        setButtonLeftFocus(false)
        setButtonRightFocus(false)
    }
    const handleClick = (e) => {
        setSliderIndex(e.target.id)
        console.log(e.target.id)
    }
    const changeSliderIndex = (selectedIndex) => {
        setSliderIndex(selectedIndex)
    }

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (buttonRightFocus) {
                slideScroller.current.scrollLeft += 1
            }

            else if (buttonLeftFocus) {
                slideScroller.current.scrollLeft -= 1
            }

            else {
                const one = 1
            }
        }, 10)

        return () => {
            clearInterval(scrollInterval)
        }
    }, [buttonRightFocus, buttonLeftFocus])

    return (
        <div className="detail-box">
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Gallery
                        </h2>
                    </div>
                    <div className="row mb-5 mb-md-5">
                        <div className="col-md-8 mx-auto" >
                            <BSCarousel images={images} sliderIndex={sliderIndex} changeSliderIndex={changeSliderIndex} />
                        </div>
                    </div>
                    <div className="row container-fluid mx-auto" style={{ height: "10em", position: 'relative' }}>
                        <div ref={slideScroller} className="row gallery_slider container-fluid mx-auto" style={{ height: '10em', overflowX: 'auto', overflowY: "hidden", whiteSpace: 'nowrap', display: 'block' }}>

                            {images.map((image, index) => {
                                return <div id={index} className="col-6 col-md-3 ml-1 ml-md-1" onClick={handleClick} style={{ backgroundColor: index != sliderIndex ? "#000000d0" : "darkred", height: 'inherit', display: 'inline-block', float: 'none', border: index != sliderIndex ? '2px solid transparent' : "2px solid darkred", overflowY: 'hidden' }}>
                                    <img id={index} src={image} alt="" style={{ height: 'inherit', position: "absolute", left: "50%", transform: "translatex(-50%)", maxWidth: '100%' }} />
                                </div>
                            })}
                        </div>
                        <button onTouchStart={scrollRight} onMouseDown={scrollRight} onMouseUp={stopScroll} style={{ position: 'absolute', padding: 0, width: "3em", height: "3em", top: "50%", left: "95%", transform: "translatey(-90%)", backgroundColor: "#00000080", border: "1px solid darkred", borderRadius: "50%" }}>{">"}</button>
                        <button onTouchStart={scrollLeft} onMouseDown={scrollLeft} onMouseUp={stopScroll} style={{ position: 'absolute', padding: 0, width: "3em", height: "3em", top: "50%", right: "95%", transform: "translatey(-90%)", backgroundColor: "#00000080", border: "1px solid darkred", borderRadius: "50%" }}>{"<"}</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Gallery;