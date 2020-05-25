import React, {Fragment, useContext} from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {PlanetContext} from "../context/planet/planetContext";

export const Home = () => {
    const {loading, data} = useContext(PlanetContext)

    return(
        <Fragment>
            <Search/>

            <div className="row">
                {loading
                    ? <p className="text-center">Loading...</p>
                    : data.map(element => (
                        <div className="col-sm-4 mb-4" key={element.id}>
                            <Card element={element}/>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}