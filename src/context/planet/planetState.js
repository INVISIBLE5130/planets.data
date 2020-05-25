import React, {useReducer} from "react"
import {PlanetContext} from "./planetContext"
import {planetReducer} from "./planetReducer"
import {ClearPlanet, GetPlanetDescription, GetPlanet, SearchPlanet, SetLoading} from "../Types"
import axios from 'axios'

export const PlanetState = ({children}) => {
    const initialState = {
        data: [],
        name: "",
        loading: false,
        description: ""
    }
    const [state, dispatch] = useReducer(planetReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
            `http://localhost:3000/data?q=${value}&`
        )

        console.log(response)

        dispatch({
            type: SearchPlanet,
            payload: response.data.items
        })
    }

    const getPlanet = async name => {
        setLoading()

        const response = await axios.get(
            `http://localhost:3000/data/${name}?`
        )

        dispatch({
            type: GetPlanet,
            payload: response.data
        })
    }

    const getPlanetDescription = async description => {
        setLoading()

        const response = await axios.get(
            `http://localhost:3000/data/${description}/description?per_page=9&`
        )

        dispatch({
            type: GetPlanetDescription,
            payload: response.data
        })
    }

    const clearPlanets = () => ({type: ClearPlanet})

    const setLoading = () => ({type: SetLoading})

    const {name, description, loading, data} = state

    return(
        <PlanetContext.Provider value={{
            setLoading, search, getPlanet, getPlanetDescription, clearPlanets,
            name, description, loading, data
        }}>
            {children}
        </PlanetContext.Provider>
    )
}