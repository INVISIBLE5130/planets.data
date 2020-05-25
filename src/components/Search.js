import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/AlertContext";
import {PlanetContext} from "../context/planet/planetContext";

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const planet = useContext(PlanetContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        planet.clearPlanets()

        if (value.trim()) {
            alert.hide()
            planet.search(value.trim())
        } else {
            alert.show('Enter planet date!')
        }
    }

    return(
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter planet name"
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}