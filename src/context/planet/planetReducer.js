import {ClearPlanet, GetPlanetDescription, GetPlanet, SearchPlanet, SetLoading} from "../Types";

const handlers = {
    [SearchPlanet]: (state, action) => ({...state, name: action.payload, loading: false}),
    [GetPlanetDescription]: (state, {payload}) => ({...state, description: payload, loading: false}),
    [GetPlanet]: (state, {payload}) => ({...state, name: payload, loading: false}),
    [SetLoading]: state => ({...state, loading: true}),
    [ClearPlanet]: state => ({...state, name: []}),
    default: state => state
}

export const planetReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.default
    return handler(state, action)
}