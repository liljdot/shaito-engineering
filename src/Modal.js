import React from "react";
import Carousel from "./Carousel";

function Modal(props) {
    return (
        <div className="overlay container-fluid" style={{ margin: 0 }} onClick={props.toggleModal}>
            <div className="row">
                <div className=" popUp col-md-8 col-sm-8  col-xs-1 mx-auto" onClick={e => e.stopPropagation()}>
                    <div className="row p-md-5 p-3">
                        <div className="col-md-5 detail-box popup-col">
                            <h2>Maintenance</h2>
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
                        <div className="col-md-7 pop">
                        <Carousel id = 'carousellll'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;