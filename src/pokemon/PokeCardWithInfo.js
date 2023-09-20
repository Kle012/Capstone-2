import React from "react";
import { Link } from "react-router-dom";


const PokeWithFav = ({ id, image, name }) => {

    return (
        <div className="container text-center">
            <div className="">
                <div className="">
                    <Link className='' to={`/pokemon/${name}`} key={id}>
                        <figure className="figure">
                            <img src={image} alt={name} className="firgure-img img-fluid rounded" />
                            <figcaption className="figure-caption">
                                <h4 className="text-monospace">{id} - {name.toUpperCase()}</h4>
                            </figcaption>

                        </figure>
                    </Link>
                </div>
            </div>
        </div>
    )
}





export default PokeWithFav;