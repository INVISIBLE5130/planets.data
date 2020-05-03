import {ClearUsers, GetRepositories, GetUser, SearchUsers, SetLoading} from "../Types";

const handlers = {
    [SearchUsers]: (state, action) => ({...state, users: action.payload, loading: false}),
    [GetRepositories]: (state, {payload}) => ({...state, repositories: payload, loading: false}),
    [GetUser]: (state, {payload}) => ({...state, user: payload, loading: false}),
    [SetLoading]: state => ({...state, loading: true}),
    [ClearUsers]: state => ({...state, users: []}),
    default: state => state
}

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.default
    return handler(state, action)
}