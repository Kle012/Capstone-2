import React from "react";
import PokeWithFav from "./PokeCardWithFav";
import './PokemonCard.css';

/** Show info about a Pokemon on the list
 * 
 * Rendered by PokemonList to show a 'card' for each Pokemon
 * 
 * Pokedex -> PokemonCard
 * 
 */

const PokemonCard = ({ pokemon }) => {

    return (
        <div>
            {
                pokemon.map((item) => (
                    <PokeWithFav
                        key={item.id}
                        id={item.id}
                        image={item.sprites.front_default}
                        name={item.name}
                        type={item.types[0].type.name}
                    />
                ))
            }
        </div >
    )
}


export default PokemonCard;