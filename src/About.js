import React from "react";
import Footer from "./Footer";

function About() {
    return (
        <div>
            <div className="hero_area">
            </div>

            {/* <!-- about section --> */}

            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="detail-box">
                                <h2>
                                    About us
                                </h2>
                                <p>
                                    Shaito engineering & logistics (SEL) is a young dynamic organization with it's professional experiences deeply rooted in providing offshore logistics, maintenance of heavy duty mechanical oquipments, like Generators, Cranes, hydraulic pumps, electrical pumps, solar installation & maintenance, vessel/cargo logistics and other technical
                                    works and services in the oil-and-gas sector.
                                    <br></br>
                                    Over the past few years, SEL has built a reputation for integrity, discipline and an unwavering commitment to the highest performance in all facets of our business and operations as evidenced through our dedication to our core values. Today measured growth has offered us the opportunity to expand our business and that expansion emerges as SHAITO ENGINEERING & LOGISTICS incorporated under the companies and allied matters Act of 1990
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="img-box">
                                <img src="images/aboutus-img.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end about section --> */}

            <section className="professional_section about layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="images/professional-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="detail-box">
                                <h2>
                                    Mission <br />
                                    Statement
                                </h2>
                                <p>
                                    Our mission is to deliver highly optimum and reliable logistics solutions with outstanding services that meet the demand in the oil-and-gas industry while preparing for the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="hero_area vision">
                {/* <!-- header section strats --> */}

                {/* <!-- end header section --> */}
                {/* <!-- slider section --> */}
                <section className="slider_section ">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail-box">
                                    <h1>
                                        Vison <br />
                                        and <br />
                                        Strategy
                                    </h1>
                                    <p>
                                        Our strategy is to join our experience and integrate our professionalism with the opportunities that will be provided
                                        by the logistics service and engineering world. We install solar panels from all ranges of watts and carry out routine maintenance on them. We provide ourselves with renowned professionals who are highly skilled, experienced and resourceful, demonstrating a high level competence in their core functions. SEL has established reputation for safely delivering complex work over projects on time and on budget.
                                        <br></br>
                                        <br></br>
                                        Our vision is to be a competent engineering and logistics provider in the industry and achieving that dominance through efficient services to our customers / clients, thereby creating a positive relationship.
                                        <br></br>

                                    </p>
                                    <a href="/contact">
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
            <section className="professional_section ethics layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="images/Upscales.ai_1708637310187.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="detail-box">
                                <h2>
                                    Our Philosophy <br />
                                    and Ethics
                                </h2>
                                <p>
                                    Our success stems from what we believe in:
                                    <ul>
                                        <li>Providing superior, yet outstanding service to our customers nationwide</li>
                                        <li>Investing in training, research and development to maintain and improve our technical knowledge & skills</li>
                                        <li>Insisting on honesty and integrity with customers suppliers and all third party with one another</li>
                                    </ul>
                                </p>
                                <br></br>
                                <h3>Ethics</h3>
                                <p>We are uncompromising in our integrity, honesty, discipline and fairness in all our engagements.</p>
                                <h3>Safety and Health</h3>
                                <p>We strive to keep our people safe from harm whilst providing a healthy work environment</p>
                                <h3>People</h3>
                                <p>We aspire to be the employer of choice in our industry We inspire each other with important work full of purpose, challenging development opportunities and rewarding careers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- info section --> */}



            {/* <!-- end info_section --> */}

            {/* <!-- footer section --> */}
            < Footer/>
            {/* <!-- footer section --> */}


        </div>
    )
}

export default About;