import React from "react";


function Card(props) {
    return (
        <div className="">
            <h2 className="">{props.name.toUpperCase()}</h2>
            <img className="" src={props.image} alt={props.name}></img>
            <p className="">EXP: {props.exp}</p>
        </div>
    );
}

export default Card;