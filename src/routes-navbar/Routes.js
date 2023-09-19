import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../homepage/Home";

import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import UserProfile from "../profiles/UserProfile";
import Pokedex from "../pokemon/Pokedex";
import PokemonDetails from "../pokemon/PokemonDetails";
import Battle from "../battles/Battle";
import AuthRoutes from "./AuthRoutes";


const Routes = ({ login, signup }) => {
    return (
        <div className="pt-5">
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/login'>
                    <LoginForm login={login} />
                </Route>
                <Route exact path='/register'>
                    <SignUpForm signup={signup} />
                </Route>

                <AuthRoutes exact path='/pokemon'>
                    <Pokedex />
                </AuthRoutes>
                <AuthRoutes exact path='/pokemon/:name'>
                    <PokemonDetails />
                </AuthRoutes>

                <AuthRoutes exact path='/battles'>
                    <Battle />
                </AuthRoutes>

                <AuthRoutes exact path='/profile'>
                    <UserProfile />
                </AuthRoutes>

                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default Routes;