import React from "react";
import {Link} from 'react-router-dom';

export const Card = () => (
    <div className="card">
        <div className="card-body">
            <img src={''} alt={''} className="card-img-top"/>
            <h5 className="card-title">
                INVISIBLE
            </h5>
            <Link to={/profile/ + 'invisible'} className="btn btn-primary">Open</Link>
        </div>
    </div>
)