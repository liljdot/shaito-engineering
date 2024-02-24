import React, { Fragment } from "react";

function Services() {
    return (
        <Fragment>
            <div className="hero_area">
                {/* <!-- header section strats --> */}

                {/* <!-- end header section --> */}
                {/* <!-- slider section --> */}
                <section className="services slider_section ">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail-box">
                                    <h1>
                                        Our Capabilities <br />
                                        and <br />
                                        Specialties
                                    </h1>
                                    <p>
                                        Shaito Engineering & Logistics offers a formidable arsenal of heavy-duty equipment for  lease, empowering industries to conquer the toughest challenges with ease. From  towering cranes that reach for the sky to rugged earthmovers that reshape landscapes,  our fleet stands ready to transform visions into reality. Whether it's construction,  infrastructure development, or logistical operations, our cutting-edge machinery  delivers unmatched performance, reliability, and efficiency. Partner with us to harness  the strength of innovation and drive your projects forward with confidence.
                                        <br></br>
                                        <ul>
                                            <li>Cranes</li>
                                            <li>Generators</li>
                                            <li>Hydraulic Pump</li>
                                            <li>Electric Water Pump</li>
                                        </ul>
                                    </p>
                                    <a href="">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end slider section --> */}
            </div>
            <section className="professional_section about crane_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 mb-3 mb-sm-3">
                                    {/*pic here*/}
                                    <img src="images/services-banner.jpeg" alt="" />
                                </div>
                                <div className="col-md-6">
                                    {/*pic here*/}
                                    <img src="images/services-banner.jpeg" alt="" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="detail-box">
                                <h2>
                                    Floating <br />
                                    Crane
                                </h2>
                                <p>
                                Floating crane, also known as a crane vessel, is a type of crane that is mounted on a  barge or a ship for use in marine construction projects.like seas and oil rigs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Services;