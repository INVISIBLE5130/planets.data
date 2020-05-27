import React, {useReducer} from "react"
import {PlanetContext} from "./planetContext"
import {planetReducer} from "./planetReducer"
import {ClearPlanet, SearchPlanet, SetLoading} from "../Types"
import axios from 'axios'

export const PlanetState = ({children}) => {
    const initialState = {
        data: [],
        loading: false
    }
    const [state, dispatch] = useReducer(planetReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
            `http://localhost:3000/data?q=${value}&`
        )

        dispatch({
            type: SearchPlanet,
            payload: response.data
        })
    }

    const clearPlanets = () => ({type: ClearPlanet})

    const setLoading = () => ({type: SetLoading})

    const {loading, data} = state

    return(
        <PlanetContext.Provider value={{
            setLoading, search, clearPlanets,
            loading, data
        }}>
            {children}
        </PlanetContext.Provider>
    )
}