import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext()

export function GithubProvider({ children }) {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false

    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    return <GithubContext.Provider value={{
        dispatch,
        isLoading: state.isLoading,
        users: state.users,
        user: state.user,
        repos: state.repos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;

