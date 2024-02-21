import React from 'react';

function Navbar() {
    return (
        <React.Fragment>
            <header className="header_section">
                <div className="header_top">
                    <div className="container-fluid">
                        <div className="contact_nav">
                            <a href="">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span>
                                    Call : +234 8088825551, +234 9055555597
                                </span>
                            </a>
                            <a href="">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <span>
                                    Email : info@shaitoengineering.com
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                    Shaito Engineering
                                </span>
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about"> About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="service.html">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Navbar;