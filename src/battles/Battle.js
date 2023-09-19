import React, { useEffect, useState } from "react";
import PokemonApi from "../api";
import Card from "./Card";
import Result from "./Result";
import Loading from "../helpers/Loading";
import { Link } from "react-router-dom";


const Battle = () => {
    const [teamOne, setTeamOne] = useState();
    const [teamTwo, setTeamTwo] = useState();
    const [firstExp, setFirstExp] = useState();
    const [secondExp, setSecondExp] = useState();


    async function getTeamOne() {
        let first = await PokemonApi.getRandom();
        setFirstExp(state => {
            state = [first.response.base_experience];
            return state;
        });

        setTeamOne(teamOne => {
            teamOne = [first.response];
            return teamOne;
        });
    }

    async function getTeamTwo() {
        let second = await PokemonApi.getRandom();
        setSecondExp(state => {
            state = [second.response.base_experience];
            return state;
        });
    
        setTeamTwo(teamTwo => {
            teamTwo = [second.response];
            return teamTwo;
        });
    }

    useEffect(() => {
        getTeamOne();
        getTeamTwo();
    }, [])

    function handleRefresh() {
        window.location.reload(true);
    }

    if (!teamOne || !teamTwo) return <Loading />

    return (
        <div>
            <div>
                {teamOne.map((member) => (
                    <Card
                        key={member.id}
                        name={member.name}
                        exp={member.base_experience ? member.base_experience : 0}
                        image={member.sprites.front_default}
                    />
                ))
                }
            </div>
            <div>
                {teamTwo.map((member) => (
                    <Card
                        key={member.id}
                        name={member.name}
                        exp={member.base_experience ? member.base_experience : 0}
                        image={member.sprites.front_default}
                    />
                ))
                }
            </div>

            <Result firstTeam={firstExp} secondTeam={secondExp} />
            
            <button onClick={handleRefresh}>Again!</button>
            
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}


export default Battle;