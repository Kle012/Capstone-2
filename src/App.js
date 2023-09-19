import React, { useEffect, useState } from 'react';
import Navigation from './routes-navbar/Navigation';
import Routes from './routes-navbar/Routes';
import useLocalStorage from './hooks/useLocalStorage';
import jwt from 'jsonwebtoken';
import PokemonApi from './api';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './auth/UserContext';
import Loading from './helpers/Loading';


/** Key name for token stored in localStorage for re-login */
export const STORED_TOKEN = 'secret-token';

function App() {
  const [data, setData] = useState(false);
  const [favoriteId, setFavoriteId] = useState(new Set([]));
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(STORED_TOKEN);

  useEffect(() => {
    async function getCurrUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          PokemonApi.token = token;

          let currUser = await PokemonApi.getCurrUser(username);
          setCurrUser(currUser);
          setFavoriteId(new Set(currUser.favorites));
        }
        catch (e) {
          setCurrUser(null);
        }
      }
      setData(true);
    }

    setData(false);
    getCurrUser();
  }, [token])

  /** Log out */
  const logout = () => {
    setCurrUser(null);
    setToken(null);
  }

  /** Sign up */
  const signup = async (signupInfo) => {
    try {
      let token = await PokemonApi.signup(signupInfo);
      setToken(token);
      return { success: true }
    } catch (errors) {
      return { success: false, errors }
    }
  }

  /** Log in */
  const login = async (loginInfo) => {
    try {
      let token = await PokemonApi.login(loginInfo);
      setToken(token);
      return { success: true }
    } catch (errors) {
      return { success: false, errors }
    }
  }

  /** Check if pokemon has been favorited */
  const inFavorite = (id) => {
    return favoriteId.has(id);
  }

  /** Add to favorite */
  const addToFav = (id) => {
    if (inFavorite(id)) return;
    PokemonApi.saveFavorite(currUser.username, id);
    setFavoriteId(new Set([...favoriteId, id]));
  }

  if (!data) return <Loading />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currUser, setCurrUser, inFavorite, addToFav }}>
        <div className='App'>
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}



export default App;
