import React, {useReducer} from "react"
import {GithubContext} from "./githubContext"
import {githubReducer} from "./githubReducer"
import {ClearUsers, GetRepositories, GetUser, SearchUsers, SetLoading} from "../Types"
import axios from 'axios'

const ClIENT_ID = process.env.REACT_APP_CLIENT_ID
const ClIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const addClientData = url => {
    return `${url}client_id=${ClIENT_ID}&client_secret=${ClIENT_SECRET}`
}

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repositories: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
            addClientData(`https://api.github.com/search/users?q=${value}&`)
        )

        dispatch({
            type: SearchUsers,
            payload: response.data.items
        })
    }

    const getUser = async name => {
        setLoading()

        const response = await axios.get(
            addClientData(`https://api.github.com/users/${name}?`)
        )

        dispatch({
            type: GetUser,
            payload: response.data
        })
    }

    const getRepositories = async name => {
        setLoading()

        const response = await axios.get(
            addClientData(`https://api.github.com/users/${name}/repositories?per_page=5&`)
        )

        dispatch({
            type: GetRepositories,
            payload: response.data
        })
    }

    const clearUsers = () => ({type: ClearUsers})

    const setLoading = () => ({type: SetLoading})

    const {user, users, repositories, loading} = state

    return(
        <GithubContext.Provider value={{
            setLoading, search, getUser, getRepositories, clearUsers,
            user, users, repositories, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}