import React, {Fragment, useContext, useEffect} from "react";
import {PlanetContext} from "../context/planet/planetContext";
import {Link} from "react-router-dom";

export const Planet = ({match}) => {
    const {getPlanet, getPlanetDescription, loading, name, description, data} = useContext(PlanetContext)
    const urlName = match.params.name

    useEffect(() => {
        getPlanet(urlName)
        getPlanetDescription(urlName)
    }, [])

    if (loading) {
        return <p className="text-center">Loading...</p>
    }

    const {
        distanceFromSun, lengthOfYear,
        moons, equatorialRadius,
        surfaceGravity, atmosphericConstituents
    } = data

    return(
        <Fragment>
            <Link to="/" className="btn btn-link">To main</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sn-3 text-center">
                            <h1>{name}</h1>
                            {description && <p>Description: {description}</p>}
                        </div>
                        <div className="col">
                            <ul>
                                {distanceFromSun && <li>
                                    <strong>
                                        Distance from sun:
                                    </strong> {distanceFromSun}
                                </li>}
                                {lengthOfYear && <li>
                                    <strong>
                                        Length of year:
                                    </strong> {lengthOfYear}
                                </li>}
                                {moons && <li>
                                    <strong>
                                        Moons:
                                    </strong> {moons}
                                </li>}
                                {equatorialRadius && <li>
                                    <strong>
                                        Equatorial radius:
                                    </strong> {equatorialRadius}
                                </li>}
                                {surfaceGravity && <li>
                                    <strong>
                                        Surface gravity:
                                    </strong> {surfaceGravity}
                                </li>}
                                {atmosphericConstituents && <li>
                                    <strong>
                                        Atmospheric constituents:
                                    </strong> {atmosphericConstituents}
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}