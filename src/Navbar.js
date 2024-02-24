import React from 'react';

function Navbar(props) {
    return (
        <React.Fragment>
            <header className="header_section">
                <div className="header_top">
                    <div className="container-fluid">
                        <div className="contact_nav">
                            <a href="">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span>
                                    Call : +234 8088825552, +234 9055555597
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
                                    <img className= 'nav-logo' src="images/nav-logo.png" alt="" />
                                </span>
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" onMouseOver={(e) => {e.target.style = {color: 'darkgreen'}}} style={props.pathName === '/' ? {color: 'darkgreen', fontWeight: 'bold'} : {color: 'black', fontWeight: 'lighter'}}>Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about" style={props.pathName === '/about' ? {color: 'darkgreen', fontWeight: 'bold'} : {color: 'black', fontWeight: 'lighter'}} > About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="services">Services</a>
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