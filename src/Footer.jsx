import React from "react";

const Footer = () => {
     return (
        <>
             <section className="info_section ">
                <div className="container">
                    <h4>
                        Get In Touch
                    </h4>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="info_items">
                                <div className="row">
                                    <div className="col-md-4" >
                                        <a href="https://maps.google.com/?q=4.933837,6.950658">
                                            <div className="item ">
                                                <div className="img-box ">
                                                    <i className="fa fa-map-marker" aria-hidden="true" ></i>
                                                </div>
                                                <p>
                                                    Aluu Road, Choba, Rivers State.
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="tel:+234 8088825552">
                                            <div className="item ">
                                                <div className="img-box ">
                                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                                </div>
                                                <p>
                                                    +234 8088825552
                                                    <br></br>
                                                    +234 905 5555597
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="mailto:info@shaitoengineering.com">
                                            <div className="item ">
                                                <div className="img-box">
                                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                                </div>
                                                <p>
                                                    info@shaitoengineering.com
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-box">
                    <h4>
                        Follow Us
                    </h4>
                    <div className="box">
                        <a href="">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </section>



            {/* <!-- end info_section --> */}

            {/* <!-- footer section --> */}
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayDateYear"></span> All Rights Reserved By
                        <a href="/">Jehu</a>
                    </p>
                </div>
            </footer>
        </>
     )
}

export default Footer;