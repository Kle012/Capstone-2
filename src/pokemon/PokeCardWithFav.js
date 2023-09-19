import React, { useContext, useEffect, useState } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";


const PokeWithFav = ({ id, image, name, type }) => {
    const { inFavorite, addToFav } = useContext(UserContext);
    const [favorited, setFavorited] = useState();

    useEffect(() => {
        setFavorited(inFavorite(id));
    }, [id, inFavorite]);

    const handleFavorite = async (e) => {
        if (inFavorite(id)) return;
        addToFav(id);
        setFavorited(true);
    }

    
    return (
        <div>
            {favorited}
            <Link className='' to={`/pokemon/${name}`} key={id}>
                <div>
                    <h4>{id}</h4>
                    <h2>{name.toUpperCase()}</h2>
                    <h6>{type.toUpperCase()}</h6>
                    <img src={image} alt={name} />
                </div>
            </Link>
            <div>
                <button onClick={handleFavorite}>
                    {favorited ? 'Favorited' : 'Mark Favorite'}
                </button>
            </div>
        </div>
    )
}





export default PokeWithFav;