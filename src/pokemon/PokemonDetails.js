import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PokemonApi from "../api";
import Loading from "../helpers/Loading";
import './PokemonDetails.css';

/** Showing details on a Pokemon
 * 
 * Component for route /pokemon/:name
 * 
 */

const PokemonDetails = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function getDetails() {
            let pokemon = await PokemonApi.getOnePokemon(name);
            setPokemon(pokemon);
        }
        getDetails();
    }, [name])


    if (!pokemon) return <Loading />

    return (
        <div className="container">
           <h4>{pokemon.name.toUpperCase()}</h4>
           <img src={pokemon.sprites.front_default} alt={pokemon.name} />

           <div>
            <h5>
                Base Experience: {pokemon.base_experience}
            </h5>

            <h5>
                HP: {pokemon.stats[0].base_stat}
            </h5>
            <h5>
                Attack: {pokemon.stats[1].base_stat}
            </h5>
            <h5>
                Defense: {pokemon.stats[2].base_stat}
            </h5>
            <h5>
                Special-attack: {pokemon.stats[3].base_stat}
            </h5>
            <h5>
                Special-defense: {pokemon.stats[4].base_stat}
            </h5>
            <h5>
                Speed: {pokemon.stats[5].base_stat}
            </h5>
           </div>

           <Link to={`/pokemon`}><button className="btn btn-primary">Back</button></Link>
        </div>   
    )
}

export default PokemonDetails;