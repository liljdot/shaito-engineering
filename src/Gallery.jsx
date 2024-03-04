import React from "react";
import BSCarousel from "./BSCarousel";

const images = [
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
    return (
        <>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Gallery
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <BSCarousel images={images} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery;