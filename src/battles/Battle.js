import React, { useEffect, useState } from "react";
import PokemonApi from "../api";
import Card from "./Card";
import Result from "./Result";
import Loading from "../helpers/Loading";
import { Link } from "react-router-dom";
import pokegame from '../image/pokegame.png';
import './Battle.css';


const Battle = () => {
    const [teamOne, setTeamOne] = useState();
    const [teamTwo, setTeamTwo] = useState();
    const [firstExp, setFirstExp] = useState();
    const [secondExp, setSecondExp] = useState();


    async function getTeamOne() {
        let first = await PokemonApi.getRandom();
        let res = first.response;
        setFirstExp(state => {
            state = [res.base_experience];
            return state;
        });

        setTeamOne(teamOne => {
            teamOne = [res];
            return teamOne;
        });
    }

    async function getTeamTwo() {
        let second = await PokemonApi.getRandom();
        let res = second.response;
        setSecondExp(state => {
            state = [res.base_experience];
            return state;
        });

        setTeamTwo(teamTwo => {
            teamTwo = [res];
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
    console.log(teamOne);

    return (
        <div className="battleStyle">
            <div className="container">
                <img src={pokegame} alt="pokegame" className="pokegameIcon" />
                <div className="row mx-md-n5">
                    <div className="col px-md-5">
                        <div className="p-3 border bg-light">
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
                    </div>
                    <div className="col px-md-5">
                        <div className="p-3 border bg-light">
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
                    </div>
                </div>

                <Result firstTeam={firstExp} secondTeam={secondExp} />
            </div>

            <div className="buttonGroup">
                <button onClick={handleRefresh} type="button" className="btn btn-dark againbtn">Again!</button>

                <Link to='/pokemon'><button type="button" className="btn btn-dark">Pokedex</button></Link>
            </div>

        </div>
    )
}


export default Battle;