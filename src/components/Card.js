import React from "react";
import {Link} from 'react-router-dom';

export const Card = ({element}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                {element.name}
                {element.description}
            </h5>
            <Link to={'/planet/' + element.name} className="btn btn-primary">Open</Link>
        </div>
    </div>
)