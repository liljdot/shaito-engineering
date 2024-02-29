import React from "react";
import Carousel from "./Carousel";

const BSModal = (props) => {
    return (
        <>
            {/* {modal ? < Modal toggleModal={toggleModal} /> : <></>} */}
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" style={{display: 'none'}}>
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header detail-box">
                            <h2 className="modal-title" id="exampleModalCenterTitle">Maintenance</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="modal-details detail-box">
                                            <p>
                                                We specialize in the maintenance of heavy-duty equipment, focusing on the rebuilding and upkeep of various industrial machinery. Our expertise extends to cranes, hydraulic pumps and systems, as well as generators and engines from different brands.
                                                <br></br>
                                                <br></br>
                                                Additionally, we are proficient in electric pump services. We excel in solar installations, particularly 3-phase hybrid systems, offering OEM/ODM solutions for 10kw to 300kw off-grid setups complete with WiFi monitoring.
                                                <br></br>
                                                <br></br>
                                                In the realm of vessel maintenance, leasing, and logistics, we provide comprehensive services to meet the diverse needs of our clients. Furthermore, we offer load cells ranging from 5 tons to 300 tons to cater to precise measurement requirements.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        < Carousel carouselID='hello' />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer detail-box">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BSModal;