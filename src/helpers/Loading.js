import React from "react";
import loading from '../image/loading-screen.gif';
import './Loading.css';


const Loading = () => {
    return (
        <div className="container">
            <img src={loading} alt="loading" className="Loading"/>
        </div>
    )
}

export default Loading;