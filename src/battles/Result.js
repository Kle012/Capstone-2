import React from "react";

const playerWin = () => {
    return <h4>Left pokemon wins!</h4>
}

const computerWin = () => {
    return <h4>Right pokemon wins!</h4>
}

const Result = ({ firstTeam, secondTeam }) => {

    let exp1 = firstTeam.reduce((acc, pokemon) => acc + pokemon, 0);
    let exp2 = secondTeam.reduce((acc, pokemon) => acc + pokemon, 0);

    return (
        <div className="mt-4">
            <div className="text-monospace text-center text-uppercase p-3 my-5 bg-danger text-white">
                {exp1 > exp2 ? playerWin() : exp1 < exp2 ? computerWin() : <h4>TIE!</h4>}
            </div>
        </div>
    )
}


export default Result;