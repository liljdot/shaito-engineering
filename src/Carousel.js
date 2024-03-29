import React from "react";
function Carousel(props) {
    const carouselId = props.carouselId
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-touch = "true" data-interval="1000">
                <ol className="carousel-indicators">
                    <li data-target={`#${carouselId}`} data-slide-to="0" className="active"></li>
                    <li data-target={`#${carouselId}`} data-slide-to="1"></li>
                    <li data-target={`#${carouselId}`} data-slide-to="2"></li>
                    <li data-target={`#${carouselId}`} data-slide-to="3"></li>
                    <li data-target={`#${carouselId}`} data-slide-to="4"></li>
                    <li data-target={`#${carouselId}`} data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="images/carousel1.jpeg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/fso-1.jpeg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/gen-3.jpeg" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/hyd-3.jpeg" alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/fso-2.jpeg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/hyd-1.jpeg" alt="Third slide" />
                    </div>

                </div>
                <a className="carousel-control-prev" href={`#${carouselId}`} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${carouselId}`} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousel;