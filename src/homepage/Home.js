import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";

/** Homepage of site
 * 
 * Shows welcome message or login/register 
 * 
 * Route for /
 * 
 * Routes -> Homepage
 * 
*/

const Home = () => {
    const { currUser } = useContext(UserContext);

    return (
        <div className="homepage">
            <div className="container text-center">
                <h1 className="mb-4 font-weight-bold">Pokemon</h1>
                <p className="lead">
                    Let's Catch 'Em All!
                </p>
                {currUser
                    ? <h2>
                        Welcome back, {currUser.firstName || currUser.username}!
                    </h2>
                    : (
                        <p>
                            <Link className="btn btn-primary font-weight-bold mr-3" to='/login'>
                                Log In
                            </Link>
                            <Link className="btn btn-primary font-weight-bold" to='/register'>
                                Sign Up
                            </Link>
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Home;
