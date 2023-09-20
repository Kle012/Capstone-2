import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class PokemonApi {
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${PokemonApi.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;

        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }


    /** Individual API routes */

    /** Get current user */

    static async getCurrUser(username) {
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    /** Get token from login */

    static async login(data) {
        let res = await this.request(`auth/login`, data, "post");
        return res.token;
    }

    /** Get token from signup */

    static async signup(data) {
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
    }

    /** Save user profile page */

    static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }

    /** Get details on a Pokemon by name */

    static async getOnePokemon(name) {
        let res = await this.request(`pokemon/${name}`);
        return res.pokemon;
    }

    /** Get Pokedex */

    static async getAllPokemon() {
        let res = await this.request("pokemon");
        return res;
    }

    /** Get random pokemon for battle */

    static async getRandom() {
        let res = await this.request(`battles`);
        return res;
    }

}


export default PokemonApi;