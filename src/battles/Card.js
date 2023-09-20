import React from "react";


function Card(props) {
    return (
        <div className="border border-dark">
            <h2 className="text-center text-capitalize text-monospace">{props.name}</h2>
            <img className="rounded mx-auto d-block" src={props.image} alt={props.name}></img>
            <p className="text-center font-italic text-monospace">Base EXP: {props.exp}</p>
        </div>
    );
}

export default Card;