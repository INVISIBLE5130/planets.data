import {HideAlert, ShowAlert} from "../Types";

const handlers = {
    [ShowAlert]: (state, action) => action.payload,
    [HideAlert]: () => null,
    default: state => state
}

export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.default
    return handler(state, action)
}