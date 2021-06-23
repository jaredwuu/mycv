import React from "react";

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                Sent Successfully!!!
                {props.content}
            </div>
        </div>
    );
};

export default Popup;