import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";
import logo from '../image/pokemon.png';
import './Home.css';


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
                <img src={logo} alt="homeLogo" className="logoImage"/>
                {currUser
                    ? <h2 className="text-monospace mt-5 welcomeText">
                        Welcome back, {currUser.firstName || currUser.username}!
                    </h2>
                    : (
                        <p>
                            <Link className="btn btn-warning text-monospace mr-3" to='/login'>
                                LOG IN
                            </Link>
                            <Link className="btn btn-warning text-monospace" to='/register'>
                                SIGN UP
                            </Link>
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Home;
