import React from "react";
import PokeCardWithInfo from "./PokeCardWithInfo";


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
                            <PokeCardWithInfo
                                key={item.id}
                                id={item.id}
                                image={item.sprites.front_default}
                                name={item.name}
                            />
                        ))
                    }
        </div >
    )
}


export default PokemonCard;