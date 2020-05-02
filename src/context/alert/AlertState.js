import React, {useReducer} from "react";
import {AlertContext} from "./AlertContext";
import {alertReducer} from "./AlertReducer";
import {HideAlert, ShowAlert} from "../Types";

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null)

    const hide = () => dispatch({type: HideAlert})
    const show = (text, type = 'secondary') => {
        dispatch({
            type: ShowAlert,
            payload: {type, text}
        })
    }

    return(
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}