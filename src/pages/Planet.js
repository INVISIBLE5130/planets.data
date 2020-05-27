import React, {Fragment, useContext, useEffect} from "react";
import {PlanetContext} from "../context/planet/planetContext";
import {Link} from "react-router-dom";
import {PlanetInfo} from "../components/PlanetInfo";

export const Planet = ({match}) => {
    const {search, loading, data} = useContext(PlanetContext)
    const urlName = match.params.name

    useEffect(() => {
        search(urlName)
    }, [])

    return(
        <Fragment>
            <Link to="/" className="btn btn-link">To main</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        {loading
                            ? <p className="text-center">Loading...</p>
                            : data.map(element => (
                                <div className="col-sm-4 mb-4" key={element.id}>
                                    <PlanetInfo element={element}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}