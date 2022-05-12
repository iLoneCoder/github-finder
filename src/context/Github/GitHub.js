import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export function GithubProvider({ children }) {
    const initialState = {
        users: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const searchUsers = async (name) => {
        setLoading();
        const params = new URLSearchParams({
            q: name
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                "Authorization": `${GITHUB_TOKEN}`
            }
        })

        const {items} = await response.json();
        // console.log(data);
        dispatch({
            type: "GET_USERS",
            payload: items
        })
    }

    const setLoading = () => {
        dispatch({
            type: "SET_LOADING"
        })
    }

    const getUser = async (name) => {
        const response = await fetch(`${GITHUB_URL}/users/${name}`, {
            headers: {
                "Authorization": `${GITHUB_TOKEN}`
            }
        })

        const data = await response.json();
        console.log(data);
        dispatch({
            type: "A_USER",
            payload: [data]
        })
    }

    const cleanUsers = () => {
        if (state.users.length > 0) {
            dispatch({
                type: "CLEAN_USERS"
            })
        }
    }

    return <GithubContext.Provider value={{
        searchUsers,
        cleanUsers,
        getUser,
        isLoading: state.isLoading,
        users: state.users
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;
