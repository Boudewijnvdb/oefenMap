import React from 'react';
import Studenten from "./Studenten";

const NavBar = props => {
    const studenten = props.studenten.map(item => (
        <Studenten handleClick={props.handleClick} naam={item.name} />
    ));

    return (
        <div>
            <button onClick={() => props.handleClickAverage()}> Overall gemiddelde</button>
            <h1>{studenten}</h1>
        </div>
    )
}

export default NavBar;

