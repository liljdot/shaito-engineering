import React from "react";
import Carousel from "./Carousel";
import BSCarousel from "./BSCarousel";

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
                            <h2 className="modal-title" id="exampleModalCenterTitle">{props.content.title}</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="modal-details detail-box">
                                            <p dangerouslySetInnerHTML={{__html: props.content.content}}></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        < BSCarousel images = {props.content.images}/>
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