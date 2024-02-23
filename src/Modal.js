import React from "react";

function Modal(props) {
    return (
        <div className="overlay container-fluid" style={{ margin: 0 }} onClick={props.toggleModal}>
            <div className="row">
                <div className=" popUp col-md-8 col-sm-8  col-xs-1 mx-auto">
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    )
}

export default Modal;