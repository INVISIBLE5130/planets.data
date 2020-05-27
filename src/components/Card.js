import React from "react";
import {Link} from 'react-router-dom';

export const Card = ({element}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                {element.name}
            </h5>

            <h6>
                {element.description}
            </h6>
            <Link to={'/planet/' + element.name} className="btn btn-dark">Open</Link>
        </div>
    </div>
)