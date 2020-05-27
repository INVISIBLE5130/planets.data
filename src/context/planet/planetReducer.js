import {ClearPlanet, SearchPlanet, SetLoading} from "../Types";

const handlers = {
    [SearchPlanet]: (state, action) => ({...state, data: action.payload, loading: false}),
    [SetLoading]: state => ({...state, loading: true}),
    [ClearPlanet]: state => ({...state, data: []}),
    default: state => state
}

export const planetReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.default
    return handler(state, action)
}