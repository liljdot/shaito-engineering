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
                                    <img src="images/red-crane.jpeg" alt="" />
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
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="detail-box">
                                <h2>
                                    Arial Cranes
                                </h2>
                                <p>
                                    Aerial Crane. Also known as flying cranes, aerial cranes are special types used to lift loads in areas that are inaccessible by land, oil rigs
                                    <br />
                                    <br />
                                    Aerial cranes resemble helicopters in appearance. Heavy loads are carried by this type  of crane, They are also referred to as sky cranes.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="img-box row">
                                <div className="col-lg-6 col-md-6">
                                    <img src="images/arial-crane-1.jpeg" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <img src="images/arial-crane-2.jpeg" alt="" />
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="professional_section about crane_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="img-box row">
                                <div className="col-lg-6 col-md-6">
                                    {/*pic here*/}
                                    <img src="images/truck-crane-1.jpeg" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    {/*pic here*/}
                                    <img src="images/truck-crane-2.jpeg" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="detail-box">
                                <h2>
                                    Truck <br />
                                    Cranes
                                </h2>
                                <p>
                                Truck Cranes. As the name suggests, truck cranes or truck-mounted cranes can travel  efficiently on the road due to their unique build. They are hydraulically powered lifting  machine mounted on a truck or trailer. They are unique not just for construction sites also serve for logistics purposes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="detail-box">
                            <h2 className="text-center">
                                Generators
                            </h2>
                            <h4>
                            We rebuild and maintenance industrial and marine generators & engines of different brands:
                            </h4>
                        </div>
                    </div>
                    <div className="row generator-brand">
                        <div className="col"><a href="">Caterpillar Generators</a></div>
                        <div className="col"><a href="">Atlas Copco</a></div>
                        <div className="col"><a href="">Duetz</a></div>
                        <div className="col"><a href="">FG Wilson Generators</a></div>
                        <div className="col"><a href="">Fireman</a></div>
                        <div className="col"><a href="">Kohler</a></div>
                        <div className="col"><a href="">Cummins Generator</a></div>
                        <div className="col"><a href="">Perkins</a></div>
                        <div className="col"><a href="">Lister Peter</a></div>
                        <div className="col"><a href="">John Deeref</a></div>
                        <div className="col"><a href="">Detroit</a></div>
                    </div>
                    <div className="row img-box">
                        <img src="" alt="" className="col-md-6" />
                        <img src="" alt="" className="col-md-6" />
                        <img src="" alt="" className="col-md-6" />
                        <img src="" alt="" className="col-md-6" />
                        <img src="" alt="" className="col-md-6" />
                        <img src="" alt="" className="col-md-6" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Services;