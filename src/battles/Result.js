import React from "react";

const playerWin = () => {
    return <p>First pokemon wins!</p>
}

const computerWin = () => {
    return <p>Second pokemon wins!</p>
}

const Result = ({ firstTeam, secondTeam }) => {

    let exp1 = firstTeam.reduce((acc, pokemon) => acc + pokemon, 0);
    console.log(exp1);

    let exp2 = secondTeam.reduce((acc, pokemon) => acc + pokemon, 0);
    console.log(exp2);

    return (
        <div>
            <div>
                {exp1 > exp2 ? playerWin() : exp1 < exp2 ? computerWin() : <p>Tie!</p>}
            </div>
        </div>
    )
}


export default Result;