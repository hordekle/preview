import React from "react";
import "./Bahu.css";

const Bahu = ({ imageSrc }) => {
    return (
        <div className="bahu">
            <img src= {imageSrc} alt="bahu" className="bahu_image"/>
            <h1 className="bahu_title">Made By Bahu</h1>
        </div>
    );
}

export default Bahu;