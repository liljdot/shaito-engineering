import React from "react";
import BSCarousel from "./BSCarousel";

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
                            <BSCarousel/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery;