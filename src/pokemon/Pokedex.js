import React, { useEffect, useState } from "react";
import PokemonApi from "../api";
import PokemonCard from "./PokemonCard";
import Loading from "../helpers/Loading";
// import './Pokedex.css';


const Pokedex = () => {
    const [pokeData, setPokeData] = useState([]);

    const pokeFun = async () => {
        const res = await PokemonApi.getAllPokemon();
        getPokemon(res.pokedex.results);
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await PokemonApi.getOnePokemon(item.name);
            setPokeData(state => {
                state = [...state, result];
                state.sort((a, b) => a.id > b.id ? 1 : -1);
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
    },[])

    if (!pokeData) return <Loading />

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PokemonCard pokemon={pokeData} />
                    </div>
                </div>
            </div>
        </>
    )

}


export default Pokedex;