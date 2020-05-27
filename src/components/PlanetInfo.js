import React from "react";

export const PlanetInfo = ({element}) => (
    <div>
        <div className="col-sn-3 text-left">
            <h1>{element.name}</h1>
            {element.description && <p><strong>Description: </strong>{element.description}</p>}
            <ul>
                <li>
                    <strong>
                        Distance from sun:
                    </strong> {Object.values(element.distanceFromSun).join("")}
                </li>
                <li>
                    <strong>
                        Length of year:
                    </strong> {Object.values(element.lengthOfYear).join("")}
                </li>
                <li>
                    <strong>
                        Moons:
                    </strong> {Object.values(element.moons).join("")}
                </li>
                <li>
                    <strong>
                        Equatorial radius:
                    </strong> {Object.values(element.equatorialRadius).join("")}
                </li>
                <li>
                    <strong>
                        Surface gravity:
                    </strong> {Object.values(element.surfaceGravity).join("")}
                </li>
                <li>
                    <strong>
                        Atmospheric constituents:
                    </strong> {Object.values(element.atmosphericConstituents).join("")}
                </li>
            </ul>
        </div>
    </div>
)